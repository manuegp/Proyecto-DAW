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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UsuarioResource::collection(User::all());
    }

    public function email_user(string $email) {

        $correo = DB::select('SELECT * 
                              FROM users
                              WHERE email LIKE "'. $email. '"'
        );

        return $correo;

    }

    public function articulo_deseado_oferta_users(string $id_articulo) {

        $usuarios = DB::select('SELECT DISTINCT users.*
                                FROM users, deseados
                                WHERE deseados.id_articulo = '. $id_articulo. 
                               ' AND users.id = deseados.id_usuario'
        );

        return $usuarios;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
            'password'=> bcrypt($request['password']),
            'nick'=> $request['nick'],
            'telefono' => $request['telefono'],
            'email' => $request['email'],
            'es_administrador'=> $request['es_administrador'],
            'direccion'=> $request['direccion'],
        ]);

        return new UsuarioResource($usuario);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(User $usuario)
    {
        return new UsuarioResource($usuario);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $usuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $usuario)
    {
        $usuarioData = json_decode($request->getContent(), true);
        $usuario->update($usuarioData);

        return new UsuarioResource($usuario);
    }

    public function updatePassword(Request $request, string $id_usuario) {

        $contraseña = Hash::make($request->password);

        $usuario = DB::update('UPDATE users 
                            SET password = "'. $contraseña. '" 
                            WHERE id = '. $id_usuario
        );

        return $contraseña;


    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $usuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $usuario)
    {
        $usuario->delete();
    }
}
