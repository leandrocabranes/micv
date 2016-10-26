import React from 'react';

let FormacionAcademica = React.createClass({
  getInitialState: function () {
    return {
      persona: {
        dni: '',
        primIn: '',
        primEst: 'incompleto',
        primInst: '',
        secIn: '',
        secFin: '',
        secInst: '',
        secEst: ''
      }
    }
  },
  cambiarPrimIn: function (e) {
    this.setState({
      persona: {
        primIn: e.target.value
      }
    });
    console.log(e.target.value);
  },
  cambiarPrimEst: function (e) {
    this.setState({
      persona: {
        primEst: e.target.value
      }
    });
    console.log(e.target.value);
  },
  cambiarPrimInst: function (e) {
    this.setState({
      persona: {
        primInst: e.target.value
      }
    });
    console.log(e.target.value);
  },
  cambiarSecIn: function (e) {
    this.setState({
      persona: {
        secIn: e.target.value
      }
    });
    console.log(e.target.value);
  },
  cambiarSecFin: function (e) {
    this.setState({
      persona: {
        secFin: e.target.value
      }
    });
    console.log(e.target.value);
  },
  cambiarSecEst: function (e) {
    this.setState({
      persona: {
        secEst: e.target.value
      }
    });
    console.log(e.target.value);
  },
  cambiarSecInst: function (e) {
    this.setState({
      persona: {
        secInst: e.target.value
      }
    });
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

    function secundario (est, secin, secfin, secest, secinst) {

      if (est == 'completo') {
        return (
          <div className="row">

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
            <select className="browser-default" value={this.state.persona.primIn} onChange={this.cambiarPrimIn}>
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
							value={this.state.persona.primInst}
							onChange={this.cambiarPrimInst}
						/>
          <label htmlFor="nombreEscuela">Nombre de la escuela primaria</label>
					</div>
        </div>
        <div className={this.state.persona.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m3 s4">
            <label>Año en que inicio su educación Secundaria</label>
            <select className="browser-default" value={this.state.persona.secIn} onChange={this.cambiarSecIn}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
          <div className="col m3 s4">
            <label>Año en que finalizó su educación Secundaria</label>
            <select className="browser-default" value={this.state.persona.secFin} onChange={this.cambiarSecFin}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
        </div>
        <div className={this.state.persona.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m6 s4">
            <label>Estado de su educación Secundaria</label>
            <select className="browser-default" value={this.state.persona.secEst} onChange={this.cambiarSecEst}>
              <option disabled value="">Elija su estado</option>
              <option value="completo">Completo</option>
              <option value="incompleto">Incompleto</option>
            </select>
          </div>
        </div>
        <div className={this.state.persona.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="input-field col s6">
            <input type="text"
              id="nombreSecundaria"
              placeholder="E.E.S.T. N°3"
              value={this.state.persona.secInst}
              onChange={this.cambiarSecInst}
            />
          <label htmlFor="nombreSecundaria">Nombre de la escuela secundaria</label>
          </div>
        </div>
        <div className="row">
          <div className="btn-large">Siguiente</div>
        </div>
      </div>
    );
  }
});

export default FormacionAcademica;
