<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(UsuarioSeeder::class);
        $this->call(ArticuloSeeder::class);
        $this->call(JuegoSeeder::class);
        $this->call(VentaSeeder::class);
        $this->call(RequisitosJuegoSeeder::class);
        $this->call(ListaDeseadosSeeder::class);
        $this->call(CarritoSeeder::class);
    }
}
