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
            'carrito' => ''
        ];

        Mail::to($email)->send(new TestMail($details));
        

    }

    public function sendEmailUsuarioRegistrado(string $email) {

        $details = [
            'title' => 'Registrado',
            'body' => 'Bienvenido a MMJ',
            'carrito' => ''
        ];

        Mail::to($email)->send(new TestMail($details));

    }

    public function sendEmailPago(string $email) {

        $carrito = DB::select('select articulos.nombre, articulos.imagen_principal, carritos.cantidad
                                 from articulos, carritos
                                 where carritos.id_articulo = articulos.id
                                 and carritos.id_usuario = (select id
                                                            FROM users
                                                            WHERE email LIKE "'. $email. '")'
        );

        $details = [
            'title' => 'Pago',
            'body' => 'Su pago ha sido realizado correctamente',
            'carrito' => $carrito
        ];

        Mail::to($email)->send(new TestMail($details));
        

    }

}
