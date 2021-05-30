<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ListaDeseados;
use Illuminate\Http\Request;
use App\Http\Resources\ListaDeseadosResource;

class ListaDeseadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ListaDeseadosResource::collection(ListaDeseados::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $listadeseados = json_decode($request->getContent(), true);

        $listadeseados = ListaDeseados::create($listadeseados);

        return new ListaDeseadosResource($listadeseados);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ListaDeseados  $listaDeseados
     * @return \Illuminate\Http\Response
     */
    public function show(ListaDeseados $a)
    {
        return new ListaDeseadosResource($a);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ListaDeseados  $listaDeseados
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ListaDeseados $listaDeseados)
    {
        $listadeseadosData = json_decode($request->getContent(), true);
        $listaDeseados->update($listadeseadosData);

        return new ListaDeseadosResource($listaDeseados);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ListaDeseados  $listaDeseados
     * @return \Illuminate\Http\Response
     */
    public function destroy(ListaDeseados $listaDeseados)
    {
        $listaDeseados->delete();
    }
}
