<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VentaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ventas')->insert([

            [
                'id_articulo' => '1',
                'id_usuario' => '1',
                'cantidad' => '1',
                'precio_total' => '14.99',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'id_usuario' => '4',
                'cantidad' => '2',
                'precio_total' => '119.98',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'id_usuario' => '4',
                'cantidad' => '2',
                'precio_total' => '79.98',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'id_usuario' => '3',
                'cantidad' => '1',
                'precio_total' => '39.99',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
