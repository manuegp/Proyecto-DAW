<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequisitosJuego extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_juego',
        'os',
        'procesador',
        'memoria',
        'graficos',
        'directx',
        'storage',
        'tarjeta_sonido',
    ];
}
