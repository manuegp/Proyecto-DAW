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
                'id_juego' => '1',
                'os' => 'Windows 7, Mac OS 10.7 Lion, Ubuntu 16.04 LTS, Orbis, Xbox One System Software',
                'procesador' => 'Intel Core 2 Duo E5200, Intel Core i3, AMD Ryzen Zen 2',
                'memoria' => '4 GB de RAM',
                'graficos' => 'GeForce 9800GTX, GeForce GTX 470',
                'directx' => 'Versión 10',
                'storage' => '9 GB',
                'tarjeta_sonido' => 'DirectX 9.0c',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_juego' => '2',
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
                'id_juego' => '3',
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
                'id_juego' => '4',
                'os' => 'Windows 7, Windows 8, Windows Vista, Windows XP',
                'procesador' => '2.4 GHz Quad Core 2.0',
                'memoria' => '8 GB de RAM',
                'graficos' => 'Intel HD Graphics 4000 and higher, ATI Radeon HD-Series 4650 and higher, Nvidia GeForce 2xx-Series',
                'directx' => 'Versión 9',
                'storage' => '449 MB',
                'tarjeta_sonido' => 'DirectX 11 sound device',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_juego' => '5',
                'os' => 'Windows 8.1, Windows 10',
                'procesador' => 'Intel Core i5 4670 or AMD A10-7850K',
                'memoria' => '8 GB de RAM',
                'graficos' => 'NVIDIA GeForce GTX 980 VRAM 4GB or AMD Radeon R9 380X VRAM 4GB',
                'directx' => 'Versión 11',
                'storage' => '50 GB',
                'tarjeta_sonido' => 'DirectX 11 sound device',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_juego' => '6',
                'os' => 'FreeBSD',
                'procesador' => 'SoC Nvidia Tegra',
                'memoria' => '4 GB de RAM',
                'graficos' => 'Nvidia Tegra',
                'directx' => 'Versión 12',
                'storage' => '13 GB',
                'tarjeta_sonido' => 'DirectX 9.0c',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_juego' => '7',
                'os' => 'FreeBSD',
                'procesador' => 'SoC Nvidia Tegra',
                'memoria' => '4 GB de RAM',
                'graficos' => 'Nvidia Tegra',
                'directx' => 'Versión 12',
                'storage' => '5,7 GB',
                'tarjeta_sonido' => 'DirectX 11 sound device',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_juego' => '8',
                'os' => 'Windows XP, Windows 7, Windows 10',
                'procesador' => '2GHz+',
                'memoria' => '3 GB de RAM',
                'graficos' => '512 MB',
                'directx' => 'Versión 9',
                'storage' => '50 GB',
                'tarjeta_sonido' => 'DirectX 9.0c',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
