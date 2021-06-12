<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Carrito;
use Illuminate\Http\Request;
use App\Http\Resources\CarritoResource;
use Illuminate\Support\Facades\DB;

class CarritoController extends Controller
{
    /*Funcion para mostrar todos los datos de carrito*/
    public function index()
    {
        return CarritoResource::collection(Carrito::all());
    }

    /*Funcion para crear una nueva fila de carrito*/
    public function store(Request $request)
    {
        $carrito = json_decode($request->getContent(), true);

        $carrito = Carrito::create($carrito);

        return new CarritoResource($carrito);
    }

    /*Funcion para mostrar los datos de una fila en concreto de carrito*/
    public function show(Carrito $carrito)
    {
        return new CarritoResource($carrito);
    }

    /*Funcion para mostrar los datos de carrito, junto a datos de articulos y ofertas, 
    cuyo id_usuario de carrito sea igual al que se ha introducido como parametro*/
    public function carrito_usuario(string $id_usuario)
    {
        $carrito_usuario = DB::select('SELECT carritos.*, articulos.nombre, articulos.precio, articulos.imagen_principal, ofertas.porcentaje
                                       FROM carritos, articulos, ofertas
                                       WHERE carritos.id_usuario = '. $id_usuario. ' 
                                       AND carritos.id_articulo = articulos.id 
                                       AND ofertas.id_articulo = carritos.id_articulo'
        );

        return $carrito_usuario;
    }

    /*Funcion para actualizar una fila en concreto de carrito*/
    public function update(Request $request, Carrito $carrito)
    {
        $carritoData = json_decode($request->getContent(), true);
        $carrito->update($carritoData);

        return new CarritoResource($carrito);
    }

    /*Funcion para eliminar una fila en concreto de carrito*/
    public function destroy(Carrito $carrito)
    {
        $carrito->delete();
    }
}
