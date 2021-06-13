<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\RequisitosJuego;
use Illuminate\Http\Request;
use App\Http\Resources\RequisitosJuegoResource;
use Illuminate\Support\Facades\DB;

class RequisitosJuegoController extends Controller
{
    /*Funcion para mostrar todos los datos que hay en la tabla requisitos_juego*/
    public function index()
    {
        return RequisitosJuegoResource::collection(RequisitosJuego::all());
    }

    /*Funcion para crear una nueva fila en requisitos_juego*/
    public function store(Request $request)
    {
        $requisitosjuego = json_decode($request->getContent(), true);

        $requisitosjuego = RequisitosJuego::create($requisitosjuego);

        return new RequisitosJuegoResource($requisitosjuego);
    }

    /*Funcion para mostrar los datos de una fila en concreto de requisitos_juego*/
    public function show(RequisitosJuego $requisitosJuego)
    {
        return new RequisitosJuegoResource($requisitosJuego);
    }

    //Funcion para devolver el id de requisitos del juego segun el id del juego pasado como parametro
    public function devolverIdRequisitosJuego(string $id_juego)
    {
        $id_requisito = DB::select('select id
                                    from requisitos_juegos
                                    where requisitos_juegos.id_juego = '. $id_juego
        );
        return $id_requisito;
    }

    /*Funcion para modificar los datos de una fila en concreto de requisitos_juego*/
    public function update(Request $request, RequisitosJuego $requisitosJuego)
    {
        $requisitosjuegoData = json_decode($request->getContent(), true);
        $requisitosJuego->update($requisitosjuegoData);

        return new RequisitosJuegoResource($requisitosJuego);
    }

    /*Funcion para eliminar una fila en concreto de requisitos_juego*/
    public function destroy(RequisitosJuego $requisitosJuego)
    {
        $requisitosjuego->delete();
    }
}
