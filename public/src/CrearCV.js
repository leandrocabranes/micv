import React from 'react';
import ReactDOM from 'react-dom';

let NombresPersona = React.createClass({
	render: function () {
		return (
			<div className="row">
				<div className="row">
					<div className="input-field col s6">
						<input type="text" id="nombre" placeholder="Juan"/>
						<label htmlFor="nombre">Nombre</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<input type="text" id="apellido" placeholder="Gonzalez"/>
						<label htmlFor="apellido">Apellido</label>
					</div>
				</div>
			</div>
		);
	}
});

let InformacionPersona = React.createClass({
	render: function () {
		let anios = [1990];
		for (var i = 1921; i > 2001; i++) {
			anios.push(i);
		}
		console.log(anios);
		let fechaNacimientoA = anios.map(function (ai) {
			return <option defaultValue={ai}>{ai}</option>;
		});
		return (
			<div className="row">
				<div className="row">
					<div className="input-field col s6">
						<input type="text" id="dni" placeholder="99999999"/>
						<label htmlFor="dni">DNI</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<select>
							<option disabled>Año</option>
							{fechaNacimientoA}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<input type="text" id="apellido" placeholder="Gonzalez"/>
						<label htmlFor="apellido">Apellido</label>
					</div>
				</div>
			</div>
		);
	}
});



const CrearCV = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h2>Empresas</h2>
        <div className="row">
          <form className="col s12">
						<div className="row">
							<NombresPersona />
							<InformacionPersona />
						</div>
          </form>
        </div>
      </div>
    );
  }
});

export default CrearCV;
