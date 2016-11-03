<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CVController extends Controller
{
    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     //
    // }

    //
		public function dar_todos() {
			$resultado = app('db')->select("SELECT * FROM curriculums");
			return $resultado;
		}

    public function crear_cv (Request $request) {
      // Falta poner el nombre de las variables con los datos a insertar
      $cvP = $request->all();
      if (!empty($cvP)) {
        # code...
        $fecha = $cvP['dia'] . '/' . $cvP['mes'] . '/' . $cvP['anio'];
        $foto = 'falta hacer la foro';

        app('db')->insert("INSERT INTO datos_personales
          (dni_p, apellido_p, nombre_p, sexo_p, edad_p, fecha_p, dianac_p, mesnac_p,
            anonac_p, calle_p, numero_p, piso_p, depto_p, nacionalidad_p, provincia_p,
            localidad_p, codigopostal_p, estcivil_p, hijos_p, tel_p, cel_p, telfotro,
            mail_p, completo, fotourl, clave) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              $cvP['dni'], $cvP['apellido'], $cvP['nombre'], 2, '', $fecha,
              $cvP['dia'], $cvP['mes'], $cvP['anio'], $cvP['direccion'], $cvP['numero'],
              $cvP['piso'], $cvP['dpto'], $cvP['nacionalidad'], $cvP['prov'], $cvP['localidad'],
              $cvP['codpostal'], $cvP['estadocivil'], $cvP['hijos'], $cvP['telefono'], $cvP['celular'],
              $cvP['otrotel'], $cvP['email'], 1, $foto, '1234'
            ]
          );
        return 'holas bien';
      } else {
        return 'holas mal';
      }
    }
  }
