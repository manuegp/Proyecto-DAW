<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarritoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('carritos')->insert([

            [
                'id_usuario' => '3',
                'id_articulo' => '8',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '1',
                'id_articulo' => '6',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '3',
                'id_articulo' => '3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '2',
                'id_articulo' => '4',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '2',
                'id_articulo' => '5',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '2',
                'id_articulo' => '6',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
