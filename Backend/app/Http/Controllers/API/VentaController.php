<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Venta;
use Illuminate\Http\Request;
use App\Http\Resources\VentaResource;
use Illuminate\Support\Facades\DB;

class VentaController extends Controller
{
    //Funcion para mostrar todos los datos de ventas, junto con el nombre del usuario y articulo
    public function index()
    {

        $ventas = DB::select('SELECT ventas.id_articulo, articulos.nombre AS nombre_articulo, ventas.id_usuario, users.nombre AS nombre_usuario, ventas.cantidad, ventas.precio_total, ventas.created_at
                              from ventas, articulos, users
                              where ventas.id_articulo = articulos.id
                              and ventas.id_usuario = users.id'
        );

        return $ventas;
    }

    //Funcion para crear una nueva venta
    public function store(Request $request)
    {
        $venta = json_decode($request->getContent(), true);

        $venta = Venta::create($venta);

        return new VentaResource($venta);
    }

    //Funcion para mostrar los datos de ventas, junto con el nombre, precio e imagen del articulo, 
    //segun el id_usuario que esta introducido como parametro
    public function historial(string $id_usuario)
    {
        $historial = DB::select('SELECT ventas.*, articulos.nombre, articulos.precio, articulos.imagen_principal
                                 FROM ventas, articulos
                                 WHERE ventas.id_usuario = '. $id_usuario. ' AND ventas.id_articulo = articulos.id'
        );
        return $historial;
    }

    //Funcion para eliminar una venta en concreto
    public function destroy(Venta $venta)
    {
        $venta->delete();
    }
}
