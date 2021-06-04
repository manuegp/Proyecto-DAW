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
use App\Http\Controllers\API\MailController;

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

Route::post('/tokens/create', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();
    /*$password = User::where('password', $request->password)->first();*/

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return "hola";
    }

    return response()->json([
        'token_type' => 'Bearer',
        'access_token' => $user->createToken('token_name')->plainTextToken,
        'id' => $user->id,
        'administrador' => $user->es_administrador
    ]);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('articulos/juegos', [ArticuloController::class, 'all_juegos']);
Route::get('articulos/juego/{id_articulo}', [ArticuloController::class, 'juego_seleccionado']);
Route::get('articulos/merchs', [ArticuloController::class, 'all_merch']);
Route::get('articulos/merch/{id_articulo}', [ArticuloController::class, 'merch_seleccionado']);
Route::get('deseados/usuario/{id_usuario}', [DeseadoController::class, 'deseados_usuario']);
Route::get('ventas/usuario/{id_usuario}', [VentaController::class, 'historial']);
Route::get('carrito/usuario/{id_usuario}', [CarritoController::class, 'carrito_usuario']);
Route::get('usuarios/correo/{email}', [UsuarioController::class, 'email_user']);

Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('articulos', ArticuloController::class);
Route::apiResource('juegos', JuegoController::class);
Route::apiResource('ventas', VentaController::class);
Route::apiResource('requisitos_juego', RequisitosJuegoController::class);
Route::apiResource('carrito', CarritoController::class);
Route::apiResource('deseados', DeseadoController::class);


Route::middleware('auth:sanctum')->get('/', function(){
    return response()->json(["nombre"=>"hola"]);
});

Route::get('email', [MailController::class, 'sendEmail']);
Route::get('email_password/{email}', [MailController::class, 'sendEmailForgetPassword']);
Route::get('email_registro/{email}', [MailController::class, 'sendEmailUsuarioRegistrado']);
Route::get('email_pago/{email}', [MailController::class, 'sendEmailPago']);