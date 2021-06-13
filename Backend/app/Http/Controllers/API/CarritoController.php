<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Carrito;
use Illuminate\Http\Request;
use App\Http\Resources\CarritoResource;
use Illuminate\Support\Facades\DB;

class CarritoController extends Controller
{

    /*Funcion para crear un nuevo carrito*/
    public function store(Request $request)
    {
        $carrito = json_decode($request->getContent(), true);

        $carrito = Carrito::create($carrito);

        return new CarritoResource($carrito);
    }

    /*Funcion para mostrar los datos de carrito, junto a datos de articulos y ofertas, 
    cuyo id_usuario de carrito sea igual al que se ha introducido como parametro*/
    public function carrito_usuario(string $id_usuario)
    {

        $carrito_usuario = DB::select('SELECT articulos.id, articulos.nombre, articulos.precio, articulos.imagen_principal, ofertas.porcentaje, lista_producto_carritos.cantidad
                                        from articulos, lista_producto_carritos, carritos, ofertas
                                        WHERE articulos.id = lista_producto_carritos.id_articulo
                                        and ofertas.id_articulo = articulos.id 
                                        and lista_producto_carritos.id_carrito = carritos.id
                                        and carritos.id_usuario = '. $id_usuario
        );

        return $carrito_usuario;
    }

    //Funcion para eliminar aquel carrito cuyo id_usuario sea el introducido como parametro
    public function deleteCarritoUsuario(string $id_usuario) {
        DB::delete('delete from carritos
                    WHERE carritos.id_usuario = '. $id_usuario
        );
    }
}
