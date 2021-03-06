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
        $this->call(UsuarioSeeder::class);
        $this->call(ArticuloSeeder::class);
        $this->call(JuegoSeeder::class);
        $this->call(VentaSeeder::class);
        $this->call(RequisitosJuegoSeeder::class);
        $this->call(CarritoSeeder::class);
        $this->call(ListaProductoCarritoSeeder::class);
        $this->call(DeseadoSeeder::class);
        $this->call(ListaProductoDeseadoSeeder::class);
        $this->call(OfertaSeeder::class);
    }
}
