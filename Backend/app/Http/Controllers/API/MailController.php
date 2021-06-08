<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

class MailController extends Controller
{
    public function sendEmail() {

        $details = [
            'title' => 'Mail from Surfside Media',
            'body' => 'Apruebanos porfa'
        ];

        Mail::to("fct.carlos3@gmail.com")->send(new TestMail($details));
        return "Email Sent";

    }

    public function sendEmailForgetPassword(string $email) {

        $details = [
            'title' => 'Contraseña olvidada',
            'body' => 'Click aqui para poder cambiar su contraseña: http://localhost:4200/recuperar-password',
            'juegos' => '',
            'merch' => '',
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

        $details = [
            'title' => 'Pago',
            'body' => 'Su pago ha sido realizado correctamente',
            'juegos' => $juegos,
            'merch' => $merch,
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
            'articulo_oferta' => $articulo
        ];

        Mail::to($email)->send(new TestMail($details));

    }

}
