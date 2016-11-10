import React from 'react';
import {Link} from 'react-router';

import RUBROS from './Formularios/variables/rubros.js';

let BuscadorOficio = React.createClass({
  render: function () {
    return (
      <div className="input-field col s6">
        <input type="text" id="buscador"/>
        <label htmlFor="buscador">Buscar por oficio</label>
      </div>
    )
  }
});

let Persona = React.createClass({
  render: function () {
    let perLink = '/' + this.props.id;
    return (
      <div className="row">
        <div className="col m4">
          <Link to={perLink}>{this.props.nombre}</Link>
        </div>
        <div className="col m4">{this.props.dni}</div>
        <div className="col m4">{this.props.fechaNac}</div>
      </div>
    );
  }
});

let ListaCurriculums = React.createClass({
  getInitialState: function () {
    return {
      filtro: ''
    }
  },
  updateFiltro: function (e) {
    this.setState({
      filtro: e.target.value
    })
  },
  render: function () {
    // filtramos los cv con un option
    let filteredCV = this.props.personas;
    filteredCV = filteredCV.filter(function (cv) {
      return cv.el_rub.indexOf(this.state.filtro) !== -1;
    }.bind(this));
    // mostramos los cv filtrados
    let handleCurriculums = filteredCV.map(function (per) {
      return (<Persona key={per.id_p} nombre={per.nombre_p} dni={per.dni_p}
        fechaNac={per.fecha_p} id={per.id_p}/>)
    });
    // contenido de rubros del filtro
    let rubExp = RUBROS.map(function (rb) {
      return <option key={rb.num} value={rb.num}>{rb.rub}</option>
    });
    return (
      <div className="row">
        <div className="row">
          <div className="col m6">
            <label>Filtrar por campo de experiencia</label>
            <select className="browser-default" value={this.state.filtro} onChange={this.updateFiltro}>
              <option disabled value="">Elija campo</option>
              <option value="">Todos</option>
              {rubExp}
            </select>
          </div>
        </div>
        {handleCurriculums}
      </div>
    );
  }
});

const Empresas = React.createClass({
  getInitialState: function () {
    return {
      todosCV: []
    };
  },
  componentDidMount: function () {
    $.get('/cv/todos', function (data) {
      this.setState({
        todosCV: data,
      });
    }.bind(this));
  },
  render: function () {
    return (
      <div className="container">
        <h2>Empresas</h2>
        <div className="row">
          <div className="row">
            <div className="col m4"><h5>Nombre</h5></div>
            <div className="col m4"><h5>DNI</h5></div>
            <div className="col m4"><h5>Fecha de nacimiento</h5></div>
          </div>
          <ListaCurriculums personas={this.state.todosCV} />
        </div>
      </div>
    );
  }
});

export default Empresas;
