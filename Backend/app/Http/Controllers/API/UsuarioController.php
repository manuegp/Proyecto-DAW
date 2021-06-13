<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UsuarioResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    /*Funcion para devolver todos los datos de la tabla de usuarios*/
    public function index()
    {
        return UsuarioResource::collection(User::all());
    }

    /*Funcion para crear un nuevo usuario*/
    public function store(Request $request)
    {

        $this->validate($request,[
            'nombre' => 'required',
            'apellidos' => 'required',
            'password'=> 'required',
            'nick'=> 'required',
            'telefono' => 'required',
            'email' => 'required',
            'es_administrador'=> 'required',
            'direccion'=> 'required',
        ]);
    
        $usuario = User::create([
            'nombre' => $request['nombre'],
            'apellidos' => $request['apellidos'],
            'password'=> bcrypt($request['password']), //Aqui especifico que la contraseña este encriptada
            'nick'=> $request['nick'],
            'telefono' => $request['telefono'],
            'email' => $request['email'],
            'es_administrador'=> $request['es_administrador'],
            'direccion'=> $request['direccion'],
        ]);

        return new UsuarioResource($usuario);
    }

    /*Funcion para devolver los datos de un usuario en concreto*/
    public function show(User $usuario)
    {
        return new UsuarioResource($usuario);
    }

    /*Funcion para devolver los datos de un usuario en concreto, por medio del email, en vez de por su id*/
    public function email_user(string $email) {

        $correo = DB::select('SELECT * 
                              FROM users
                              WHERE email LIKE "'. $email. '"'
        );

        return $correo;

    }

    /*Funcion para devolver los datos de los usuarios que tengan en lista de deseados el articulo especifico*/
    public function articulo_deseado_oferta_users(string $id_articulo) {

        $usuarios = DB::select('SELECT DISTINCT users.*
                                from users, lista_producto_deseados, deseados
                                where deseados.id_usuario = users.id
                                and deseados.id IN (
                                                    select lista_producto_deseados.id_deseado
                                                    from lista_producto_deseados
                                                    where lista_producto_deseados.id_articulo = '. $id_articulo. '
                                                    )'
        );

        return $usuarios;

    }

    /*Funcion para actualizar los datos de un usuario en concreto*/
    public function update(Request $request, User $usuario)
    {
        $usuarioData = json_decode($request->getContent(), true);
        $usuario->update($usuarioData);

        return new UsuarioResource($usuario);
    }

    /*Funcion para actualizar solamente la contraseña del usuario en concreto */
    public function updatePassword(Request $request, string $id_usuario) {

        $contraseña = Hash::make($request->password);

        $usuario = DB::update('UPDATE users 
                            SET password = "'. $contraseña. '" 
                            WHERE id = '. $id_usuario
        );

        return $contraseña;


    }


    //Funcion para eliminar el usuario en concreto
    public function destroy(User $usuario)
    {
        $usuario->delete();
    }
}
