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
                'saga' => 'Saga Hollow Knight',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '2',
                'etiquetas' => 'Roguelike, Indie, Acción, Un jugador, Multijugador, 2D, Disparos',
                'plataforma' => 'PS4, XBOX ONE, Nintendo Switch, PC',
                'idioma' => 'Castellano, Inglés, Francés, Alemán, Coreano, Chino, Italiano, Portugués, Ruso, Japonés',
                'saga' => 'Saga Gungeon',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '3',
                'etiquetas' => 'Rol, Atmosférico, Tercera Persona, Cooperativo, Mundo abierto, Un jugador, Acción, Aventura',
                'plataforma' => 'PS4, XBOX ONE, PC',
                'idioma' => 'Castellano, Inglés, Francés, Alemán, Coreano, Chino, Italiano, Portugués, Ruso, Japonés',
                'saga' => 'Saga Souls',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_articulo' => '6',
                'etiquetas' => 'Un jugador, Mundo abierto, Acción, Aventura, Exploración, Atmosférico',
                'plataforma' => 'Nintendo Switch',
                'idioma' => 'Inglés, japonés, francés, alemán, italiano, ruso, castellano, latino',
                'saga' => 'Saga The Legend of Zelda',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
