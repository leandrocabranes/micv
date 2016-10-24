import React from 'react';

let InfoAdicional = React.createClass({
  getInitialState: function () {
    return {
      persona: {
        dni: '',
        ingles: '',
        informatica: '',
        movA: '',
        movM: '',
        movB: '',
        movTP: '',
        disp: '',
        acla: ''
      }
    }
  },
  cambiarAuto: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'auto' : '';
    console.log(val);
    this.setState({
      persona: {
        movA: val
      }
    })
  },
  cambiarMoto: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'moto' : '';
    console.log(val);
    this.setState({
      persona: {
        movM: val
      }
    })
  },
  cambiarTicla: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'bicicleta' : '';
    console.log(val);
    this.setState({
      persona: {
        movB: val
      }
    })
  },
  cambiarTP: function (e) {
    let evento = e.target.checked;
    let val = (evento) ? 'transporte_publico' : '';
    console.log(val);
    this.setState({
      persona: {
        movB: val
      }
    })
  },
  render: function () {
    return (
      <div className="row">
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
          <input type="checkbox" id="tp" onChange={this.cambiarTP}/>
          <label htmlFor="tp">Transporte público</label>
        </div>
      </div>
    );
  }
});

export default InfoAdicional;
