<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JuegoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('juegos')->insert([

            [
                'id_articulo' => '1',
                'etiquetas' => 'Plataformas, 2D, Atmosférico, Exploración, Aventura, Un jugador, Acción, Aventura',
                'plataforma' => 'PS4, XBOX ONE, Nintendo Switch, PC',
                'idioma' => 'Castellano, Inglés, Francés, Alemán, Coreano, Chino, Italiano, Portugués, Ruso, Japonés',
                'video' => 'https://www.youtube.com/embed/UAO2urG23S4',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '2',
                'etiquetas' => 'Roguelike, Indie, Acción, Un jugador, Multijugador, 2D, Disparos',
                'plataforma' => 'PS4, XBOX ONE, Nintendo Switch, PC',
                'idioma' => 'Castellano, Inglés, Francés, Alemán, Coreano, Chino, Italiano, Portugués, Ruso, Japonés',
                'video' => 'https://www.youtube.com/embed/OMh0tw0bADs',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'etiquetas' => 'Rol, Atmosférico, Tercera Persona, Cooperativo, Mundo abierto, Un jugador, Acción, Aventura',
                'plataforma' => 'PS4, XBOX ONE, PC',
                'idioma' => 'Castellano, Inglés, Francés, Alemán, Coreano, Chino, Italiano, Portugués, Ruso, Japonés',
                'video' => 'https://www.youtube.com/embed/0RAlGv-IW4g',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '4',
                'etiquetas' => 'Un jugador, Roguelike, Indie, Dificil',
                'plataforma' => 'PS4, XBOX ONE, Nintendo Switch, PC',
                'idioma' => 'Inglés',
                'video' => 'https://www.youtube.com/embed/7fTPuAlCWEk',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '5',
                'etiquetas' => 'Un jugador, Rol, Buena Trama, Acción, Gran banda sonora',
                'plataforma' => 'PS4, XBOX ONE, PC',
                'idioma' => 'Castellano, Inglés, Francés, Alemán, Italiano',
                'video' => 'https://www.youtube.com/embed/JIkdsvuY-HA',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '6',
                'etiquetas' => 'Un jugador, Mundo abierto, Acción, Aventura, Exploración, Atmosférico',
                'plataforma' => 'Nintendo Switch',
                'idioma' => 'Inglés, Japonés, Francés, Alemán, Italiano, Ruso, Castellano, Latino',
                'video' => 'https://www.youtube.com/embed/ofH5ptn5w-A',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '7',
                'etiquetas' => 'Un jugador, Aventura, Acción, Plataformas',
                'plataforma' => 'Nintendo Switch',
                'idioma' => 'Inglés, Japonés, Francés, Alemán, Italiano, Ruso, Castellano, Latino',
                'video' => 'https://www.youtube.com/embed/wGQHQc_3ycE',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '8',
                'etiquetas' => 'Un jugador, RPG, Puzzle',
                'plataforma' => 'Nintendo Switch, Android, PS4, Xbox One, PC',
                'idioma' => 'Inglés, japonés',
                'video' => 'https://www.youtube.com/embed/1Hojv0m3TqA',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
