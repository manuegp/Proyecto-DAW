<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListaDeseados extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_articulo',
        'id_usuario',
    ];

}
