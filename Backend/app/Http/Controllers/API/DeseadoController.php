<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Deseado;
use Illuminate\Http\Request;
use App\Http\Resources\DeseadoResource;
use Illuminate\Support\Facades\DB;

class DeseadoController extends Controller
{

    /*Funcion para crear una nueva lista de deseados*/
    public function store(Request $request)
    {
        $deseado = json_decode($request->getContent(), true);

        $deseado = Deseado::create($deseado);

        return new DeseadoResource($deseado);
    }

    /*Funcion para mostrar todos los datos de deseados, junto con los datos de articulos, 
    cuyo id_usuario sea igual al que se ha introducido como parametro*/
    public function deseados_usuario(string $id_usuario)
    {
        $deseados_usuario = DB::select('SELECT articulos.id, articulos.nombre, articulos.precio, articulos.imagen_principal
                                        from articulos, lista_producto_deseados, deseados
                                        WHERE articulos.id = lista_producto_deseados.id_articulo
                                        and lista_producto_deseados.id_deseado = deseados.id
                                        and deseados.id_usuario = '. $id_usuario
        );
        return $deseados_usuario;
    }


    //Funcion para eliminar aquella lista de deseados cuyo id_usuario sea el introducido como parametro
    public function deleteDeseadoUsuario(string $id_usuario) {
        DB::delete('delete from deseados
                    WHERE deseados.id_usuario = '. $id_usuario
        );
    }

}
