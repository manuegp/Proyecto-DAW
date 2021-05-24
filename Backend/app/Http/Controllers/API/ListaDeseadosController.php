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
        $listaDeseados = json_decode($request->getContent(), true);

        $listaDeseados = ListaDeseados::create($listaDeseados);

        return new ListaDeseadosResource($listaDeseados);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ListaDeseados  $listaDeseados
     * @return \Illuminate\Http\Response
     */
    public function show(ListaDeseados $listaDeseados)
    {
        return new ListaDeseadosResource($listaDeseados);
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
        $listaDeseadosData = json_decode($request->getContent(), true);
        $listaDeseados->update($listaDeseadosData);

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
