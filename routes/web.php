<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
//Cargamos la vista inicial
$app->get('/', function () use ($app) {
    return view('index');
});

$app->get('/cv/todos', 'CVController@dar_todos');


//Indicamos que toda ruta será manejada por React JS
$app->get('/{path:.+}', function () {
  return view('index');
});
