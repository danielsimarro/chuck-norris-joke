<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class JokeSessionController extends Controller
{
    /**
     * Save session
     * @param Request $request
     * @return String
     */
    public function saveSession(Request $request)
    {
        // Retrieve the array stored in the session. If it doesn't exist, create an empty array.
        $jokeArray = $request->session()->get('jokes', []);

        // Add a new element to the array.
        // Replace this with the value you want to add.
        $newJoke = $request->input('joke');
        array_push($jokeArray, $newJoke);

        // Store the modified array back in the session.
        $request->session()->put('jokes', $jokeArray);

        // Return a JSON response indicating the element was added to the session.
        return response()->json(['message' => 'Element add done to session']);
    }
    /**
     * Get session
     * @param nothing
     * @return list[String]
     */
    public function getSession()
    {
        // Retrieve the 'jokes' array from the session.
        $jokesSession = Session::get('jokes');

        // Return the jokes array in a JSON response.
        return response()->json($jokesSession);
    }

    /**
     * Delete session
     * @param Request $request
     * @return String
     */
    public function deleteSession(Request $request)
    {
        //$request->session()->forget('jokes');
        // Delete the all session
        $request->session()->flush();

        // Return a JSON response indicating the element was delete to the session.
        return response()->json(['message' => 'All sessions is clean']);
    }

    /**
     * Sort session
     * @param Request $request
     * @return list[String]
     */
    public function sortSession(Request $request)
    {
        // Retrieve the 'jokes' array from the session.
        $jokesSession = Session::get('jokes');

        // Sort the jokes array in ascending order.
        sort($jokesSession);

        // Store the sorted jokes array back into the session.
        $request->session()->put('jokes', $jokesSession);

        // Return the sorted jokes array in a JSON response.
        return response()->json($jokesSession);
    }
}
