<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ControllerTeste extends Controller
{
    public function teste(){
        return response("Aplicação rodando", 200);
    }
}