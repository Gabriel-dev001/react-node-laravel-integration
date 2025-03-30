<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controllerteste;
use App\Http\Controllers\FilmeController;
use App\Http\Controllers\CategoriaController;


Route::group(['namespace' => 'App\Http\Controllers'], function () {
    // Rota teste
    Route::get('/teste', [ControllerTeste::class, 'teste']);

    // Rotas Filmes
    Route::post('/filme', [FilmeController::class, 'create']);
    Route::get('/filme', [FilmeController::class, 'getAll']);
    Route::get('/filme/{id}', [FilmeController::class, 'getById']);
    Route::put('/filme/{id}', [FilmeController::class, 'update']);
    Route::delete('/filme/{id}', [FilmeController::class, 'delete']);

    // Rotas Categorias
    Route::post('/categoria', [CategoriaController::class, 'create']);
    Route::get('/categoria', [CategoriaController::class, 'getAll']);
    Route::get('/categoria/{id}', [CategoriaController::class, 'getById']);
    Route::put('/categoria/{id}', [CategoriaController::class, 'update']);
    Route::delete('/categoria/{id}', [CategoriaController::class, 'delete']);
});
