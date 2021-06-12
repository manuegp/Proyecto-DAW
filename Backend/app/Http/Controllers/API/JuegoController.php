<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Juego;
use Illuminate\Http\Request;
use App\Http\Resources\JuegoResource;

class JuegoController extends Controller
{
    /*Funcion para mostrar todos los datos que hay en la tabla juegos*/
    public function index()
    {
        return JuegoResource::collection(Juego::all());
    }

    /*Funcion para crear una nueva fila en la tabla juegos*/
    public function store(Request $request)
    {
        $juego = json_decode($request->getContent(), true);

        $juego = Juego::create($juego);

        return new JuegoResource($juego);
    }

    /*Funcion para mostrar los datos de una fila en concreto de juegos*/
    public function show(Juego $juego)
    {
        return new JuegoResource($juego);
    }

    /*Funcion para actualizar los datos de una fila en concreto de juegos*/
    public function update(Request $request, Juego $juego)
    {
        $juegoData = json_decode($request->getContent(), true);
        $juego->update($juegoData);

        return new JuegoResource($juego);
    }

    /*Funcion para eliminar una fila en concreto de juegos*/
    public function destroy(Juego $juego)
    {
        $juego->delete();
    }
}
