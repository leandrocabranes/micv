import React from 'react';

let FormacionAcademica = React.createClass({
  getInitialState: function () {
    return {
      persona: {
        dni: '',
        primIn: '',
        primEst: '',
        primInst: '',
        secIn: '',
        secFin: '',
        secInst: '',
        secEst: ''
      }
    }
  },
  cambiarPrimEst: function (e) {
    this.setState({
      persona: {
        primEst: e.target.value
      }
    });
    // console.log(this.state.persona.primEst);
    console.log(e.target.value);
  },
  render: function () {
    let anios = [1920];
    for (var i = 1921; i < 2016; i++) {
      anios.push(i);
    }
    let aniosEd = anios.map(function (ai) {
      return <option key={ai} value={ai}>{ai}</option>;
    });

    function secundario (est) {
      if (est == 'completo') {
        return (
          <div className="row">
            <div className="row">
              <div className="col m3 s4">
                <label>Año en que inicio su educación Secundaria</label>
                <select className="browser-default" value="">
                  <option disabled value="">Elija el año</option>
                  {aniosEd}
                </select>
              </div>
              <div className="col m3 s4">
                <label>Año en que finalizó su educación Secundaria</label>
                <select className="browser-default" value="">
                  <option disabled value="">Elija el año</option>
                  {aniosEd}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col m6 s4">
                <label>Estado de su educación Secundaria</label>
                <select className="browser-default" value="">
                  <option disabled value="">Elija su estado</option>
                  <option value="completo">Completo</option>
                  <option value="incompleto">Incompleto</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
    						<input type="text"
    							id="nombreSecundaria"
    							placeholder="E.E.S.T. N°3"
    							value=""
    						/>
              <label htmlFor="nombreSecundaria">Nombre de la escuela secundaria</label>
    					</div>
            </div>
          </div>
        );
      } else {
        return ;
      }
    };
    return (
      <div className="row">
        <div className="row">
          <div className="col m3 s4">
            <label>Año de inicio de Primaria</label>
            <select className="browser-default" value={this.state.persona.fechaIn} onChange={this.cambiarInicio}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
          <div className="col m3 s4">
            <label>Estado de su educación primaria</label>
            <select className="browser-default" value={this.state.persona.primEst} onChange={this.cambiarPrimEst}>
              <option disabled value="">Elija su estado</option>
              <option value="completo">Completo</option>
              <option value="incompleto">Incompleto</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
						<input type="text"
							id="nombreEscuela"
							placeholder="Escuela N°7"
							value={this.state.persona.puesto}
							onChange={this.cambiarPuesto}
						/>
          <label htmlFor="nombreEscuela">Nombre de la escuela primaria</label>
					</div>
        </div>
        {secundario(this.state.persona.primEst)}
        <div className="row">
          <div className="btn-large">Siguiente</div>
        </div>
      </div>
    );
  }
});

export default FormacionAcademica;
