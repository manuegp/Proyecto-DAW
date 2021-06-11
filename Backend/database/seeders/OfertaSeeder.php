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
                'porcentaje' => 24,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '2',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'porcentaje' => 32,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '4',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'porcentaje' => 24,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '6',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '7',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '8',
                'porcentaje' => 11,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '9',
                'porcentaje' => 23,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '10',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '11',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '12',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],


            [
                'id_articulo' => '13',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '14',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '15',
                'porcentaje' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);

    }
}
