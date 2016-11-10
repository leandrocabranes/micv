import React from 'react';

let FormacionAcademica = React.createClass({
  getInitialState: function () {
    return {
      primIn: '',
      primEst: 'incompleto',
      primInst: '',
      secIn: '',
      secFin: '',
      secInst: '',
      secEst: '',
      oeIn: '',
      oeFn: '',
      oeTit: '',
      oeEst: '',
      oeInst: '',
      oeTipo: ''
    }
  },
  cambiarInfoPersona: function () {
    this.props.updatePersona(this.state);
  },
  cambiarPrimIn: function (e) {
    this.setState({
      primIn: e.target.value,
    });
  },
  cambiarPrimEst: function (e) {
    this.setState({
      primEst: e.target.value,
    });
  },
  cambiarPrimInst: function (e) {
    this.setState({
      primInst: e.target.value,
    });
  },
  cambiarSecIn: function (e) {
    this.setState({
      secIn: e.target.value,
    });
  },
  cambiarSecFin: function (e) {
    this.setState({
      secFin: e.target.value,
    });
  },
  cambiarSecEst: function (e) {
    this.setState({
      secEst: e.target.value,
    });
  },
  cambiarSecInst: function (e) {
    this.setState({
      secInst: e.target.value,
    });
  },
  cambiarOEIn: function (e) {
    this.setState({
      oeIn: e.target.value,
    });
  },
  cambiarOEFin: function (e) {
    this.setState({
      oeFn: e.target.value,
    });
  },
  cambiarOETit: function (e) {
    this.setState({
      oeTit: e.target.value,
    });
  },
  cambiarOEInst: function (e) {
    this.setState({
      oeInst: e.target.value,
    });
  },
  cambiarOEEst: function (e) {
    this.setState({
      oeEst: e.target.value,
    });
  },
  cambiarOETipo: function (e) {
    this.setState({
      oeTipo: e.target.value,
    });
  },
  mostrar: function () {
    console.log(this.state);
  },
  render: function () {
    let anios = [1920];
    for (var i = 1921; i < 2016; i++) {
      anios.push(i);
    }
    let aniosEd = anios.map(function (ai) {
      return <option key={ai} value={ai}>{ai}</option>;
    });
    return (
      <div className="row">
        <h4>Formación académica</h4>
        <div className="row">
          <div className="col m3 s4">
            <label>Año de inicio de Primaria</label>
            <select className="browser-default" value={this.state.primIn} onChange={this.cambiarPrimIn}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
          <div className="col m3 s4">
            <label>Estado de su educación primaria</label>
            <select className="browser-default" value={this.state.primEst} onChange={this.cambiarPrimEst}>
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
							value={this.state.primInst}
							onChange={this.cambiarPrimInst}
						/>
          <label htmlFor="nombreEscuela">Nombre de la escuela primaria</label>
					</div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m3 s4">
            <label>Año en que inicio su educación Secundaria</label>
            <select className="browser-default" value={this.state.secIn} onChange={this.cambiarSecIn}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
          <div className="col m3 s4">
            <label>Año en que finalizó su educación Secundaria</label>
            <select className="browser-default" value={this.state.secFin} onChange={this.cambiarSecFin}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m6 s4">
            <label>Estado de su educación Secundaria</label>
            <select className="browser-default" value={this.state.secEst} onChange={this.cambiarSecEst}>
              <option disabled value="">Elija su estado</option>
              <option value="completo">Completo</option>
              <option value="incompleto">Incompleto</option>
            </select>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="input-field col s6">
            <input type="text"
              id="nombreSecundaria"
              placeholder="E.E.S.T. N°3"
              value={this.state.secInst}
              onChange={this.cambiarSecInst}
            />
            <label htmlFor="nombreSecundaria">Nombre de la escuela secundaria</label>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m3 s4">
            <label>Año de inicio de otra educación</label>
            <select className="browser-default" value={this.state.oeIn} onChange={this.cambiarOEIn}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
          <div className="col m3 s4">
            <label>Año de finalización de otra educación</label>
            <select className="browser-default" value={this.state.oeFn} onChange={this.cambiarOEFin}>
              <option disabled value="">Elija el año</option>
              {aniosEd}
            </select>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m6 s12">
            <label>Estado de su otra educación</label>
            <select className="browser-default" value={this.state.oeEst} onChange={this.cambiarOEEst}>
              <option disabled value="">Elija su estado</option>
              <option value="completo">Completo</option>
              <option value="incompleto">Incompleto</option>
              <option value="encurso">En curso</option>
            </select>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="input-field col s6">
            <input type="text"
              id="nombreinstoe"
              placeholder="Instituto Mariano Moreno"
              value={this.state.oeInst}
              onChange={this.cambiarOEInst}
            />
          <label htmlFor="nombreinstoe">Nombre de la institución</label>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="input-field col s6">
            <input type="text"
              id="titoe"
              placeholder="Piloto de avión"
              value={this.state.oeTit}
              onChange={this.cambiarOETit}
            />
          <label htmlFor="titoe">Título por estudios</label>
          </div>
        </div>
        <div className={this.state.primEst != 'incompleto' ? 'row'  : 'row hide'}>
          <div className="col m6 s12">
            <label>Tipo de su otra educación</label>
            <select className="browser-default" value={this.state.oeTipo} onChange={this.cambiarOETipo}>
              <option disabled value="">Elija su estado</option>
              <option value="terciario">terciario</option>
              <option value="universitario">universitario</option>
              <option value="maestrado">maestrado</option>
              <option value="doctorado">doctorado</option>
            </select>
          </div>
        </div>
        <div className="row">
          <a href="#"><div className="btn-large" onClick={this.cambiarInfoPersona}>Siguiente</div></a>
        </div>
      </div>
    );
  }
});

export default FormacionAcademica;
