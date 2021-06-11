<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Venta;
use Illuminate\Http\Request;
use App\Http\Resources\VentaResource;
use Illuminate\Support\Facades\DB;

class VentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $ventas = DB::select('SELECT ventas.id_articulo, articulos.nombre AS nombre_articulo, ventas.id_usuario, users.nombre AS nombre_usuario, ventas.cantidad, ventas.precio_total, ventas.created_at
                              from ventas, articulos, users
                              where ventas.id_articulo = articulos.id
                              and ventas.id_usuario = users.id'
        );

        return $ventas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $venta = json_decode($request->getContent(), true);

        $venta = Venta::create($venta);

        return new VentaResource($venta);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function show(Venta $venta)
    {
        return new VentaResource($venta);
    }

    public function historial(string $id_usuario)
    {
        $historial = DB::select('SELECT ventas.*, articulos.nombre, articulos.precio, articulos.imagen_principal
                                 FROM ventas, articulos
                                 WHERE ventas.id_usuario = '. $id_usuario. ' AND ventas.id_articulo = articulos.id'
        );
        return $historial;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Venta $venta)
    {
        $ventaData = json_decode($request->getContent(), true);
        $venta->update($ventaData);

        return new VentaResource($venta);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Venta $venta)
    {
        $venta->delete();
    }
}
