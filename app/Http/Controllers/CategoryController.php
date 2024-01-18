<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class CategoryController extends Controller
{
    public function index()
    {
        // Create a new client to make web requests.
        $client = new Client();

        // Request joke categories from the Chuck Norris API.
        $response = $client->request('GET', 'https://api.chucknorris.io/jokes/categories');

        // Convert the JSON response into a PHP array.
        $categories = json_decode($response->getBody());

        // Return the categories in JSON format as a response.
        return response()->json($categories);
    }
}
