<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeseadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('deseados')->insert([

            [
                'id_usuario' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '2',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'id_usuario' => '4',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
