<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'apellidos',
        'password',
        'nick',
        'localidad',
        'telefono',
        'email',
        'foto',
        'es_administrador',
    ];

}
