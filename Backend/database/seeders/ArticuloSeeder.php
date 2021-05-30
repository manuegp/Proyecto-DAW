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
                'video' => 'https://www.youtube.com/embed/UAO2urG23S4',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Enter the Gungeon',
                'descripcion' => 'Enter the Gungeon es un dungeon crawler de tiroteos que sigue a una banda de marginados arrepentidos en su intento de conseguir la absolución personal a base de disparar, saquear, dar volteretas y voltear mesas para alcanzar el tesoro supremo de la legendaria Armazmorra.',
                'precio' => '14.99',
                'fecha_salida' => '2016-04-05',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/311690/header.jpg?t=1622216602',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Dark Souls III',
                'descripcion' => 'Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad.',
                'precio' => '59.99',
                'fecha_salida' => '2016-04-11',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1608544497',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'The Binding of Isaac: Rebirth',
                'descripcion' => 'Siguiendo a Isaac en su viaje, los jugadores encontrarán tesoros extraños que cambian la forma de Isaac dándole habilidades sobrehumanas y permitiéndole luchar contra hordas de criaturas misteriosas, descubrir secretos y luchar para abrirse camino hacia la seguridad.',
                'precio' => '14.99',
                'fecha_salida' => '2014-11-04',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg?t=1617174663',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'NieR:Automata',
                'descripcion' => 'Unos alienígenas mecanizados han invadido la Tierra, obligando a la humanidad a abandonarla. En un último intento por recuperar el planeta, la resistencia humana envía un ejército de soldados androides para acabar con los invasores. La guerra entre las máquinas y los androides se vuelve cada vez más encarnizada. Una guerra que pronto pondrá al descubierto la verdad sobre este mundo...',
                'precio' => '39.99',
                'fecha_salida' => '2017-03-17',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/524220/header.jpg?t=1601026299',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'The Legend of Zelda: Breath of the Wild',
                'descripcion' => 'El jugador controla a Link, que despierta en un mundo postapocalíptico después de estar cien años durmiendo para derrotar a Ganon y salvar al reino de Hyrule. A diferencia de los otros títulos predecesores de la serie, el juego presenta un mundo abierto que le permite al jugador encontrar distintas maneras de completar un objetivo y que la historia pueda ser completada de forma no lineal.',
                'precio' => '54.99',
                'fecha_salida' => '2017-03-03',
                'imagen_principal' => 'https://i.blogs.es/15da49/zelda00/450_1000.jpg',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Undertale',
                'descripcion' => 'En este juego de rol, controlas a un humano que cae bajo tierra en el mundo de los monstruos. Ahora debes encontrar la salida ... o quedarte atrapado para siempre.',
                'precio' => '9.99',
                'fecha_salida' => '2015-09-15',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Little Nightmares',
                'descripcion' => '¡Sumérgete en la enigmática atmósfera de Little Nightmares y enfréntate a los miedos de tu infancia! Ayuda a Seis a escapar de Las Fauces, un misterioso navío donde moran ánimas corrompidas en busca de su próxima comida...',
                'precio' => '19.95',
                'fecha_salida' => '2017-04-28',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg?t=1622224215',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Age of Empires II: Definitive Edition',
                'descripcion' => 'Disfruta de todas las campañas originales como nunca, juega a las mejores expansiones y sumérgete en más de 200 horas de juego que abarcan 1000 años de historia de la humanidad. Juega en línea y enfréntate a otros jugadores con 35 civilizaciones diferentes para dominar el mundo por los siglos de los siglos.',
                'precio' => '19.99',
                'fecha_salida' => '2019-11-14',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/813780/header.jpg?t=1619472514',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'DOOM',
                'descripcion' => 'Despiadados demonios, armas de destrucción inimaginables y un movimiento ágil y fluido constituyen la base de un intenso combate en primera persona, tanto si estás cargándote a las hordas demoníacas del infierno en la campaña para un jugador como si compites contra amigos en los diversos modos multijugador.',
                'precio' => '19.99',
                'fecha_salida' => '2016-05-13',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/379720/header.jpg?t=1593395083',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Stardew Valley',
                'descripcion' => 'Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?',
                'precio' => '13.99',
                'fecha_salida' => '2016-02-26',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1608624324',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Call of Duty: Modern Warfare Remastered',
                'descripcion' => 'Vuelve Call of Duty: Modern Warfare, uno de los juegos mejor valorados por la crítica de la historia, remasterizado en alta definición con texturas mejoradas, un renderizado basado en físicas, iluminación de alto rango dinámico y mucho más.',
                'precio' => '39.99',
                'fecha_salida' => '2017-07-27',
                'imagen_principal' => 'https://sysrqmts.com/images/games/call-of-duty-modern-warfare-remastered.jpg',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Super Mario Odyssey',
                'descripcion' => 'Super Mario Odyssey es un videojuego de plataformas de mundo abierto que se lleva a cabo en el planeta Champiñón entero. Mario tendra que salvar a la princesa Peach de Bowser y para ello sacará el mejor provecho de su gorra gracias a su nuevo compañero Cappy; puede usarla de varias maneras que le ayudarán en su aventura.',
                'precio' => '49.90',
                'fecha_salida' => '2017-09-27',
                'imagen_principal' => 'https://lanetaneta.com/wp-content/uploads/2019/02/Super-Mario-Odyssey-es-el-juego-de-Mario-en-3D.jpg',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Final Fantasy XV Windows Edition',
                'descripcion' => 'Una aventura con la mejor calidad. Gracias a un montón de contenidos adicionales y compatibilidad con opciones gráficas de alta resolución y HDR10, ahora puedes disfrutar como nunca antes de la experiencia de Final Fantasy XV en un mundo hermoso y lleno de detalles.',
                'precio' => '34.99',
                'fecha_salida' => '2018-03-06',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/637650/header.jpg?t=1592962568',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Cuphead',
                'descripcion' => 'Cuphead es un juego de acción clásico estilo "dispara y corre" que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.',
                'precio' => '19.99',
                'fecha_salida' => '2017-09-27',
                'imagen_principal' => 'https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1589281999',
                'video' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
