import React from 'react';
import Webcam from 'react-webcam';

let InfoAdicional = React.createClass({
  getInitialState: function () {
    return {
      ingles: '',
      informatica: '',
      movA: '',
      movM: '',
      movB: '',
      movO: '',
      carnet: 0,
      disp: '',
      acla: '',
      foto: null
    }
  },
  cambiarInfoPersona: function () {
    this.props.updatePersona(this.state);
  },
  cambiarIngles: function (e) {
    this.setState({
      ingles: e.target.value,
    })
  },
  cambiarInform: function (e) {
    this.setState({
      informatica: e.target.value,
    })
  },
  cambiarCarnet: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 1 : 0;
    this.setState({
      carnet: val,
    })
  },
  cambiarDisp: function (e) {
    this.setState({
      disp: e.target.value,
    })
  },
  cambiarAuto: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'auto' : '';
    this.setState({
      movA: val,
    })
  },
  cambiarMoto: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'moto' : '';
    this.setState({
      movM: val,
    })
  },
  cambiarTicla: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'bicicleta' : '';
    this.setState({
      movB: val,
    })
  },
  cambiarOtro: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'otro' : '';
    this.setState({
      movO: val,
    })
  },
  cambiarAcla: function (e) {
    this.setState({
      acla: e.target.value.substr(0,120),
    })
  },
  cambiarFoto: function () {
    let foto = this.refs.webcam.getScreenshot();
    this.setState({
      foto: foto
    })
  },
  render: function () {
    return (
      <div className="row">
        <h4>Información adicional</h4>
        <div className="row">
          <div className="col m6 s4">
            <label>Nivel de Inglés</label>
            <select className="browser-default" value={this.state.ingles} onChange={this.cambiarIngles}>
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
            <select className="browser-default" value={this.state.informatica} onChange={this.cambiarInform}>
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
            <select className="browser-default" value={this.state.disp} onChange={this.cambiarDisp}>
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
              value={this.state.acla}
              onChange={this.cambiarAcla}
            ></textarea>
          <label htmlFor="aclaracion">Aclaraciones e información horaria (máximo 120 caracteres)</label>
          </div>
        </div>
        <div className="row">
          <Webcam
            audio={false}
            ref="webcam"
            screenshotFormat="image/jpeg"
            width={180}
            height={300}
          />
          <div className="btn" onClick={this.cambiarFoto}>Tomar foto</div>
        </div>
        <div className="row">
          {this.state.foto ? <img src={this.state.foto}/> : null}
        </div>
        <div className="row">
          <div className="col s12">
            <input type="submit" className="btn-large green accent-3" onClick={this.cambiarInfoPersona} value="Crear mi CV" />
          </div>
        </div>
      </div>
    );
  }
});

export default InfoAdicional;
