<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Oferta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OfertaResource;

class OfertaController extends Controller
{
    /*Funcion para mostrar todos los datos de ofertas, junto con el nombre del articulo*/
    public function index()
    {
        
        $ofertas = DB::select('SELECT ofertas.*, articulos.nombre
                               FROM ofertas, articulos
                               WHERE ofertas.id_articulo = articulos.id'
        );

        return $ofertas;

    }

    /*Funcion para crear una nueva oferta*/
    public function store(Request $request)
    {
        $oferta = json_decode($request->getContent(), true);

        $oferta = Oferta::create($oferta);

        return new OfertaResource($oferta);
    }

    /*Funcion para mostrar los datos de una oferta en concreto, junto con el nombre del articulo*/
    public function show(Oferta $oferta)
    {
        $ofertas = DB::select('SELECT ofertas.*, articulos.nombre
                               FROM ofertas, articulos
                               WHERE ofertas.id_articulo = articulos.id
                               AND articulos.id = '. $oferta->id_articulo
        );

        return $ofertas;
    }

    /*Funcion para modificar una oferta en concreto*/
    public function update(Request $request, Oferta $oferta)
    {
        $ofertaData = json_decode($request->getContent(), true);
        $oferta->update($ofertaData);

        return new OfertaResource($oferta);
    }

    /*Funcion para eliminar una oferta en concreto*/
    public function destroy(Oferta $oferta)
    {
        $oferta->delete();
    }
}
