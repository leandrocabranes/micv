import React from 'react';

import InformacionPersona from './Formularios/InfoPersona.js';
import ExperienciaLaboral from './Formularios/ExpLaboral.js';
import FormacionAcademica from './Formularios/FormAcademica.js';
import InfoAdicional from './Formularios/InfoAdicional.js';

let CrearCV = React.createClass({
  getInitialState: function () {
    // hace falta agregar todos los demas estados
    // de la persona, como formacion academica y demas
    return {
      persona: {
        // informacion personal
        nombre: '',
				apellido: '',
				dni: '',
				anio: '',
				mes: '',
				dia: '',
				direccion: '',
				numero: '',
				piso: '',
				dpto: '',
				localidad: '',
        prov: '',
				codpostal: '',
				nacionalidad: '',
				estadocivil: '',
				hijos: '',
				celular: '',
				telefono: '',
				otrotel: '',
				email: '',
        // experiencia laboral
        fechaIn: '',
        fechaFn: '',
        rubro: '',
        puesto: '',
        lugar: '',
        nomRef: '',
        telRef: '',
        puestoRef: '',
        // formacion academica
        primIn: '',
        primEst: 'incompleto',
        primInst: '',
        secIn: '',
        secFin: '',
        secInst: '',
        secEst: '',
        // info adicional
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
    };
  },

  handleInfoPersona: function (pers) {
    this.setState({
      persona: {
        // informacion personal
        nombre: pers.nombre,
				apellido: pers.apellido,
				dni: pers.dni,
				anio: pers.anio,
				mes: pers.mes,
				dia: pers.dia,
				direccion: pers.direccion,
				numero: pers.numero,
				piso: pers.piso,
				dpto: pers.dpto,
				localidad: pers.localidad,
        prov: pers.prov,
				codpostal: pers.codpostal,
				nacionalidad: pers.nacionalidad,
				estadocivil: pers.estadocivil,
				hijos: pers.hijos,
				celular: pers.celular,
				telefono: pers.telefono,
				otrotel: pers.otrotel,
				email: pers.email,
        // experiencia laboral
        fechaIn: this.state.persona.fechaIn,
        fechaFn: this.state.persona.fechaFn,
        rubro: this.state.persona.rubro,
        puesto: this.state.persona.puesto,
        lugar: this.state.persona.lugar,
        nomRef: this.state.persona.nomRef,
        puestoRef: this.state.persona.puestoRef,
        telRef: this.state.persona.telRef,
        // formacion academica
        primIn: this.state.persona.primIn,
        primEst: this.state.persona.primEst,
        primInst: this.state.persona.primInst,
        secIn: this.state.persona.secIn,
        secFin: this.state.persona.secFin,
        secInst: this.state.persona.secInst,
        secEst: this.state.persona.secEst,
        // info adicional
        ingles: this.state.persona.ingles,
        movO: this.state.persona.movO,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla,
        foto: this.state.persona.foto
      }
    });
    console.log(this.state.persona);
  },

  handleExpPersona: function (pers) {
    this.setState({
      persona: {
        // informacion personal
        nombre: this.state.persona.nombre,
				apellido: this.state.persona.apellido,
				dni: this.state.persona.dni,
				anio: this.state.persona.anio,
				mes: this.state.persona.mes,
				dia: this.state.persona.dia,
				direccion: this.state.persona.direccion,
				numero: this.state.persona.numero,
				piso: this.state.persona.piso,
				dpto: this.state.persona.dpto,
				localidad: this.state.persona.localidad,
        prov: this.state.persona.prov,
				codpostal: this.state.persona.codpostal,
				nacionalidad: this.state.persona.nacionalidad,
				estadocivil: this.state.persona.estadocivil,
				hijos: this.state.persona.hijos,
				celular: this.state.persona.celular,
				telefono: this.state.persona.telefono,
				otrotel: this.state.persona.otrotel,
				email: this.state.persona.email,
        // experiencia laboral
        fechaIn: pers.fechaIn,
        fechaFn: pers.fechaFn,
        rubro: pers.rubro,
        puesto: pers.puesto,
        lugar: pers.lugar,
        nomRef: pers.nomRef,
        puestoRef: pers.puestoRef,
        telRef: pers.telRef,
        // formacion academica
        primIn: this.state.persona.primIn,
        primEst: this.state.persona.primEst,
        primInst: this.state.persona.primInst,
        secIn: this.state.persona.secIn,
        secFin: this.state.persona.secFin,
        secInst: this.state.persona.secInst,
        secEst: this.state.persona.secEst,
        // info adicional
        ingles: this.state.persona.ingles,
        movO: this.state.persona.movO,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla,
        foto: this.state.persona.foto
      }
    });
    console.log(this.state.persona);
  },

  handleFormPersona: function (pers) {
    this.setState({
      persona: {
        // informacion personal
        nombre: this.state.persona.nombre,
				apellido: this.state.persona.apellido,
				dni: this.state.persona.dni,
				anio: this.state.persona.anio,
				mes: this.state.persona.mes,
				dia: this.state.persona.dia,
				direccion: this.state.persona.direccion,
				numero: this.state.persona.numero,
				piso: this.state.persona.piso,
				dpto: this.state.persona.dpto,
				localidad: this.state.persona.localidad,
        prov: this.state.persona.prov,
				codpostal: this.state.persona.codpostal,
				nacionalidad: this.state.persona.nacionalidad,
				estadocivil: this.state.persona.estadocivil,
				hijos: this.state.persona.hijos,
				celular: this.state.persona.celular,
				telefono: this.state.persona.telefono,
				otrotel: this.state.persona.otrotel,
				email: this.state.persona.email,
        // experiencia laboral
        fechaIn: this.state.persona.fechaIn,
        fechaFn: this.state.persona.fechaFn,
        rubro: this.state.persona.rubro,
        puesto: this.state.persona.puesto,
        lugar: this.state.persona.lugar,
        nomRef: this.state.persona.nomRef,
        puestoRef: this.state.persona.puestoRef,
        telRef: this.state.persona.telRef,
        // formacion academica
        primIn: pers.primIn,
        primEst: pers.primEst,
        primInst: pers.primInst,
        secIn: pers.secIn,
        secFin: pers.secFin,
        secInst: pers.secInst,
        secEst: pers.secEst,
        // info adicional
        ingles: this.state.persona.ingles,
        movO: this.state.persona.movO,
        informatica: this.state.persona.informatica,
        movA: this.state.persona.movA,
        movM: this.state.persona.movM,
        movB: this.state.persona.movB,
        carnet: this.state.persona.carnet,
        disp: this.state.persona.disp,
        acla: this.state.persona.acla,
        foto: this.state.persona.foto
      }
    });
    console.log(this.state.persona);
  },

  handleAdPersona: function (pers) {
    this.setState({
      persona: {
        // informacion personal
        nombre: this.state.persona.nombre,
        apellido: this.state.persona.apellido,
        dni: this.state.persona.dni,
        anio: this.state.persona.anio,
        mes: this.state.persona.mes,
        dia: this.state.persona.dia,
        direccion: this.state.persona.direccion,
        numero: this.state.persona.numero,
        piso: this.state.persona.piso,
        dpto: this.state.persona.dpto,
        localidad: this.state.persona.localidad,
        prov: this.state.persona.prov,
        codpostal: this.state.persona.codpostal,
        nacionalidad: this.state.persona.nacionalidad,
        estadocivil: this.state.persona.estadocivil,
        hijos: this.state.persona.hijos,
        celular: this.state.persona.celular,
        telefono: this.state.persona.telefono,
        otrotel: this.state.persona.otrotel,
        email: this.state.persona.email,
        // experiencia laboral
        fechaIn: this.state.persona.fechaIn,
        fechaFn: this.state.persona.fechaFn,
        rubro: this.state.persona.rubro,
        puesto: this.state.persona.puesto,
        lugar: this.state.persona.lugar,
        nomRef: this.state.persona.nomRef,
        puestoRef: this.state.persona.puestoRef,
        telRef: this.state.persona.telRef,
        // formacion academica
        primIn: this.state.persona.primIn,
        primEst: this.state.persona.primEst,
        primInst: this.state.persona.primInst,
        secIn: this.state.persona.secIn,
        secFin: this.state.persona.secFin,
        secInst: this.state.persona.secInst,
        secEst: this.state.persona.secEst,
        // info adicional
        ingles: pers.ingles,
        movO: pers.movO,
        informatica: pers.Informatica,
        movA: pers.movA,
        movM: pers.movM,
        movB: pers.movB,
        carnet: pers.carnet,
        disp: pers.disp,
        acla: pers.acla,
        foto: pers.foto
      }
    });
    console.log(this.state.persona);
  },

  handleSubmit: function () {
    console.log(this.state.persona);
    $.ajax({
      url: '/cv/crear',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function (data) {
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('/cv/crear', status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
		let texto = "Importante: una vez que comienze a llenar la información para crear su CV ";
		texto += "deberá seguir todos los pasos hasta el último de ellos. No podrá saltar ningún procedimiendo";
    return (
      <div className="container">
        <h2>¡Crear mi CV!</h2>
				<p>{texto}</p>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <ul className="tabs">
              <li className="tab col s3"><a href="#form1" className="active">Info</a></li>
              <li className="tab col s3"><a href="#form2">Exp</a></li>
              <li className="tab col s3"><a href="#form3">Form</a></li>
              <li className="tab col s3"><a href="#form4">Ad</a></li>
            </ul>
						<div id="form1"><InformacionPersona updatePersona={this.handleInfoPersona}/></div>
            <div id="form2"><ExperienciaLaboral updatePersona={this.handleExpPersona} /></div>
            <div id="form3"><FormacionAcademica updatePersona={this.handleFormPersona}/></div>
            <div id="form4"><InfoAdicional updatePersona={this.handleAdPersona}/></div>
            <div className="row">
              <div className="col s12">
                <div className="btn-large green accent-3">¡Crear mi CV!</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default CrearCV;
