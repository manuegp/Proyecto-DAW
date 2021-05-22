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
                'nombre' => 'Puzzle The Legend of Zelda Ocarina of Time, 1000 piezas',
                'descripcion' => 'En este maravilloso rompecabezas de 1000 piezas puedes crear una hermosa ilustración de Link y Epona a partir del icónico juego Ocarina of Time, ¡un tesoro absoluto para todos los fanáticos de Zelda.',
                'precio' => '19.99',
                'fecha_salida' => '1999-01-21',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Camiseta Atari Retro: Logo japonés, Talla XL',
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

            [
                'nombre' => 'Lámpara Super Mario: Fire Flower',
                'descripcion' => 'Ilumina tu habitación con la lámpara de la estrella más característica de Fire Flower Icon Light que toma su diseño de la icónica flor que otorga poderes temporales a Super Mario Bros. Ideal para su uso en su dormitorio, estudio o sala de juegos.',
                'precio' => '14.95',
                'fecha_salida' => '2006-05-21',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Cuadro 3D Super Mario Bros 3',
                'descripcion' => 'En este Cuadro 3D podrás encontrar la carátula original de este emblemático juego, en la que aparece una versión de Mario en modo Mapache como resultado de utilizar la súper hoja, que le permite golpear a sus enemigos y volar brevemente.',
                'precio' => '10.95',
                'fecha_salida' => '2012-08-15',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Peluche Pikachu Grande',
                'descripcion' => 'Este peluche de Pikachu con una manzana, de aproximadamente 30 cm, es tan mono que llamará la atención por si solo este dónde este. Pikachu es el pokemon mas conocido de la historia por ser el acompañante del protagonista del anime y por ser la mascota representante de la franquicia Pokemon.',
                'precio' => '19.95',
                'fecha_salida' => '2007-01-28',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Mochila The Last of Us: Logo Luciérnagas',
                'descripcion' => 'Nuestra mochila The Last of Us viene con el logotipo del grupo de resistencia Firefly (las Luciernagas) y el logotipo de The last of Us Parte II estampados en el frontal, para que todos sepan a que atenerse cuando te vean por las calles, tiene licencia oficial y te permitirá llevar contigo todo lo necesario para sobrevivir en el apocalipsis',
                'precio' => '29.95',
                'fecha_salida' => '2020-11-25',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Cartera COD MW Láser',
                'descripcion' => 'El multijugador de Modern Warfare fue un punto de inflexión para la saga Call of Duty. Ahora puedes revivirlo cada día con esta cartera quey presenta el icónico logotipo de MW. Basada en la nueva entrega de Modern Warfare. Tiene licencia oficial y además te deja preparado para la batalla. Prepárate para la acción, vuelve Modern Warfare.',
                'precio' => '12.95',
                'fecha_salida' => '2017-07-28',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Call of Duty: Modern Warfare Remastered',
                'descripcion' => 'Vuelve Call of Duty: Modern Warfare, uno de los juegos mejor valorados por la crítica de la historia, remasterizado en alta definición con texturas mejoradas, un renderizado basado en físicas, iluminación de alto rango dinámico y mucho más.',
                'precio' => '39.99',
                'fecha_salida' => '2017-07-27',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Super Mario Odyssey',
                'descripcion' => 'Super Mario Odyssey es un videojuego de plataformas de mundo abierto que se lleva a cabo en el planeta Champiñón entero. Mario tendra que salvar a la princesa Peach de Bowser y para ello sacará el mejor provecho de su gorra gracias a su nuevo compañero Cappy; puede usarla de varias maneras que le ayudarán en su aventura.',
                'precio' => '49.90',
                'fecha_salida' => '2017-09-27',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Final Fantasy XV Windows Edition',
                'descripcion' => 'Una aventura con la mejor calidad. Gracias a un montón de contenidos adicionales y compatibilidad con opciones gráficas de alta resolución y HDR10, ahora puedes disfrutar como nunca antes de la experiencia de Final Fantasy XV en un mundo hermoso y lleno de detalles.',
                'precio' => '34.99',
                'fecha_salida' => '2018-03-06',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Cuphead',
                'descripcion' => 'Cuphead es un juego de acción clásico estilo "dispara y corre" que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.',
                'precio' => '19.99',
                'fecha_salida' => '2017-09-27',
                'imagen_principal' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
