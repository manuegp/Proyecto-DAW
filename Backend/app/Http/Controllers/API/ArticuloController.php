<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;
use App\Http\Resources\ArticuloResource;
use Illuminate\Support\Facades\DB;

class ArticuloController extends Controller
{
    /*Funcion para devolver los datos de todos los articulos, ya sean juegos o merchandising*/
    public function index()
    {
        return ArticuloResource::collection(Articulo::all());
    }


    /*Funcion para sacar los datos de todos los articulos que sean juegos*/
    public function all_juegos() {

        $juegos = DB::select('SELECT articulos.*, juegos.etiquetas, juegos.plataforma, juegos.idioma, juegos.video, requisitos_juegos.os, requisitos_juegos.procesador, requisitos_juegos.memoria, requisitos_juegos.graficos, requisitos_juegos.directx, requisitos_juegos.storage, requisitos_juegos.tarjeta_sonido, ofertas.porcentaje 
                              FROM articulos, juegos, requisitos_juegos, ofertas 
                              WHERE articulos.id = juegos.id_articulo
                              AND juegos.id = requisitos_juegos.id_juego
                              AND ofertas.id_articulo = articulos.id'
        );

        return $juegos;
    }


    /*Funcion para sacar los datos de un articulo que sea juego*/
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

    /*Funcion para sacar los datos de todos los articulos que sean merchansising*/
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

    /*Funcion para sacar los datos de un articulo que sea merchansising*/
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

    /*Funcion para sacar los datos de todos los articulos junto con el porcentaje que tienen en la tabla oferta*/
    public function articulos_en_oferta_administrador() {

        $articulos_oferta = DB::select('SELECT articulos.id, articulos.nombre, articulos.imagen_principal, articulos.precio, articulos.descripcion, articulos.fecha_salida, ofertas.porcentaje
                                        from articulos, ofertas
                                        where articulos.id = ofertas.id_articulo'
        );

        return $articulos_oferta;

    }

    /*Funcion para sacar los datos de todos los articulos junto con el porcentaje que tienen en la tabla oferta, cuyo porcentaje sea mayor a 0*/
    public function articulos_en_oferta() {

        $articulos_oferta = DB::select('SELECT articulos.id, articulos.nombre, articulos.imagen_principal, articulos.precio, articulos.descripcion, articulos.fecha_salida, ofertas.porcentaje
                                        from articulos, ofertas
                                        where articulos.id = ofertas.id_articulo and ofertas.porcentaje > 0'
        );

        return $articulos_oferta;

    }

    /*Funcion para crear el nuevo articulo, ya sea juego o merchandising*/
    public function store(Request $request)
    {

        $articulo = json_decode($request->getContent(), true);

        $articulo = Articulo::create($articulo);

        return new ArticuloResource($articulo);
    }

    /*Funcion para mostrar un articulo en concreto, ya sea juego o merchandising*/
    public function show(Articulo $articulo)
    {
        return new ArticuloResource($articulo);
    }

    /*Funcion para actualizar un articulo en concreto, ya sea juego o merchandising*/
    public function update(Request $request, Articulo $articulo)
    {
        $articuloData = json_decode($request->getContent(), true);
        $articulo->update($articuloData);

        return new ArticuloResource($articulo);
    }

    /*Funcion para eliminar un articulo en concreto, ya sea juego o merchandising*/
    public function destroy(Articulo $articulo)
    {
        $articulo->delete();
    }
}
