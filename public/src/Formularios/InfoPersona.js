import React from 'react';
import ReactDOM from 'react-dom';

let InformacionPersona = React.createClass({
	getInitialState: function () {
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
	cambiarInfoPersona: function () {
		this.props.onInfoSubmit(this.state.persona);
	},
	cambiarDNI: function (e) {
		this.setState({
			persona: {
				dni: e.target.value.substring(0,7)
			}
		});
		this.props.getDNI(this.state.dni);
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
	cambiarAnio: function (e) {
		this.setState({
			persona: {
				anio: e.target.value
			}
		});
	},
	cambiarMes: function (e) {
		this.setState({
			persona: {
				mes: e.target.value
			}
		});
	},
	cambiarDia: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				dia: e.target.value
			}
		});
	},
	cambiarDir: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				direccion: e.target.value
			}
		});
	},
	cambiarNum: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				numero: e.target.value
			}
		});
	},
	cambiarPiso: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				piso: e.target.value
			}
		});
	},
	cambiarLocal: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				localidad: e.target.value
			}
		});
	},
	cambiarPostal: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				codpostal: e.target.value
			}
		});
	},
	cambiarDpto: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				dpto: e.target.value
			}
		});
	},
	cambiarNac: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				nacionalidad: e.target.value
			}
		});
	},
	cambiarCiv: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				estadocivil: e.target.value
			}
		});
	},
	cambiarHijos: function (e) {
		console.log(e.target.value);
		let hjs = e.target.value > 0 ? e.target.value.substr(0,2) : "";
		this.setState({
			persona: {
				hijos: hjs
			}
		});
	},
	cambiarCel: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				celular: e.target.value.substring(0,18)
			}
		});
	},
	cambiarTel: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				telefono: e.target.value.substring(0,18)
			}
		});
	},
	cambiarOTel: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				otrotel: e.target.value.substring(0,18)
			}
		});
	},
	cambiarEmail: function (e) {
		console.log(e.target.value);
		this.setState({
			persona: {
				email: e.target.value.substring(0,50)
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

		return (
			<div className="row">
				<h4>Información personal:</h4>
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
							ref="dni"
							value={this.state.persona.dni}
							onChange={this.cambiarDNI}
						/>
						<label htmlFor="dni">DNI</label>
					</div>
				</div>
				<div className="row">
					<div className="col m2 s4">
						<label>Día en que nació</label>
						<select className="browser-default" value={this.state.persona.dia} onChange={this.cambiarDia}>
							<option disabled value="">Elija el día</option>
							{fechaNacimientoD}
						</select>
					</div>
					<div className="col m2 s4">
						<label>Mes en que nació</label>
						<select className="browser-default" value={this.state.persona.mes} onChange={this.cambiarMes}>
							<option disabled value="">Elija el mes</option>
							{fechaNacimientoM}
						</select>
					</div>
					<div className="col m2 s4">
						<label>Año en que nació</label>
						<select className="browser-default" value={this.state.persona.anio} onChange={this.cambiarAnio}>
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
							value={this.state.persona.direccion}
							onChange={this.cambiarDir}
						/>
						<label htmlFor="calle-dir">Calle</label>
					</div>
					<div className="input-field col m2 s6">
						<input type="text"
							id="numero-dir"
							placeholder="101"
							value={this.state.persona.numero}
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
							value={this.state.persona.piso}
							onChange={this.cambiarPiso}
						/>
					<label htmlFor="piso-dir">Piso (en caso de vivir en departamento)</label>
					</div>
					<div className="input-field col m3 s6">
						<input type="text"
							id="dpto-dir"
							placeholder="321"
							value={this.state.persona.dpto}
							onChange={this.cambiarDpto}
						/>
						<label htmlFor="dpto-dir">Número del departamento (en caso de vivir en departamento)</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col m3 s6">
						<input type="text"
							id="localidad-dir"
							placeholder="Necochea"
							value={this.state.persona.localidad}
							onChange={this.cambiarLocal}
						/>
						<label htmlFor="localidad-dir">Nombre de la ciudad</label>
					</div>
					<div className="input-field col m3 s6">
						<input type="text"
							id="codpost-dir"
							placeholder="7630"
							value={this.state.persona.codpostal}
							onChange={this.cambiarPostal}
						/>
						<label htmlFor="codpost-dir">Código postal</label>
					</div>
				</div>
				<div className="row">
					<div className="col m4 s6">
						<label>Nacionalidad</label>
						<select className="browser-default" value={this.state.persona.nacionalidad} onChange={this.cambiarNac}>
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
						<select className="browser-default" value={this.state.persona.estadocivil} onChange={this.cambiarCiv}>
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
							value={this.state.persona.hijos}
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
							value={this.state.persona.telefono}
							onChange={this.cambiarTel}
						/>
					<label htmlFor="tel">Número de teléfono</label>
					</div>
					<div className="input-field col m2 s6">
						<input type="text"
							id="cel"
							placeholder="2262 654321"
							value={this.state.persona.celular}
							onChange={this.cambiarCel}
						/>
					<label htmlFor="cel">Número de celular</label>
					</div>
					<div className="input-field col m2 s6">
						<input type="text"
							id="otrotel"
							placeholder="2262 654321"
							value={this.state.persona.otrotel}
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
							value={this.state.persona.email}
							onChange={this.cambiarEmail}
						/>
					<label htmlFor="email">Correo electrónico</label>
					</div>
				</div>
				<div className="row">
					<button className="btn-large" onClick={this.cambiarInfoPersona}>Siguiente</button>
				</div>
			</div>
		);
	}
});

export default InformacionPersona;
