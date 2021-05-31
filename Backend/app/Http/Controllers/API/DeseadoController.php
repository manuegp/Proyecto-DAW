<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Deseado;
use Illuminate\Http\Request;
use App\Http\Resources\DeseadoResource;

class DeseadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DeseadoResource::collection(Deseado::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $deseado = json_decode($request->getContent(), true);

        $deseado = Deseado::create($deseado);

        return new DeseadoResource($deseado);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Deseado  $deseado
     * @return \Illuminate\Http\Response
     */
    public function show(Deseado $deseado)
    {
        return new DeseadoResource($deseado);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Deseado  $deseado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Deseado $deseado)
    {
        $deseadoData = json_decode($request->getContent(), true);
        $deseado->update($deseadoData);

        return new DeseadoResource($deseado);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Deseado  $deseado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Deseado $deseado)
    {
        $deseado->delete();
    }
}
