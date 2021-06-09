<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

class MailController extends Controller
{

    public function sendEmailForgetPassword(string $email) {

        $details = [
            'title' => 'Contraseña olvidada',
            'body' => 'Click aqui para poder cambiar su contraseña: http://localhost:4200/recuperar-password',
            'juegos' => '',
            'merch' => '',
            'direccion' => '',
            'coste' => '',
            'articulo_oferta' => ''
        ];

        Mail::to($email)->send(new TestMail($details));
        

    }

    public function sendEmailUsuarioRegistrado(string $email) {

        $details = [
            'title' => 'Registrado',
            'body' => 'Bienvenido a MMJ',
            'juegos' => '',
            'merch' => '',
            'direccion' => '',
            'coste' => '',
            'articulo_oferta' => ''
        ];

        Mail::to($email)->send(new TestMail($details));

    }

    public function sendEmailPago(string $email) {        

        $juegos = DB::select('SELECT articulos.nombre, carritos.cantidad
                              FROM articulos, carritos
                              WHERE carritos.id_articulo = articulos.id
                              AND carritos.id_usuario = (select id
                                                      FROM users
                                                      WHERE email LIKE "'. $email. '")
                              and articulos.id IN (
                                                  SELECT id_articulo 
                                                  FROM juegos
                                                  )'
        );

        $merch = DB::select('SELECT articulos.nombre, carritos.cantidad
                              FROM articulos, carritos
                              WHERE carritos.id_articulo = articulos.id
                              AND carritos.id_usuario = (select id
                                                      FROM users
                                                      WHERE email LIKE "'. $email. '")
                              and articulos.id NOT IN (
                                                  SELECT id_articulo 
                                                  FROM juegos
                                                  )'
        );

        $direccion = DB::select('SELECT direccion 
                                 from users
                                 where email LIKE "'. $email. '"'
        );


        $coste = DB::select('SELECT SUM((articulos.precio - ((ofertas.porcentaje*articulos.precio)/100))*carritos.cantidad) AS precio_total
                             from articulos, ofertas, carritos
                             where articulos.id = ofertas.id_articulo
                             and articulos.id = carritos.id_articulo
                             and carritos.id_usuario = (select id 
                                                     from users
                                                     where email LIKE "'. $email. '")'
        );

        $details = [
            'title' => 'Pago',
            'body' => 'Su pago ha sido realizado correctamente',
            'juegos' => $juegos,
            'merch' => $merch,
            'direccion' => $direccion,
            'coste' => $coste,
            'articulo_oferta' => ''
        ];

        Mail::to($email)->send(new TestMail($details));
        

    }


    public function sendEmailOfertas(string $email, string $id_articulo) {

        $articulo = DB::select('SELECT * 
                                FROM articulos 
                                WHERE id = '. $id_articulo );

        $details = [
            'title' => 'Nuevas ofertas',
            'body' => 'Este producto de tu lista de deseados está en oferta',
            'juegos' => '',
            'merch' => '',
            'direccion' => '',
            'coste' => '',
            'articulo_oferta' => $articulo
        ];

        Mail::to($email)->send(new TestMail($details));

    }

}
