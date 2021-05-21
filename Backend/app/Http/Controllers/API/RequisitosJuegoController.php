<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\RequisitosJuego;
use Illuminate\Http\Request;
use App\Http\Resources\RequisitosJuegoResource;

class RequisitosJuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RequisitosJuegoResource::collection(RequisitosJuego::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $requisitosjuego = json_decode($request->getContent(), true);

        $requisitosjuego = RequisitosJuego::create($requisitosjuego);

        return new RequisitosJuegoResource($requisitosjuego);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RequisitosJuego  $requisitosJuego
     * @return \Illuminate\Http\Response
     */
    public function show(RequisitosJuego $requisitosJuego)
    {
        return new RequisitosJuegoResource($requisitosjuego);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RequisitosJuego  $requisitosJuego
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequisitosJuego $requisitosJuego)
    {
        $requisitosjuegoData = json_decode($request->getContent(), true);
        $requisitosjuego->update($requisitosjuegoData);

        return new RequisitosJuegoResource($requisitosjuego);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RequisitosJuego  $requisitosJuego
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequisitosJuego $requisitosJuego)
    {
        $requisitosjuego->delete();
    }
}
