<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Carrito;
use Illuminate\Http\Request;
use App\Http\Resources\CarritoResource;
use Illuminate\Support\Facades\DB;

class CarritoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CarritoResource::collection(Carrito::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $carrito = json_decode($request->getContent(), true);

        $carrito = Carrito::create($carrito);

        return new CarritoResource($carrito);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function show(Carrito $carrito)
    {
        return new CarritoResource($carrito);
    }

    public function carrito_usuario(string $id_usuario)
    {
        $carrito_usuario = DB::select('SELECT carritos.*, articulos.nombre, articulos.precio, articulos.imagen_principal
                                       FROM carritos, articulos
                                       WHERE carritos.id_usuario = '. $id_usuario. ' AND carritos.id_articulo = articulos.id'
        );
        return $carrito_usuario;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carrito $carrito)
    {
        $carritoData = json_decode($request->getContent(), true);
        $carrito->update($carritoData);

        return new CarritoResource($carrito);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carrito $carrito)
    {
        $carrito->delete();
    }
}
