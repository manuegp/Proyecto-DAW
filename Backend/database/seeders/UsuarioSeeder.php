<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([

            [
                'nombre' => 'Manuel',
                'apellidos' => 'Gonzalez Perez',
                'password' => bcrypt('prueba1'),
                'nick' => '2+2=Tortilla',
                'telefono' => '675868596',
                'email' => 'manuel123456@gmail.com',
                'email_verified_at' => now(),
                'foto' => null,
                'es_administrador' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Mario',
                'apellidos' => 'Lopez Baños',
                'password' => bcrypt('prueba2'),
                'nick' => 'Kapryx',
                'telefono' => '658796879',
                'email' => 'mario301298@gmail.com',
                'email_verified_at' => now(),
                'foto' => null,
                'es_administrador' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Ruben',
                'apellidos' => 'Lozano Perez',
                'password' => bcrypt('prueba3'),
                'nick' => 'sofarescente',
                'telefono' => '678978967',
                'email' => 'ruben78956@gmail.com',
                'email_verified_at' => now(),
                'foto' => null,
                'es_administrador' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'nombre' => 'Pedro',
                'apellidos' => 'Lopez Madrid',
                'password' => bcrypt('prueba4'),
                'nick' => 'Ferice',
                'telefono' => '678987678',
                'email' => 'pedro90374@gmail.com',
                'email_verified_at' => now(),
                'foto' => null,
                'es_administrador' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
