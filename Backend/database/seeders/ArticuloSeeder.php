<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticuloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articulos')->insert([

            [
                'nombre' => 'Hollow Knight',
                'descripcion' => 'Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado.',
                'precio' => '14.99',
                'fecha_salida' => '2017-02-24',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Enter the Gungeon',
                'descripcion' => 'Enter the Gungeon es un dungeon crawler de tiroteos que sigue a una banda de marginados arrepentidos en su intento de conseguir la absolución personal a base de disparar, saquear, dar volteretas y voltear mesas para alcanzar el tesoro supremo de la legendaria Armazmorra.',
                'precio' => '14.99',
                'fecha_salida' => '2016-04-05',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Dark Souls III',
                'descripcion' => 'Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad.',
                'precio' => '59.99',
                'fecha_salida' => '2016-04-11',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'PUZZLE THE LEGEND OF ZELDA OCARINA OF TIME 1000 PIEZAS',
                'descripcion' => 'En este maravilloso rompecabezas de 1000 piezas puedes crear una hermosa ilustración de Link y Epona a partir del icónico juego Ocarina of Time, ¡un tesoro absoluto para todos los fanáticos de Zelda.',
                'precio' => '19.99',
                'fecha_salida' => '1999-01-21',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'CAMISETA ATARI RETRO: LOGO JAPONÉS TALLA XL',
                'descripcion' => '¡Esta camiseta de Atari con el clásico logotipo japonés de Atari es perfecta para cualquier fanático de los juegos retro! ¡Vuelve a los años 70 y recuerda los clásicos de Atari como Asteroids, Breakout, Centipede y Missile Command.',
                'precio' => '9.99',
                'fecha_salida' => '2018-02-18',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'The Legend of Zelda: Breath of the Wild',
                'descripcion' => 'El jugador controla a Link, que despierta en un mundo postapocalíptico después de estar cien años durmiendo para derrotar a Ganon y salvar al reino de Hyrule. A diferencia de los otros títulos predecesores de la serie, el juego presenta un mundo abierto que le permite al jugador encontrar distintas maneras de completar un objetivo y que la historia pueda ser completada de forma no lineal.',
                'precio' => '54.99',
                'fecha_salida' => '2017-03-03',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
