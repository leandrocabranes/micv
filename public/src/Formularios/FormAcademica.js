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




  render: function () {
    let anios = [1920];
    for (var i = 1921; i < 2016; i++) {
      anios.push(i);
    }
    let aniosEd = anios.map(function (ai) {
      return <option key={ai} value={ai}>{ai}</option>;
    });

    function secundario (est, secin, secfin, secest, secinst) {
      function cambiarSecIn (e) {
        this.this.setState({
          persona: {
            secIn: e.target.value
          }
        });
        console.log(e.target.value);
      }
      function cambiarSecFin (e) {
        this.this.setState({
          persona: {
            secFin: e.target.value
          }
        });
        console.log(e.target.value);
      }
      function cambiarSecEst (e) {
        this.setState({
          persona: {
            secEst: e.target.value
          }
        });
        console.log(e.target.value);
      }
      function cambiarSecInst (e) {
        this.setState({
          persona: {
            secInst: e.target.value
          }
        });
        console.log(e.target.value);
      }
      if (est == 'completo') {
        return (
          <div className="row">
            <div className="row">
              <div className="col m3 s4">
                <label>Año en que inicio su educación Secundaria</label>
                <select className="browser-default" value={secin} onChange={cambiarSecIn}>
                  <option disabled value="">Elija el año</option>
                  {aniosEd}
                </select>
              </div>
              <div className="col m3 s4">
                <label>Año en que finalizó su educación Secundaria</label>
                <select className="browser-default" value={secfin} onChange={cambiarSecFin}>
                  <option disabled value="">Elija el año</option>
                  {aniosEd}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col m6 s4">
                <label>Estado de su educación Secundaria</label>
                <select className="browser-default" value={secest} onChange={cambiarSecEst}>
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
    							value={secinst}
                  onChange={cambiarSecInst}
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
        {secundario(this.state.persona.primEst, this.state.persona.secIn,
          this.state.persona.secFin, this.state.persona.secEst, this.state.persona.secInst)}
        <div className="row">
          <div className="btn-large">Siguiente</div>
        </div>
      </div>
    );
  }
});

export default FormacionAcademica;
