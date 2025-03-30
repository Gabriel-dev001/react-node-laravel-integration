<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function create(Request $request){
        $categoria = Categoria::create($request->all());
        return response()->json($categoria, 201);
    }

    public function getAll(){
        return response()->json(Categoria::all());
    }

    public function getById($id){
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrado'], 404);
        }

        return response()->json($categoria);
    }

    public function update(Request $request, $id){
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrado'], 404);
        }

        $categoria->update($request->all());

        return response()->json($categoria);
    }

    public function delete($id){
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'categoria não encontrado'], 404);
        }

        $categoria->delete();

        return response()->json(['message' => 'Categoria excluído com sucesso']);
    }

}