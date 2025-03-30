<?php

namespace App\Http\Controllers;

use App\Models\Filme;
use Illuminate\Http\Request;

class FilmeController extends Controller
{
    public function create(Request $request){
        $filme = Filme::create($request->all());
        return response()->json($filme, 201);
    }

    public function getAll(){
        return response()->json(Filme::all());
    }

    public function getById($id){
        $filme = Filme::find($id);

        if (!$filme) {
            return response()->json(['message' => 'Filme não encontrado'], 404);
        }

        return response()->json($filme);
    }

    public function update(Request $request, $id){
        $filme = Filme::find($id);

        if (!$filme) {
            return response()->json(['message' => 'Filme não encontrado'], 404);
        }

        $filme->update($request->all());

        return response()->json($filme);
    }

    public function delete($id){
        $filme = Filme::find($id);

        if (!$filme) {
            return response()->json(['message' => 'Filme não encontrado'], 404);
        }

        $filme->delete();

        return response()->json(['message' => 'Filme excluído com sucesso']);
    }
}
