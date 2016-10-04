<?php

namespace App\Http\Controllers;

class CVController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //
		public function dar_todos() {
			$resultado = app('db')->select("SELECT * FROM curriculums");
			return $resultado;
		}
}
