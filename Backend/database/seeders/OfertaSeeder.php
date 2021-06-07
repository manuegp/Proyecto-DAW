<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfertaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('ofertas')->insert([

            [
                'id_articulo' => '1',
                'precio_original' => '14.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '2',
                'precio_original' => '14.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'precio_original' => '59.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '4',
                'precio_original' => '14.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'precio_original' => '39.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '6',
                'precio_original' => '54.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '7',
                'precio_original' => '49.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '8',
                'precio_original' => '9.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '9',
                'precio_original' => '19.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '10',
                'precio_original' => '9.99',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '11',
                'precio_original' => '14.95',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '12',
                'precio_original' => '10.95',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],


            [
                'id_articulo' => '13',
                'precio_original' => '19.95',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '14',
                'precio_original' => '29.95',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '15',
                'precio_original' => '12.95',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);

    }
}
