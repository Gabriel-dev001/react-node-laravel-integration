<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filme extends Model
{
    use HasFactory;

    protected $table = 'filme'; 

    protected $fillable = [
        'categoria_id',
        'nome',
        'observacao',
        'imagem_url'
    ];

    public $timestamps = false; 

    public function categoria(){
        return $this->belongsTo(Categoria::class, 'categoria_id', 'id');
    }
}
