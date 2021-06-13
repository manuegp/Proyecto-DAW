<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListaProductoCarritosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lista_producto_carritos', function (Blueprint $table) {
            $table->unsignedBigInteger('id_carrito');
            $table->unsignedBigInteger('id_articulo');
            $table->unsignedBigInteger('cantidad');
            $table->foreign('id_articulo')->references('id')->on('articulos')->onDelete('cascade');
            $table->foreign('id_carrito')->references('id')->on('carritos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lista_producto_carritos');
    }
}
