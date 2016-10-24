import React from 'react';
import ReactDOM from 'react-dom';

import InformacionPersona from './Formularios/InfoPersona.js';
import ExperienciaLaboral from './Formularios/ExpLaboral.js';
import FormacionAcademica from './Formularios/FormAcademica.js';
import InfoAdicional from './Formularios/InfoAdicional.js';

let CrearCV = React.createClass({
  getInitialState: function () {
    // hace falta agregar todos los demas estados
    // de la persona, como formacion academica y demas
    return {
      persona: {
        nombre: '',
				apellido: '',
				dni: '',
				anio: '',
				mes: '',
				dia: '',
				direccion: '',
				numero: '',
				piso: '',
				dpto: '',
				localidad: '',
				codpostal: '',
				nacionalidad: '',
				estadocivil: '',
				hijos: '',
				celular: '',
				telefono: '',
				otrotel: '',
				email: ''
      }
    };
  },

  handleDNI: function (dni) {
    this.setState({
      persona: { dni: dni }
    });
    console.log(this.state.persona.dni);
  },

  handleInfoSubmit: function (pers) {
    // falta hacer subir la info de la persona
    // aunque se podría hacer que se asigne al state
    // de este componente
  },

  handleSubmit: function () {
    console.log(this.state.persona);
    $.ajax({
      url: '/cv/crear',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function (data) {
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('/pokemon/subir', status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
		let texto = "Importante: una vez que comienze a llenar la información para crear su CV ";
		texto += "deberá seguir todos los pasos hasta el último de ellos. No podrá saltar ningún procedimiendo";
    return (
      <div className="container">
        <h2>¡Crear mi CV!</h2>
				<p>{texto}</p>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<InformacionPersona onInfoSubmit={this.handleInfoSubmit} getDNI={this.handleDNI}/>
              <ExperienciaLaboral personaDNI={this.state.persona.dni} />
              <FormacionAcademica />
              <InfoAdicional />
							<input type="submit" value="Crear CV" className="btn-large"/>
						</div>
          </form>
        </div>
      </div>
    );
  }
});

export default CrearCV;
