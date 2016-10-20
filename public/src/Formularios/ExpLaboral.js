import React from 'react';

import RUBROS from './variables/rubros.js';

let ExperienciaLaboral = React.createClass({
  getInitialState: function () {
    return {
      persona: {
        dni: '',
        fechaIn: '',
        fechaFn: '',
        rubro: '',
        puesto: '',
        lugar: '',
        nomRef: '',
        telRef: '',
        puestoRef: ''
      }
    };
  },
  cambiarInicio: function (e) {
    this.setState({
      persona: {
        fechaIn: e.target.value
      }
    });
  },
  cambiarFin: function (e) {
    this.setState({
      persona: {
        fechaFn: e.target.value
      }
    });
  },
  cambiarRubro: function (e) {
    this.setState({
      persona: {
        rubro: e.target.value
      }
    });
  },
  cambiarPuesto: function (e) {
    this.setState({
      persona: {
        puesto: e.target.value.substr(0, 25)
      }
    });
  },
  cambiarLugar: function (e) {
    this.setState({
      persona: {
        lugar: e.target.value.substr(0, 30)
      }
    });
  },
  cambiarNomRef: function (e) {
    this.setState({
      persona: {
        nomRef: e.target.value.substr(0, 30)
      }
    });
  },
  cambiarTelRef: function (e) {
    this.setState({
      persona: {
        telRef: e.target.value.substr(0, 20)
      }
    });
  },
  cambiarPuestoRef: function (e) {
    this.setState({
      persona: {
        puestoRef: e.target.value.substr(0, 20)
      }
    });
  },
  render: function () {
    // Años de experiencia
    let anios = [1920];
		for (var i = 1921; i < 2016; i++) {
			anios.push(i);
		}
		let aniosExp = anios.map(function (ai) {
			return <option key={ai} value={ai}>{ai}</option>;
		});

    let rubExp = RUBROS.map(function (rb) {
      return <option key={rb.num} value={rb.num}>{rb.rub}</option>
    });

    return (
      <div className="row">
        <div className="row">
          <div className="col m2 s4">
						<label>Año de inicio</label>
						<select className="browser-default" value={this.state.persona.fechaIn} onChange={this.cambiarInicio}>
							<option disabled value="">Elija el año</option>
							{aniosExp}
						</select>
					</div>
          <div className="col m2 s4">
						<label>Año de finalización</label>
						<select className="browser-default" value={this.state.persona.fechaFn} onChange={this.cambiarFin}>
							<option disabled value="">Elija el año</option>
							{aniosExp}
						</select>
					</div>
				</div>
        <div className="row">
          <div className="col m4 s12">
						<label>Rubro</label>
						<select className="browser-default" value={this.state.persona.rubro} onChange={this.cambiarRubro}>
							<option disabled value="">Elija el rubro</option>
              {rubExp}
						</select>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="puesto"
							placeholder="cajero"
							value={this.state.persona.puesto}
							onChange={this.cambiarPuesto}
						/>
            <label htmlFor="puesto">Puesto</label>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="referencia"
							placeholder="Juan Juanes"
							value={this.state.persona.nomRef}
							onChange={this.cambiarNomRef}
						/>
            <label htmlFor="referencia">Nombre de la persona a contactar</label>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="tel-ref"
							placeholder="2262 665544"
							value={this.state.persona.telRef}
							onChange={this.cambiarTelRef}
						/>
            <label htmlFor="tel-ref">Teléfono para contactar al contacto de referencia</label>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="carg-ref"
							placeholder="gerente de la galaxia"
							value={this.state.persona.puestoRef}
							onChange={this.cambiarPuestoRef}
						/>
          <label htmlFor="carg-ref">Cargo de contacto de referencia</label>
					</div>
        </div>
        <div className="row">
          <div className="btn-large">Siguiente</div>
        </div>
      </div>
    );
  }
});

export default ExperienciaLaboral;
