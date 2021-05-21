<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisitosJuegosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisitos_juegos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_juego');
            $table->string('os');
            $table->string('procesador');
            $table->string('memoria');
            $table->string('graficos');
            $table->string('directx');
            $table->string('storage');
            $table->string('tarjeta_sonido')->nullable();
            $table->foreign('id_juego')->references('id')->on('juegos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requisitos_juegos');
    }
}
