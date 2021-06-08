<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;
use App\Http\Resources\ArticuloResource;
use Illuminate\Support\Facades\DB;

class ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ArticuloResource::collection(Articulo::all());
    }


    /*Para sacar los datos que tiene un articulo junto con los datos de juego, si es un juego*/
    public function all_juegos() {

        $juegos = DB::select('SELECT articulos.*, juegos.etiquetas, juegos.plataforma, juegos.idioma, juegos.video, requisitos_juegos.os, requisitos_juegos.procesador, requisitos_juegos.memoria, requisitos_juegos.graficos, requisitos_juegos.directx, requisitos_juegos.storage, requisitos_juegos.tarjeta_sonido, ofertas.porcentaje 
                              FROM articulos, juegos, requisitos_juegos, ofertas 
                              WHERE articulos.id = juegos.id_articulo
                              AND juegos.id = requisitos_juegos.id_juego
                              AND ofertas.id_articulo = articulos.id'
        );

        return $juegos;
    }


    public function juego_seleccionado(string $id_articulo) {

        $juego = DB::select('SELECT articulos.*, juegos.etiquetas, juegos.plataforma, juegos.idioma, juegos.video, requisitos_juegos.os, requisitos_juegos.procesador, requisitos_juegos.memoria, requisitos_juegos.graficos, requisitos_juegos.directx, requisitos_juegos.storage, requisitos_juegos.tarjeta_sonido, ofertas.porcentaje
                             FROM articulos, juegos, requisitos_juegos, ofertas
                             WHERE articulos.id = juegos.id_articulo
                             AND articulos.id = requisitos_juegos.id_juego
                             AND articulos.id = '. $id_articulo. 
                           ' AND ofertas.id_articulo = articulos.id'
        );

        return $juego;
    }


    public function all_merch() {

        $merchs = DB::select('SELECT articulos.*, ofertas.porcentaje 
                              FROM articulos, ofertas
                              WHERE articulos.id NOT IN (
                                                        SELECT id_articulo 
                                                        FROM juegos
                                                        )
                              AND ofertas.id_articulo = articulos.id'
        );

        return $merchs;

    }

    public function merch_seleccionado(string $id_articulo) {

        $merch = DB::select('SELECT articulos.*, ofertas.porcentaje 
                             FROM articulos, ofertas 
                             WHERE articulos.id NOT IN ( 
                                               SELECT id_articulo 
                                               FROM juegos
                                             )
                             AND articulos.id = '. $id_articulo.
                           ' AND ofertas.id_articulo = articulos.id'
        );
                   
        return $merch;

    }

    public function articulos_en_oferta() {

        $articulos_oferta = DB::select('SELECT articulos.nombre, articulos.imagen_principal, articulos.precio, ofertas.porcentaje
                                        from articulos, ofertas
                                        where articulos.id = ofertas.id_articulo
                                        and ofertas.porcentaje > 0'
        );

        return $articulos_oferta;

    }


    public function pruebas(string $email) {
        $direccion = DB::select('SELECT direccion 
                from users
                where email LIKE "'. $email. '"'
        );
        return $direccion;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $articulo = json_decode($request->getContent(), true);

        $articulo = Articulo::create($articulo);

        return new ArticuloResource($articulo);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Articulo  $articulo
     * @return \Illuminate\Http\Response
     */
    public function show(Articulo $articulo)
    {
        return new ArticuloResource($articulo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Articulo  $articulo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Articulo $articulo)
    {
        $articuloData = json_decode($request->getContent(), true);
        $articulo->update($articuloData);

        return new ArticuloResource($articulo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Articulo  $articulo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Articulo $articulo)
    {
        $articulo->delete();
    }
}
