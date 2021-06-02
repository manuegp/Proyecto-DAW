<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
            'body' => 'Click aqui para poder cambiar su contraseña'
        ];

        Mail::to($email)->send(new TestMail($details));
        

    }

    public function sendEmailUsuarioRegistrado(string $email) {

        $details = [
            'title' => 'Registrado',
            'body' => 'Bienvenido a MMJ'
        ];

        Mail::to($email)->send(new TestMail($details));
        

    }

}
