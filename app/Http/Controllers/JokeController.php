<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class JokeController extends Controller
{
    public function getJoke($category)
    {
        // Create a new client to make web requests.
        $client = new Client();

        // Request a random joke from the Chuck Norris API for a specific category.
        $response = $client->request('GET', "https://api.chucknorris.io/jokes/random?category={$category}");

        // Convert the JSON response into an associative array.
        $joke = json_decode($response->getBody(), true);

        // Return the joke in JSON format as a response.
        return response()->json($joke);
    }
}
