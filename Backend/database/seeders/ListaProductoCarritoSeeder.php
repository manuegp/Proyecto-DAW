<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ListaProductoCarritoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('lista_producto_carritos')->insert([

            [
                'id_carrito' => '1',
                'id_articulo' => '8',
                'cantidad' => '2',
            ],

            [
                'id_carrito' => '1',
                'id_articulo' => '6',
                'cantidad' => '3',
            ],

            [
                'id_carrito' => '2',
                'id_articulo' => '3',
                'cantidad' => '5',
            ],

            [
                'id_carrito' => '2',
                'id_articulo' => '4',
                'cantidad' => '6',
            ],

            [
                'id_carrito' => '3',
                'id_articulo' => '5',
                'cantidad' => '4',
            ],

            [
                'id_carrito' => '4',
                'id_articulo' => '6',
                'cantidad' => '3',
            ],

        ]);

    }
}
