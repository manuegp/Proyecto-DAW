<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Deseado;
use Illuminate\Http\Request;
use App\Http\Resources\DeseadoResource;
use Illuminate\Support\Facades\DB;

class DeseadoController extends Controller
{
    /*Funcion para mostrar todos los datos que hay en deseados*/
    public function index()
    {
        return DeseadoResource::collection(Deseado::all());
    }

    /*Funcion para crear una nueva fila en deseados*/
    public function store(Request $request)
    {
        $deseado = json_decode($request->getContent(), true);

        $deseado = Deseado::create($deseado);

        return new DeseadoResource($deseado);
    }

    /*Funcion para mostrar una fila en concreto de deseados*/
    public function show(Deseado $deseado)
    {
        return new DeseadoResource($deseado);
    }

    /*Funcion para mostrar todos los datos de deseados, junto con los datos de articulos, 
    cuyo id_usuario sea igual al que se ha introducido como parametro*/
    public function deseados_usuario(string $id_usuario)
    {
        $deseados_usuario = DB::select('SELECT deseados.*, articulos.nombre, articulos.precio, articulos.imagen_principal
                                        FROM deseados, articulos
                                        WHERE deseados.id_usuario = '. $id_usuario. ' AND deseados.id_articulo = articulos.id'
        );
        return $deseados_usuario;
    }

    /*Funcion para actualizar una fila en concreto de deseados*/
    public function update(Request $request, Deseado $deseado)
    {
        $deseadoData = json_decode($request->getContent(), true);
        $deseado->update($deseadoData);

        return new DeseadoResource($deseado);
    }

    /*Funcion para eliminar una fila en concreto de deseados*/
    public function destroy(Deseado $deseado)
    {
        $deseado->delete();
    }

}
