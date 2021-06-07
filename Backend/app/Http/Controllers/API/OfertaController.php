<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Oferta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OfertaResource;

class OfertaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $ofertas = DB::select('SELECT ofertas.*, articulos.nombre
                               FROM ofertas, articulos
                               WHERE ofertas.id_articulo = articulos.id'
        );

        return $ofertas;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $oferta = json_decode($request->getContent(), true);

        $oferta = Oferta::create($oferta);

        return new OfertaResource($oferta);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function show(Oferta $oferta)
    {
        $ofertas = DB::select('SELECT ofertas.*, articulos.nombre
                               FROM ofertas, articulos
                               WHERE ofertas.id_articulo = articulos.id
                               AND articulos.id = '. $oferta->id_articulo
        );

        return $ofertas;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Oferta $oferta)
    {
        $ofertaData = json_decode($request->getContent(), true);
        $oferta->update($ofertaData);

        return new OfertaResource($oferta);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oferta $oferta)
    {
        $oferta->delete();
    }
}
