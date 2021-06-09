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
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1601950406',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Enter the Gungeon',
                'descripcion' => 'Enter the Gungeon es un dungeon crawler de tiroteos que sigue a una banda de marginados arrepentidos en su intento de conseguir la absolución personal a base de disparar, saquear, dar volteretas y voltear mesas para alcanzar el tesoro supremo de la legendaria Armazmorra.',
                'precio' => '14.99',
                'fecha_salida' => '2016-04-05',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/311690/header.jpg?t=1622216602',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Dark Souls III',
                'descripcion' => 'Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad.',
                'precio' => '59.99',
                'fecha_salida' => '2016-04-11',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1608544497',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'The Binding of Isaac: Rebirth',
                'descripcion' => 'Siguiendo a Isaac en su viaje, los jugadores encontrarán tesoros extraños que cambian la forma de Isaac dándole habilidades sobrehumanas y permitiéndole luchar contra hordas de criaturas misteriosas, descubrir secretos y luchar para abrirse camino hacia la seguridad.',
                'precio' => '14.99',
                'fecha_salida' => '2014-11-04',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg?t=1617174663',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'NieR:Automata',
                'descripcion' => 'Unos alienígenas mecanizados han invadido la Tierra, obligando a la humanidad a abandonarla. En un último intento por recuperar el planeta, la resistencia humana envía un ejército de soldados androides para acabar con los invasores. La guerra entre las máquinas y los androides se vuelve cada vez más encarnizada. Una guerra que pronto pondrá al descubierto la verdad sobre este mundo...',
                'precio' => '39.99',
                'fecha_salida' => '2017-03-17',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/524220/header.jpg?t=1601026299',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'The Legend of Zelda: Breath of the Wild',
                'descripcion' => 'El jugador controla a Link, que despierta en un mundo postapocalíptico después de estar cien años durmiendo para derrotar a Ganon y salvar al reino de Hyrule. A diferencia de los otros títulos predecesores de la serie, el juego presenta un mundo abierto que le permite al jugador encontrar distintas maneras de completar un objetivo y que la historia pueda ser completada de forma no lineal.',
                'precio' => '54.99',
                'fecha_salida' => '2017-03-03',
                'imagen_principal' => 'https://i.blogs.es/15da49/zelda00/450_1000.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Super Mario Odyssey',
                'descripcion' => 'Super Mario Odyssey es un videojuego de plataformas de mundo abierto que se lleva a cabo en el planeta Champiñón entero. Mario tendra que salvar a la princesa Peach de Bowser y para ello sacará el mejor provecho de su gorra gracias a su nuevo compañero Cappy; puede usarla de varias maneras que le ayudarán en su aventura.',
                'precio' => '49.99',
                'fecha_salida' => '2017-09-27',
                'imagen_principal' => 'https://lanetaneta.com/wp-content/uploads/2019/02/Super-Mario-Odyssey-es-el-juego-de-Mario-en-3D.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Undertale',
                'descripcion' => 'En este juego de rol, controlas a un humano que cae bajo tierra en el mundo de los monstruos. Ahora debes encontrar la salida ... o quedarte atrapado para siempre.',
                'precio' => '9.99',
                'fecha_salida' => '2015-09-15',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Puzzle The Legend of Zelda Ocarina of Time, 1000 piezas',
                'descripcion' => 'En este maravilloso rompecabezas de 1000 piezas puedes crear una hermosa ilustración de Link y Epona a partir del icónico juego Ocarina of Time, ¡un tesoro absoluto para todos los fanáticos de Zelda.',
                'precio' => '19.99',
                'fecha_salida' => '1999-01-21',
                'imagen_principal' => 'https://images-na.ssl-images-amazon.com/images/I/71SIfEsP-KL._AC_SX522_.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Camiseta Atari Retro: Logo japonés, Talla XL',
                'descripcion' => '¡Esta camiseta de Atari con el clásico logotipo japonés de Atari es perfecta para cualquier fanático de los juegos retro! ¡Vuelve a los años 70 y recuerda los clásicos de Atari como Asteroids, Breakout, Centipede y Missile Command.',
                'precio' => '9.99',
                'fecha_salida' => '2018-02-18',
                'imagen_principal' => 'https://www.serishirts.com/1589/japon-camiseta-atari-clasico-blanco-negro.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Lámpara Super Mario: Fire Flower',
                'descripcion' => 'Ilumina tu habitación con la lámpara de la estrella más característica de Fire Flower Icon Light que toma su diseño de la icónica flor que otorga poderes temporales a Super Mario Bros. Ideal para su uso en su dormitorio, estudio o sala de juegos.',
                'precio' => '14.95',
                'fecha_salida' => '2006-05-21',
                'imagen_principal' => 'https://www.frikimaniabcn.com/catalogo/03688.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Cuadro 3D Super Mario Bros 3',
                'descripcion' => 'En este Cuadro 3D podrás encontrar la carátula original de este emblemático juego, en la que aparece una versión de Mario en modo Mapache como resultado de utilizar la súper hoja, que le permite golpear a sus enemigos y volar brevemente.',
                'precio' => '10.95',
                'fecha_salida' => '2012-08-15',
                'imagen_principal' => 'https://media.game.es/COVERV2/3D_L/157/157220.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Peluche Pikachu Grande',
                'descripcion' => 'Este peluche de Pikachu con una manzana, de aproximadamente 30 cm, es tan mono que llamará la atención por si solo este dónde este. Pikachu es el pokemon mas conocido de la historia por ser el acompañante del protagonista del anime y por ser la mascota representante de la franquicia Pokemon.',
                'precio' => '19.95',
                'fecha_salida' => '2007-01-28',
                'imagen_principal' => 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201904/09/00108341133232____6__640x640.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Mochila The Last of Us: Logo Luciérnagas',
                'descripcion' => 'Nuestra mochila The Last of Us viene con el logotipo del grupo de resistencia Firefly (las Luciernagas) y el logotipo de The last of Us Parte II estampados en el frontal, para que todos sepan a que atenerse cuando te vean por las calles, tiene licencia oficial y te permitirá llevar contigo todo lo necesario para sobrevivir en el apocalipsis',
                'precio' => '29.95',
                'fecha_salida' => '2020-11-25',
                'imagen_principal' => 'https://www.merchandisingplaza.es/357869/2/Mochilas-The-Last-Of-Us-Mochila-The-Last-Of-Us-l.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Cartera COD MW Láser',
                'descripcion' => 'El multijugador de Modern Warfare fue un punto de inflexión para la saga Call of Duty. Ahora puedes revivirlo cada día con esta cartera quey presenta el icónico logotipo de MW. Basada en la nueva entrega de Modern Warfare. Tiene licencia oficial y además te deja preparado para la batalla. Prepárate para la acción, vuelve Modern Warfare.',
                'precio' => '12.95',
                'fecha_salida' => '2017-07-28',
                'imagen_principal' => 'https://media.game.es/COVERV2/3D_L/172/172026.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
