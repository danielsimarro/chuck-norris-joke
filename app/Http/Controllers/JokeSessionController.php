<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class JokeSessionController extends Controller
{
    public function saveSession(Request $request)
    {
        // Obtén el array almacenado en la sesión (si no existe, crea un array vacío).
        $miArray = $request->session()->get('jokes', []);

        // Agrega el nuevo elemento al array.
        $nuevoElemento = $request->input('joke'); // Reemplaza esto con el valor que desees agregar.
        array_push($miArray, $nuevoElemento);

        // Vuelve a almacenar el array modificado en la sesión.
        $request->session()->put('jokes', $miArray);

        return response()->json(['message' => 'Elemento agregado a la sesión']);
    }

    public function getSession()
    {
        $jokesSesion = Session::get('jokes');

        return response()->json($jokesSesion);
    }

    public function deleteSession(Request $request)
    {
        //$request->session()->forget('jokes');
        $request->session()->flush();

        return response()->json(['message' => 'Sesión de bromas limpiada con éxito.']);
    }

    public function sortSession(Request $request)
    {
        $jokesSesion = Session::get('jokes');

        sort($jokesSesion);

        $request->session()->put('jokes', $jokesSesion);

        return response()->json($jokesSesion);
    }
}
