<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_articulo');
            $table->unsignedBigInteger('id_usuario');
            $table->double('cantidad', 4, 0);
            $table->date('fecha_venta');
            $table->enum('metodo_pago', ['PayPal', 'PaysafeCard', 'Visa', 'Mastercard', 'Skrill']);
            $table->foreign('id_articulo')->references('id')->on('articulos');
            $table->foreign('id_usuario')->references('id')->on('usuarios');
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
        Schema::dropIfExists('ventas');
    }
}
