<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

    public function crear_cv (Request $request) {
      // Falta poner el nombre de las variables con los datos a insertar
      $cv = $request->all();
      app('db')->insert("INSERT INTO datos_personales
        (dni_p, apellido_p, nombre_p, sexo_p, edad_p, fecha_p, dianac_p, mesnac_p,
        anonac_p, calle_p, numero_p, piso_p, depto_p, nacionalidad_p, provincia_p,
        localidad_p, codigopostal_p, estcivil_p, hijos_p, tel_p, cel_p, telotro,
        mail_p, completo, fotourl, clave) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [

        ]);
    }
}
