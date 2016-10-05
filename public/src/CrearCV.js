import React from 'react';
import ReactDOM from 'react-dom';

let InformacionPersona = React.createClass({
	getInitialState: function () {
		return {
			persona: {
				nombre: '',
				apellido: '',
				dni: ''
			}
		};
	},
	cambiarDNI: function (e) {
		this.setState({
			persona: {
				dni: e.target.value.substring(0,7)
			}
		});
	},
	cambiarNombre: function (e) {
		this.setState({
			persona: {
				nombre: e.target.value.toUpperCase()
			}
		});
	},
	cambiarApellido: function (e) {
		this.setState({
			persona: {
				apellido: e.target.value.toUpperCase()
			}
		});
	},
	render: function () {
		// variable de años
		let anios = [1920];
		for (var i = 1921; i < 2001; i++) {
			anios.push(i);
		}
		let fechaNacimientoA = anios.map(function (ai) {
			return <option key={ai} defaultValue={ai}>{ai}</option>;
		});

		// variable de meses
		let meses = [{mes: "Enero", valor: 1}];
		meses.push({mes: "Febrero", valor: 2});
		meses.push({mes: "Marzo", valor: 3});
		meses.push({mes: "Abril", valor: 4});
		meses.push({mes: "Mayo", valor: 5});
		meses.push({mes: "Junio", valor: 6});
		meses.push({mes: "Julio", valor: 7});
		meses.push({mes: "Agosto", valor: 8});
		meses.push({mes: "Septiembre", valor: 9});
		meses.push({mes: "Octubre", valor: 10});
		meses.push({mes: "Noviembre", valor: 11});
		meses.push({mes: "Diciembre", valor: 12});
		let fechaNacimientoM = meses.map(function (ms) {
			return <option key={ms.valor} defaultValue={ms.valor}>{ms.mes}</option>;
		});

		return (
			<div className="row">
				<div className="row">
					<div className="input-field col s6">
						<input type="text"
							id="nombre"
							placeholder="Juan"
							value={this.state.persona.nombre}
							onChange={this.cambiarNombre}
						/>
						<label htmlFor="nombre">Nombre</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<input type="text"
							id="apellido"
							placeholder="Gonzalez"
							value={this.state.persona.apellido}
							onChange={this.cambiarApellido}
						/>
						<label htmlFor="apellido">Apellido</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<input type="text"
							id="dni"
							placeholder="99999999"
							value={this.state.persona.dni}
							onChange={this.cambiarDNI}
						/>
						<label htmlFor="dni">DNI</label>
					</div>
				</div>
				<div className="row">
					<div className="col m2 s4">
						<label>Año en que nació</label>
						<select className="browser-default">
							<option disabled defaultValue="">Elija el año</option>
							{fechaNacimientoA}
						</select>
					</div>
					<div className="col m2 s4">
						<label>Mes en que nació</label>
						<select className="browser-default">
							<option disabled defaultValue="">Elija el mes</option>
							{fechaNacimientoM}
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
							<InformacionPersona />
						</div>
          </form>
        </div>
      </div>
    );
  }
});

export default CrearCV;
