import React from 'react';
import ReactDOM from 'react-dom';

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

const Empresas = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h2>Empresas</h2>
        <div className="row">
          <form className="col s12">
            <BuscadorOficio />
          </form>
        </div>
      </div>
    );
  }
});

export default Empresas;
