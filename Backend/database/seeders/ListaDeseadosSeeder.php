<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ListaDeseadosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lista_deseados')->insert([

            [
                'id_articulo' => '1',
                'id_usuario' => '2',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '2',
                'id_usuario' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'id_usuario' => '3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '4',
                'id_usuario' => '3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'id_usuario' => '3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '6',
                'id_usuario' => '4',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
