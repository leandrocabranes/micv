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
		public function dar_todos () {
			$resultado = app('db')->select("SELECT * FROM datos_personales
			LEFT JOIN experiencia_laboral
			ON datos_personales.dni_p=experiencia_laboral.el_dni");
			return $resultado;
		}

		public function unico_cv (Request $request, $id) {
			$dni = app('db')->select("SELECT dni_p FROM datos_personales WHERE id_p = :id", ['id' => $id]);
			// $dni0 = $dni[1];
			$resultado = app('db')->select("SELECT * FROM datos_personales
			LEFT JOIN experiencia_laboral
			ON datos_personales.dni_p=experiencia_laboral.el_dni
			LEFT JOIN formacion_academica
			ON datos_personales.dni_p=formacion_academica.dnip
			LEFT JOIN informacion_adicional
			ON datos_personales.dni_p=informacion_adicional.dni
			WHERE datos_personales.id_p=:dni",
			['dni' => $id]);
			return $resultado;
		}

    public function crear_cv (Request $request) {
      /**
      * Se deben hacer cambios en los formularios, en caso de que se quiera agregar
      * educacion adiciona, cosa que la base de datos espera. Tambien se debe cambiar
      * el formulario de formacion academica para poner como dato el fin de la escuela
      * primaria en lugar del inicio.
      *
      *
      */

      // Falta poner el nombre de las variables con los datos a insertar
      $cvP = $request->all();
      if (!empty($cvP)) {
				define('UPLOAD_DIR', 'imagenes/');
				$imagen = $cvP['foto'];
				$imagen = str_replace('data:image/jpeg;base64,', '', $imagen);
				$imagen = str_replace(' ', '+', $imagen);
				$data = base64_decode($imagen);
				$archivo = UPLOAD_DIR . uniqid() . '.jpeg';
				$exito = file_put_contents($archivo, $data);


        // procesamos nuestros datos para ingresarlos
        $fecha = $cvP['dia'] . '/' . $cvP['mes'] . '/' . $cvP['anio'];

        $mov = $cvP['movA'] != '' ? $cvP['movA'] . ';' : '';
        $mov .= $cvP['movM'] != '' ? $cvP['movM'] . ';' : '';
        $mov .= $cvP['movB'] != '' ? $cvP['movB'] . ';' : '';
        $mov .= $cvP['movO'] != '' ? $cvP['movO'] . ';' : '';

        // ---
        // info personal
        // ---
        // hace falta el algoritmo para la foto

        app('db')->insert("INSERT INTO datos_personales
          (dni_p, apellido_p, nombre_p, sexo_p, edad_p, fecha_p, dianac_p, mesnac_p,
          anonac_p, calle_p, numero_p, piso_p, depto_p, nacionalidad_p, provincia_p,
          localidad_p, codigopostal_p, estcivil_p, hijos_p, tel_p, cel_p, telfotro,
          mail_p, completo, fotourl, clave) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            $cvP['dni'], $cvP['apellido'], $cvP['nombre'], $cvP['sexo'], '', $fecha,
            $cvP['dia'], $cvP['mes'], $cvP['anio'], $cvP['direccion'], $cvP['numero'],
            $cvP['piso'], $cvP['dpto'], $cvP['nacionalidad'], $cvP['prov'], $cvP['localidad'],
            $cvP['codpostal'], $cvP['estadocivil'], $cvP['hijos'], $cvP['telefono'], $cvP['celular'],
            $cvP['otrotel'], $cvP['email'], 1, $archivo, '1234'
          ]
        );

        // ---
        // exp laboral
        // ---
        app('db')->insert("INSERT INTO experiencia_laboral
          (el_dni, el_ini, el_fin, el_rub, el_puesto, el_lug, el_refnom, el_reftelf,
          el_refcarg, completo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            $cvP['dni'], $cvP['fechaIn'], $cvP['fechaFn'], $cvP['rubro'], $cvP['puesto'],
            $cvP['lugar'], $cvP['nomRef'], $cvP['telRef'], $cvP['puestoRef'], 1
          ]
        );

        // ---
        // formacion academica
        // ---
        app('db')->insert("INSERT INTO formacion_academica
          (dnip, prim_fin, prim_insti, prim_est, secu_ini, secu_fin, secu_insti,
          secu_est, oe_ini, oe_fin, oe_estr, oe_est, oe_insti, oe_tipo, completo)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            $cvP['dni'], $cvP['primIn'], $cvP['primInst'], $cvP['primEst'],
            $cvP['secIn'], $cvP['secFin'], $cvP['secInst'], $cvP['secEst'],
						$cvP['oeIn'], $cvP['oeFn'], $cvP['oeTit'], $cvP['oeEst'], $cvP['oeInst'],
						$cvP['oeTipo'], 1
          ]
        );

        // ---
        // informacion adicional
        // ---
        app('db')->insert("INSERT INTO informacion_adicional
          (dni, idiomas_i, informactica_i, movilidad_i, carnet_i, disponibilidad_i,
          acla, completo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [
            $cvP['dni'], $cvP['ingles'], $cvP['informatica'], $mov, $cvP['carnet'],
            $cvP['disp'], $cvP['acla'], 1
          ]
        );

        return 'holas bien';
      } else {
        return 'holas mal';
      }
    }
  }
