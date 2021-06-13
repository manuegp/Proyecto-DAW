<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ListaProductoDeseadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lista_producto_deseados')->insert([

            [
                'id_deseado' => '1',
                'id_articulo' => '2',
            ],

            [
                'id_deseado' => '2',
                'id_articulo' => '1',
            ],

            [
                'id_deseado' => '3',
                'id_articulo' => '3',
            ],

            [
                'id_deseado' => '4',
                'id_articulo' => '3',
            ],

            [
                'id_deseado' => '1',
                'id_articulo' => '3',
            ],

            [
                'id_deseado' => '3',
                'id_articulo' => '4',
            ],

        ]);
    }
}
