<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ListaProductoCarrito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ListaProductoCarritoController extends Controller
{

    //Funcion para añadir un producto al carrito del usuario que esta loggeado
    public function añadirProductoCarrito(Request $request) {

        $this->validate($request,[
            'id_usuario' => 'required',
            'id_articulo' => 'required',
            'cantidad' => 'required',
        ]);

        $id_carrito = DB::select('select id
                                from carritos
                                where carritos.id_usuario = '. $request['id_usuario']
        );

        DB::insert('insert into lista_producto_carritos (lista_producto_carritos.id_carrito, lista_producto_carritos.id_articulo, lista_producto_carritos.cantidad)
                    VALUES ( '. $id_carrito[0]->id. ', '. $request['id_articulo']. ', '. $request['cantidad']. ' )');

    }

    //Funcion para actualizar la cantidad del producto del carrito del usuario que esta loggeado
    public function actualizarProductoCarrito(string $id_articulo, Request $request) {


        $this->validate($request,[
            'id_usuario' => 'required',
            'cantidad' => 'required',
        ]);

        DB::update('UPDATE lista_producto_carritos 
                    set lista_producto_carritos.cantidad = '. $request['cantidad']. ' 
                    where lista_producto_carritos.id_articulo = '. $id_articulo. ' 
                    and lista_producto_carritos.id_carrito = ( 
                                                            select id 
                                                            from carritos 
                                                            where id_usuario = '. $request['id_usuario']. ' 
                                                            )'
        );

    }

    //Funcion para eliminar un producto del carrito del usuario que esta loggeado
    public function borrarProductoCarrito(string $id_articulo, string $id_usuario) {

        DB::delete('DELETE from lista_producto_carritos
                    where lista_producto_carritos.id_articulo = '. $id_articulo. '
                    and lista_producto_carritos.id_carrito = (
                                                                select id
                                                                from carritos
                                                                where carritos.id_usuario = '. $id_usuario. '
                                                            )'
        );

    }

}
