<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\Correo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

class MailController extends Controller
{

    /*Estas funciones se usaran para enviar un email al correo que esta pasado como parametro, con los datos que hay en $details, 
    los cuales se usaran en la vista Mail.blade.php*/


    /*Esta funcion se usara cuando el usuario quiera cambiar de contraseña */
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

        Mail::to($email)->send(new Correo($details));
        

    }

    /*Esta funcion se usara cuando se ha registrado un nuevo usuario*/
    public function sendEmailUsuarioRegistrado(string $email) {

        $details = [
            'title' => 'Su cuenta se ha registrado',
            'body' => 'Bienvenido a MMJGAMES, ya puede loggearse con su cuenta creada',
            'juegos' => '',
            'merch' => '',
            'direccion' => '',
            'coste' => '',
            'articulo_oferta' => ''
        ];

        Mail::to($email)->send(new Correo($details));

    }

    /*Esta funcion se usara cuando un usuario haya realizado un pago */
    public function sendEmailPago(string $email) {        

        //Aqui guardo aquellos productos (juegos) que estaban en carrito y se han comprado, 
        //cuyo usuario es aquel que tiene el email que se ha introducido como parametro
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

        //Aqui guardo aquellos productos (merchandising) que estaban en carrito y se han comprado, 
        //cuyo usuario es aquel que tiene el email que se ha introducido como parametro
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

        //Aqui guardo la direccion del usuario, cuyo email sea el que se ha introducido como parametro
        $direccion = DB::select('SELECT direccion 
                                 from users
                                 where email LIKE "'. $email. '"'
        );

        //Aqui guardo el coste total de todos los productos que tenia el usuario en carrito
        $coste = DB::select('SELECT ROUND(SUM((articulos.precio - ((ofertas.porcentaje*articulos.precio)/100))*carritos.cantidad), 2) AS precio_total
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

        Mail::to($email)->send(new Correo($details));
        

    }


    /*Esta funcion se usara cuando se haya modificado una oferta*/
    public function sendEmailOfertas(string $email, string $id_articulo) {

        //Aqui guardo el nombre del articulo y el precio del articulo con el descuento aplicado,
        //cuyo id_articulo sea el mismo que el que se ha pasado como parametro
        $articulo = DB::select('SELECT articulos.nombre, ROUND((articulos.precio - ((ofertas.porcentaje*articulos.precio)/100)), 2) AS precio 
                                FROM articulos, ofertas 
                                WHERE ofertas.id_articulo = '. $id_articulo. ' 
                                and articulos.id = '. $id_articulo );

        $details = [
            'title' => 'Nuevas ofertas',
            'body' => 'Este producto de tu lista de deseados está en oferta',
            'juegos' => '',
            'merch' => '',
            'direccion' => '',
            'coste' => '',
            'articulo_oferta' => $articulo
        ];

        Mail::to($email)->send(new Correo($details));

    }

}
