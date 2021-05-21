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
                'fecha_venta' => '2021-04-14',
                'metodo_pago' => 'PaysafeCard',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'id_usuario' => '4',
                'cantidad' => '2',
                'fecha_venta' => '2021-05-05',
                'metodo_pago' => 'PaysafeCard',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'id_usuario' => '4',
                'cantidad' => '2',
                'fecha_venta' => '2021-03-10',
                'metodo_pago' => 'PaysafeCard',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'id_usuario' => '3',
                'cantidad' => '1',
                'fecha_venta' => '2021-05-10',
                'metodo_pago' => 'Mastercard',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
