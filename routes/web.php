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

Route::get('/', function () {
    return view('welcome');
});

// Route to get the categories and jokes from the api
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/joke/{category}', [JokeController::class, 'getJoke']);

// Ruta para almacenar las bromas en session
Route::post('/saveJokeSession', [JokeSessionController::class, 'saveSession']);

// Ruta para obtener las bromas almacendas en sesion
Route::get('/getJokes', [JokeSessionController::class, 'getSession']);
// Ruta para cerrar sesion
Route::post('/deleteJokeSession', [JokeSessionController::class, 'deleteSession']);
// Ruta para ordenar las sesiones
Route::post('/sortSession', [JokeSessionController::class, 'sortSession']);
