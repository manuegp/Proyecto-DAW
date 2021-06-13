<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\ArticuloController;
use App\Http\Controllers\API\JuegoController;
use App\Http\Controllers\API\VentaController;
use App\Http\Controllers\API\RequisitosJuegoController;
use App\Http\Controllers\API\CarritoController;
use App\Http\Controllers\API\DeseadoController;
use App\Http\Controllers\API\OfertaController;
use App\Http\Controllers\API\MailController;
use App\Http\Controllers\API\ListaProductoCarritoController;
use App\Http\Controllers\API\ListaProductoDeseadoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Esta ruta es la que se usara para loggear al usuario
//Si el correo o la contraseña no existe en la base de datos,
//no devolvera el token generado junto con el id de usuario y si es administrador 
Route::post('/tokens/create', function (Request $request) {

    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return response()->json([
        'token_type' => 'Bearer',
        'access_token' => $user->createToken('token_name')->plainTextToken,
        'id' => $user->id,
        'administrador' => $user->es_administrador
    ]);

});


//Rutas de la tabla Articulos
Route::get('articulos/juegos', [ArticuloController::class, 'all_juegos']);
Route::get('articulos/juego/{id_articulo}', [ArticuloController::class, 'juego_seleccionado']);
Route::get('articulos/merchs', [ArticuloController::class, 'all_merch']);
Route::get('articulos/merch/{id_articulo}', [ArticuloController::class, 'merch_seleccionado']);
Route::get('articulos/oferta_administrador', [ArticuloController::class, 'articulos_en_oferta_administrador']);
Route::get('articulos/oferta', [ArticuloController::class, 'articulos_en_oferta']);
Route::apiResource('articulos', ArticuloController::class);


//Rutas de la tabla Deseados
Route::get('deseados/usuario/{id_usuario}', [DeseadoController::class, 'deseados_usuario']);
Route::post('deseados', [DeseadoController::class, 'store']);


//Rutas de la tabla Lista_producto_deseados
Route::delete('lista_producto_deseados/{id_articulo}/{id_usuario}', [ListaProductoDeseadoController::class, 'borrarProductoDeseado']);
Route::post('lista_producto_deseados/añadir', [ListaProductoDeseadoController::class, 'añadirProductoDeseado']);


//Rutas de la tabla Carrito
Route::get('carrito/usuario/{id_usuario}', [CarritoController::class, 'carrito_usuario']);
Route::post('carrito', [CarritoController::class, 'store']);


//Rutas de la tabla Lista_producto_carrito
Route::delete('lista_producto_carritos/{id_articulo}/{id_usuario}', [ListaProductoCarritoController::class, 'borrarProductoCarrito']);
Route::put('lista_producto_carritos/modificar/{id_articulo}', [ListaProductoCarritoController::class, 'actualizarProductoCarrito']);
Route::post('lista_producto_carritos/añadir', [ListaProductoCarritoController::class, 'añadirProductoCarrito']);


//Rutas de las tabla Ventas
Route::get('ventas/usuario/{id_usuario}', [VentaController::class, 'historial']);
Route::get('ventas', [VentaController::class, 'index']);
Route::post('ventas', [VentaController::class, 'store']);
Route::delete('ventas/{venta}', [VentaController::class, 'destroy']);


//Rutas de la tabla Users
Route::get('usuarios/correo/{email}', [UsuarioController::class, 'email_user']);
Route::get('usuarios/articulo_deseado_oferta/{id_articulo}', [UsuarioController::class, 'articulo_deseado_oferta_users']);
Route::put('usuarios/password/{id_usuario}', [UsuarioController::class, 'updatePassword']);
Route::apiResource('usuarios', UsuarioController::class);


//Rutas de la tabla Juegos
Route::apiResource('juegos', JuegoController::class);

//Rutas de la tabla Requisitos_Juego
Route::apiResource('requisitos_juego', RequisitosJuegoController::class);

//Rutas de la tabla Ofertas
Route::apiResource('ofertas', OfertaController::class);

//Rutas del Correo
Route::get('email_password/{email}', [MailController::class, 'sendEmailForgetPassword']);
Route::get('email_registro/{email}', [MailController::class, 'sendEmailUsuarioRegistrado']);
Route::get('email_pago/{email}', [MailController::class, 'sendEmailPago']);
Route::get('email_ofertas/{email}/{id_articulo}', [MailController::class, 'sendEmailOfertas']);