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
                'password' => 'prueba1',
                'nick' => '2+2=Tortilla',
                'telefono' => '984783467',
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
                'password' => 'prueba2',
                'nick' => 'Kapryx',
                'telefono' => '123483467',
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
                'password' => 'prueba3',
                'nick' => 'sofarescente',
                'telefono' => '346583467',
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
                'password' => 'prueba4',
                'nick' => 'Ferice',
                'telefono' => '129047892',
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
