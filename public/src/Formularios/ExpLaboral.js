import React from 'react';
import ReactDOM from 'react-dom';

let ExperienciaLaboral = React.createClass({
  getInitialState: function () {
    return {
      persona: {

      }
    };
  },
  render: function () {

    let anios = [1920];
		for (var i = 1921; i < 2016; i++) {
			anios.push(i);
		}
		let aniosExp = anios.map(function (ai) {
			return <option key={ai} value={ai}>{ai}</option>;
		});

    return (
      <div className="row">
        <div className="row">
          <div className="col m2 s4">
						<label>Año de inicio</label>
						<select className="browser-default" value={this.state.persona.dia} onChange={this.cambiarDia}>
							<option disabled value="">Elija el año</option>
							{aniosExp}
						</select>
					</div>
          <div className="col m2 s4">
						<label>Año de finalización</label>
						<select className="browser-default" value={this.state.persona.dia} onChange={this.cambiarDia}>
							<option disabled value="">Elija el año</option>
							{aniosExp}
						</select>
					</div>
				</div>
        <div className="row">
          <div className="col m4 s12">
						<label>Rubro</label>
						<select className="browser-default" value={this.state.persona.dia} onChange={this.cambiarDia}>
							<option disabled value="">Elija el rubro</option>
						</select>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="puesto"
							placeholder="cajero"
							value={this.state.persona.dni}
							onChange={this.cambiarDNI}
						/>
            <label htmlFor="puesto">Puesto</label>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="referencia"
							placeholder="Juan Juanes"
							value={this.state.persona.dni}
							onChange={this.cambiarDNI}
						/>
            <label htmlFor="referencia">Nombre de la persona a contactar</label>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="tel-ref"
							placeholder="2262 665544"
							value={this.state.persona.dni}
							onChange={this.cambiarDNI}
						/>
            <label htmlFor="tel-ref">Teléfono para contactar al contacto de referencia</label>
					</div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="carg-ref"
							placeholder="gerente de la galaxia"
							value={this.state.persona.dni}
							onChange={this.cambiarDNI}
						/>
          <label htmlFor="carg-ref">Cargo de contacto de referencia</label>
					</div>
        </div>
      </div>
    );
  }
});

export default ExperienciaLaboral;
