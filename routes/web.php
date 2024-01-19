<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\JokeController;
use App\Http\Controllers\JokeSessionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Main route
Route::get('/', function () {
    return view('welcome');
});

// Route to get the categories and jokes from the api
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/joke/{category}', [JokeController::class, 'getJoke']);

// Routes for session:
// Route to store jokes in session
Route::post('/saveJokeSession', [JokeSessionController::class, 'saveSession']);
// Route to get the jokes stored in session
Route::get('/getJokes', [JokeSessionController::class, 'getSession']);
// Route to delete session
Route::post('/deleteJokeSession', [JokeSessionController::class, 'deleteSession']);
// Route to sort session
Route::post('/sortSession', [JokeSessionController::class, 'sortSession']);
