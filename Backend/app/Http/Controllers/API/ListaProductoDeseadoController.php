<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ListaProductoDeseado;
use App\Http\Resources\ListaProductoDeseadoResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ListaProductoDeseadoController extends Controller
{

    //Funcion para añadir un producto a la lista de deseados del usuario que esta loggeado
    public function añadirProductoDeseado(Request $request) {

        $this->validate($request,[
            'id_usuario' => 'required',
            'id_articulo' => 'required',
        ]);

        $id_deseado = DB::select('select id
                                from carritos
                                where carritos.id_usuario = '. $request['id_usuario']
        );

        DB::insert('insert into lista_producto_deseados (lista_producto_deseados.id_deseado, lista_producto_deseados.id_articulo)
                  VALUES ( '. $id_deseado[0]->id. ', '. $request['id_articulo']. ' )');

    }
    
    //Funcion para eliminar un producto de la lista de deseados del usuario que esta loggeado
    public function borrarProductoDeseado(string $id_articulo, string $id_usuario) {

        DB::delete('DELETE from lista_producto_deseados
                    where lista_producto_deseados.id_articulo = '. $id_articulo. '
                    and lista_producto_deseados.id_deseado = (
                                                                select id
                                                                from deseados
                                                                where deseados.id_usuario = '. $id_usuario. '
                                                            )'
        );

    }
}
