<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RequisitosJuegoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('requisitos_juegos')->insert([

            [
                'id_articulo' => '1',
                'os' => 'Windows 7, Mac OS 10.7 Lion, Ubuntu 16.04 LTS, Orbis, Xbox One System Software',
                'procesador' => 'Intel Core 2 Duo E5200, Intel Core i3, AMD Ryzen Zen 2',
                'memoria' => '4 GB de RAM',
                'graficos' => 'GeForce 9800GTX, GeForce GTX 470',
                'directx' => 'Versión 10',
                'storage' => '9 GB',
                'tarjeta_sonido' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '2',
                'os' => 'Windows 7',
                'procesador' => 'Intel Core 2 Duo E6320',
                'memoria' => '2 GB de RAM',
                'graficos' => 'GeForce 7600 GS',
                'directx' => 'Versión 11',
                'storage' => '2 GB',
                'tarjeta_sonido' => 'DirectX 9.0c',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'id_articulo' => '3',
                'os' => 'Windows 7, Windows 8.1, Windows 10',
                'procesador' => 'Intel Core i3-2100, AMD FX-6300',
                'memoria' => '4 GB de RAM',
                'graficos' => 'NVIDIA GeForce GTX 750 Ti, ATI Radeon HD 7950',
                'directx' => 'Versión 11',
                'storage' => '25 GB',
                'tarjeta_sonido' => 'DirectX 11 sound device',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '6',
                'os' => 'FreeBSD',
                'procesador' => 'SoC Nvidia Tegra',
                'memoria' => '4 GB de RAM',
                'graficos' => 'Nvidia Tegra',
                'directx' => 'Versión 12',
                'storage' => '13 GB',
                'tarjeta_sonido' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
