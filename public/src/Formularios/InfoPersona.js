import React from 'react';

import PROVINCIAS from './variables/provincias.js';

let InformacionPersona = React.createClass({
	getInitialState: function () {
		return {
			nombre: '',
			apellido: '',
			sexo: '',
			dni: '',
			anio: '',
			mes: '',
			dia: '',
			direccion: '',
			numero: '',
			piso: '',
			dpto: '',
			localidad: '',
			prov: '',
			codpostal: '',
			nacionalidad: '',
			estadocivil: '',
			hijos: '',
			celular: '',
			telefono: '',
			otrotel: '',
			email: ''
		}
	},
	cambiarInfoPersona: function () {
		this.props.updatePersona(this.state);
	},

	// handlers de los inputs
	cambiarDNI: function (e) {
		this.setState({
			dni: e.target.value.substring(0,8),
		});
	},
	cambiarNombre: function (e) {
		this.setState({
			nombre: e.target.value.toUpperCase(),
		});
	},
	cambiarApellido: function (e) {
		this.setState({
			apellido: e.target.value.toUpperCase(),
		})
	},
	cambiarSexo: function (e) {
		this.setState({
			sexo: e.target.value,
		})
	},
	cambiarAnio: function (e) {
		this.setState({
			anio: e.target.value,
		})
	},
	cambiarMes: function (e) {
		this.setState({
			mes: e.target.value,
		})
	},
	cambiarDia: function (e) {
		this.setState({
			dia: e.target.value,
		})
	},
	cambiarDir: function (e) {
		this.setState({
			direccion: e.target.value,
		})
	},
	cambiarNum: function (e) {
		this.setState({
			numero: e.target.value,
		})
	},
	cambiarPiso: function (e) {
		this.setState({
			piso: e.target.value,
		})
	},
	cambiarLocal: function (e) {
		this.setState({
			localidad: e.target.value,
		})
	},
	cambiarPostal: function (e) {
		this.setState({
			codpostal: e.target.value,
		})
	},
	cambiarDpto: function (e) {
		this.setState({
			dpto: e.target.value,
		})
	},
	cambiarNac: function (e) {
		this.setState({
			nacionalidad: e.target.value,
		})
	},
	cambiarCiv: function (e) {
		this.setState({
			estadocivil: e.target.value,
		})
	},
	cambiarHijos: function (e) {
		let hjs = e.target.value > 0 ? e.target.value.substr(0,2) : "";
		this.setState({
			hijos: hjs,
		})
	},
	cambiarCel: function (e) {
		this.setState({
			celular: e.target.value.substring(0,18),
		})
	},
	cambiarTel: function (e) {
		this.setState({
			telefono: e.target.value.substring(0,18),
		})
	},
	cambiarEmail: function (e) {
		this.setState({
			email: e.target.value.substring(0,50),
		})
	},
	cambiarOTel: function (e) {
		this.setState({
			otrotel: e.target.value.substring(0,18),
		})
	},
	cambiarProv: function (e) {
		this.setState({
			prov: e.target.value,
		})
	},
	render: function () {
		// variable de años
		let anios = [1920];
		for (var i = 1921; i < 2001; i++) {
			anios.push(i);
		}
		let fechaNacimientoA = anios.map(function (ai) {
			return <option key={ai} value={ai}>{ai}</option>;
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
			return <option key={ms.valor} value={ms.valor}>{ms.mes}</option>;
		});

		let dias = [1];
		for (let i = 2; i <= 31; i++) {
			dias.push(i);
		}
		let fechaNacimientoD = dias.map(function (di) {
			return <option key={di} value={di}>{di}</option>;
		});

		// variable de provincias
		let provincias = PROVINCIAS.map(function (pr) {
			return <option key={pr.cod} value={pr.cod}>{pr.nom}</option>;
		});

		return (
			<div className="row">
				<h4>Información personal:</h4>
				<div className="row">
					<div className="input-field col s6">
						<input type="text"
							id="nombre"
							placeholder="Juan"
							value={this.state.nombre}
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
							value={this.state.apellido}
							onChange={this.cambiarApellido}
						/>
						<label htmlFor="apellido">Apellido</label>
					</div>
				</div>
				<div className="row">
					<div className="col m6 s6">
						<label>Sexo</label>
						<select className="browser-default" value={this.state.sexo} onChange={this.cambiarSexo}>
							<option disabled value="">Elija una opción</option>
							<option value="1">Mujer</option>
							<option value="2">Hombre</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<input type="text"
							id="dni"
							placeholder="99999999"
							ref="dni"
							value={this.state.dni}
							onChange={this.cambiarDNI}
						/>
						<label htmlFor="dni">DNI</label>
					</div>
				</div>
				<div className="row">
					<div className="col m2 s4">
						<label>Día en que nació</label>
						<select className="browser-default" value={this.state.dia} onChange={this.cambiarDia}>
							<option disabled value="">Elija el día</option>
							{fechaNacimientoD}
						</select>
					</div>
					<div className="col m2 s4">
						<label>Mes en que nació</label>
						<select className="browser-default" value={this.state.mes} onChange={this.cambiarMes}>
							<option disabled value="">Elija el mes</option>
							{fechaNacimientoM}
						</select>
					</div>
					<div className="col m2 s4">
						<label>Año en que nació</label>
						<select className="browser-default" value={this.state.anio} onChange={this.cambiarAnio}>
							<option disabled value="">Elija el año</option>
							{fechaNacimientoA}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field col m4 s6">
						<input type="text"
							id="calle-dir"
							placeholder="Av. San Martin"
							value={this.state.direccion}
							onChange={this.cambiarDir}
						/>
						<label htmlFor="calle-dir">Calle</label>
					</div>
					<div className="input-field col m2 s6">
						<input type="text"
							id="numero-dir"
							placeholder="101"
							value={this.state.numero}
							onChange={this.cambiarNum}
						/>
						<label htmlFor="numero-dir">Número</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col m3 s6">
						<input type="text"
							id="piso-dir"
							placeholder="2"
							value={this.state.piso}
							onChange={this.cambiarPiso}
						/>
					<label htmlFor="piso-dir">Piso (en caso de vivir en departamento)</label>
					</div>
					<div className="input-field col m3 s6">
						<input type="text"
							id="dpto-dir"
							placeholder="321"
							value={this.state.dpto}
							onChange={this.cambiarDpto}
						/>
						<label htmlFor="dpto-dir">Número del departamento (en caso de vivir en departamento)</label>
					</div>
				</div>
				<div className="row">
					<div className="col m6 s6">
						<label>Provincia en la que reside</label>
						<select className="browser-default" value={this.state.prov} onChange={this.cambiarProv}>
							<option disabled value="">Elija una opción</option>
							{provincias}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field col m3 s6">
						<input type="text"
							id="localidad-dir"
							placeholder="Necochea"
							value={this.state.localidad}
							onChange={this.cambiarLocal}
						/>
						<label htmlFor="localidad-dir">Nombre de la ciudad</label>
					</div>
					<div className="input-field col m3 s6">
						<input type="text"
							id="codpost-dir"
							placeholder="7630"
							value={this.state.codpostal}
							onChange={this.cambiarPostal}
						/>
						<label htmlFor="codpost-dir">Código postal</label>
					</div>
				</div>
				<div className="row">
					<div className="col m4 s6">
						<label>Nacionalidad</label>
						<select className="browser-default" value={this.state.nacionalidad} onChange={this.cambiarNac}>
							<option disabled value="">Elija una opción</option>
							<option value="sin especificar">Sin especificar</option>
							<option value="argentina">Argentina</option>
							<option value="otro">Otro</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col m4 s6">
						<label>Estado civil</label>
						<select className="browser-default" value={this.state.estadocivil} onChange={this.cambiarCiv}>
							<option disabled value="">Elija una opción</option>
							<option value="0">Hij@</option>
							<option value="1">Padre/Madre</option>
							<option value="2">Solter@</option>
							<option value="3">Casad@</option>
							<option value="4">Viud@</option>
							<option value="5">Divorsiad@</option>
						</select>
					</div>
					<div className="input-field col m2 s6">
						<input type="number"
							id="hijos"
							placeholder="2"
							value={this.state.hijos}
							onChange={this.cambiarHijos}
						/>
					<label htmlFor="hijos">Cantidad de hijos</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col m2 s6">
						<input type="text"
							id="tel"
							placeholder="2262 654321"
							value={this.state.telefono}
							onChange={this.cambiarTel}
						/>
					<label htmlFor="tel">Número de teléfono</label>
					</div>
					<div className="input-field col m2 s6">
						<input type="text"
							id="cel"
							placeholder="2262 654321"
							value={this.state.celular}
							onChange={this.cambiarCel}
						/>
					<label htmlFor="cel">Número de celular</label>
					</div>
					<div className="input-field col m2 s6">
						<input type="text"
							id="otrotel"
							placeholder="2262 654321"
							value={this.state.otrotel}
							onChange={this.cambiarOTel}
						/>
					<label htmlFor="otrotel">Otro número de teléfono</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col m6 s6">
						<input type="email"
							id="email"
							placeholder="minombre@correo.com"
							value={this.state.email}
							onChange={this.cambiarEmail}
						/>
					<label htmlFor="email">Correo electrónico</label>
					</div>
				</div>
				<div className="row">
					<div className="btn-large" onClick={this.cambiarInfoPersona}>Siguiente</div>
				</div>
			</div>
		)
	}
});

export default InformacionPersona;
