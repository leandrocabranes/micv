import React from 'react';
import RUBROS from './Formularios/variables/rubros.js';

let InfoPersona = React.createClass({
  render: function () {
    let rubExp = '';
    for (var i = 0; i < RUBROS.length; i++) {
      if (this.props.info.el_rub == RUBROS[i].num) {
        rubExp = RUBROS[i].rub;
      }
    }
    return (
      <div className="row">
        <br/>
        <div className="row">
          <div className="col s12"><img src={this.props.info.fotourl} /></div>
        </div>
        <div className="row">
          <div className="col s12"><h5>Info Personal</h5></div>
        </div>
        <div className="row">
          <div className="col s12">Nombre: {this.props.info.nombre_p}</div>
        </div>
        <div className="row">
          <div className="col s12">Apellido: {this.props.info.apellido_p}</div>
        </div>
        <div className="row">
          <div className="col s12">DNI: {this.props.info.dni_p}</div>
        </div>
        <div className="row">
          <div className="col s12">Fecha de nacimiento: {this.props.info.fecha_p}</div>
        </div>
        <div className="divider"></div>
        <div className="row">
          <div className="col s12"><h5>Formacion academica</h5></div>
        </div>
        <div className="row">
          <div className="col s12">Estado de Secundario: {this.props.info.secu_est}</div>
        </div>
        <div className="row">
          <div className="col s12">Culminacion de Secundario: {this.props.info.secu_fin}</div>
        </div>
        <div className="row">
          <div className="col s12">Institución de formación secundaria: {this.props.info.secu_insti}</div>
        </div>
        <div className="row">
          <div className="col s12">Otra educación</div>
        </div>
        <div className="row">
          <div className="col s12">Institución: {this.props.info.oe_insti}</div>
        </div>
        <div className="row">
          <div className="col s12">Estado: {this.props.info.oe_est}</div>
        </div>
        <div className="row">
          <div className="col s12">Nivel: {this.props.info.oe_tipo}</div>
        </div>
        <div className="row">
          <div className="col s12">Título: {this.props.info.oe_estr}</div>
        </div>
        <div className="divider"></div>
        <div className="row">
          <div className="col s12"><h5>Experiencia laboral</h5></div>
        </div>
        <div className="row">
          <div className="col s12">Período: {this.props.info.el_ini} - {this.props.info.el_fin}</div>
        </div>
        <div className="row">
          <div className="col s12">Rubro: {rubExp}</div>
        </div>
        <div className="row">
          <div className="col s12">Puesto: {this.props.info.el_puesto}</div>
        </div>
        <div className="row">
          <div className="col s12">Lugar: {this.props.info.el_lug}</div>
        </div>
      </div>
    );
  }
});

let Persona = React.createClass({
  getInitialState: function () {
    return {
      persona: ''
    };
  },
  componentDidMount: function () {
    const ruta = '/cv/' + this.props.params.id;
    $.get(ruta, function (data) {
      this.setState({ persona: data[0] });
      console.log(data[0]);
    }.bind(this));
  },
  render: function () {
    return (
      <div className="container">
        <InfoPersona info={this.state.persona}/>
      </div>
    );
  }
});

export default Persona;
