import React from 'react';

let InfoAdicional = React.createClass({
  getInitialState: function () {
    return {
      persona: {
        ingles: '',
        informatica: '',
        movA: '',
        movM: '',
        movB: '',
        movO: '',
        carnet: 0,
        disp: '',
        acla: ''
      }
    }
  },
  cambiarInfoPersona: function () {
    this.props.updatePersona(this.state.persona);
  },
  cambiarIngles: function (e) {
    console.log(e.target.value);
    this.setState({
      persona: {
        ingles: e.target.value,
        movO: this.state.persona.movO,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarInform: function (e) {
    console.log(e.target.value);
    this.setState({
      persona: {
        informatica: e.target.value,
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarCarnet: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 1 : 0;
    console.log(val);
    this.setState({
      persona: {
        carnet: val,
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarDisp: function (e) {
    console.log(e.target.value);
    this.setState({
      persona: {
        disp: e.target.value,
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarAuto: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'auto' : '';
    console.log(val);
    this.setState({
      persona: {
        movA: val,
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarMoto: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'moto' : '';
    console.log(val);
    this.setState({
      persona: {
        movM: val,
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarTicla: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'bicicleta' : '';
    console.log(val);
    this.setState({
      persona: {
        movB: val,
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarOtro: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'otro' : '';
    console.log(val);
    this.setState({
      persona: {
        movO: val,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla
      }
    })
  },
  cambiarAcla: function (e) {
    console.log(e.target.value);
    this.setState({
      persona: {
        acla: e.target.value.substr(0,120),
        movO: this.state.persona.movO,
        ingles: this.state.persona.ingles,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp
      }
    })
  },
  mostrar: function () {
    console.log(this.state.persona);
  },
  render: function () {
    return (
      <div className="row">
        <h4>Información adicional</h4>
        <div className="row">
          <div className="col m6 s4">
            <label>Nivel de Inglés</label>
            <select className="browser-default" value={this.state.persona.ingles} onChange={this.cambiarIngles}>
              <option disabled value="">Elija su nivel</option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col m6 s4">
            <label>Manejo de computadora</label>
            <select className="browser-default" value={this.state.persona.informatica} onChange={this.cambiarInform}>
              <option disabled value="">Elija su nivel</option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <input type="checkbox" id="carnet" onChange={this.cambiarCarnet}/>
            <label htmlFor="carnet">Licencia de conducir</label>
          </div>
        </div>
        <div className="row">
          <div className="col m6 s4">
            <label>Disponibilidad horaria</label>
            <select className="browser-default" value={this.state.persona.disp} onChange={this.cambiarDisp}>
              <option disabled value="">Elija su turno</option>
              <option value="matutino">Matutino</option>
              <option value="vespertino">Vespertino</option>
              <option value="nocturno">Nocturno</option>
              <option value="todos">Todos</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h5>Medios de transporte:</h5>
          </div>
          <div className="col s3">
            <input type="checkbox" id="auto" onChange={this.cambiarAuto}/>
            <label htmlFor="auto">Auto</label>
          </div>
          <div className="col s3">
            <input type="checkbox" id="moto" onChange={this.cambiarMoto}/>
            <label htmlFor="moto">Moto</label>
          </div>
          <div className="col s3">
            <input type="checkbox" id="ticla" onChange={this.cambiarTicla}/>
            <label htmlFor="ticla">Bicicleta</label>
          </div>
          <div className="col s3">
            <input type="checkbox" id="otro" onChange={this.cambiarOtro}/>
            <label htmlFor="otro">Otro</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="aclaracion"
              className="materialize-textarea"
              value={this.state.persona.acla}
              onChange={this.cambiarAcla}
            ></textarea>
          <label htmlFor="aclaracion">Aclaraciones e información horaria (máximo 120 caracteres)</label>
          </div>
        </div>
        <div className="row">
          <div className="btn-large" onClick={this.cambiarInfoPersona}>veamos</div>
        </div>
      </div>
    );
  }
});

export default InfoAdicional;
