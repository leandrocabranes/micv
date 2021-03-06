import React from "react";

import InformacionPersona from "./Formularios/InfoPersona.js";
import ExperienciaLaboral from "./Formularios/ExpLaboral.js";
import FormacionAcademica from "./Formularios/FormAcademica.js";
import InfoAdicional from "./Formularios/InfoAdicional.js";

let CrearCV = React.createClass({
  getInitialState: function () {
    return {
      // informacion personal
      nombre: "",
			apellido: "",
      sexo: "",
			dni: "",
			anio: "",
			mes: "",
			dia: "",
			direccion: "",
			numero: "",
			piso: "",
			dpto: "",
			localidad: "",
      prov: "",
			codpostal: "",
			nacionalidad: "",
			estadocivil: "",
			hijos: "",
			celular: "",
			telefono: "",
			otrotel: "",
			email: "",
      // experiencia laboral
      fechaIn: "",
      fechaFn: "",
      rubro: "",
      puesto: "",
      lugar: "",
      nomRef: "",
      telRef: "",
      puestoRef: "",
      // formacion academica
      primIn: "",
      primEst: "incompleto",
      primInst: "",
      secIn: "",
      secFin: "",
      secInst: "",
      secEst: "",
      oeIn: "",
      oeFn: "",
      oeTit: "",
      oeEst: "",
      oeInst: "",
      oeTipo: "",
      // info adicional
      ingles: "",
      informatica: "",
      movA: "",
      movM: "",
      movB: "",
      movO: "",
      carnet: 0,
      disp: "",
      acla: "",
      foto: null
    };
  },

  handleInfoPersona: function (pers) {
    this.setState({
      // informacion personal
      nombre: pers.nombre,
			apellido: pers.apellido,
      sexo: pers.sexo,
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
    });
  },

  handleExpPersona: function (pers) {
    this.setState({
      // experiencia laboral
      fechaIn: pers.fechaIn,
      fechaFn: pers.fechaFn,
      rubro: pers.rubro,
      puesto: pers.puesto,
      lugar: pers.lugar,
      nomRef: pers.nomRef,
      puestoRef: pers.puestoRef,
      telRef: pers.telRef
    });
  },

  handleFormPersona: function (pers) {
    this.setState({
      // formacion academica
      primIn: pers.primIn,
      primEst: pers.primEst,
      primInst: pers.primInst,
      secIn: pers.secIn,
      secFin: pers.secFin,
      secInst: pers.secInst,
      secEst: pers.secEst,
      oeIn: pers.oeIn,
      oeFn: pers.oeFn,
      oeTit: pers.oeTit,
      oeEst: pers.oeEst,
      oeInst: pers.oeInst,
      oeTipo: pers.oeTipo
    });
  },

  handleAdPersona: function (pers) {
    this.setState({
      // info adicional
      ingles: pers.ingles,
      movO: pers.movO,
      informatica: pers.informatica,
      movA: pers.movA,
      movM: pers.movM,
      movB: pers.movB,
      carnet: pers.carnet,
      disp: pers.disp,
      acla: pers.acla,
      foto: pers.foto
    });
  },

  handleSubmit: function (cv) {
    console.log(cv);
    // let data = cv;
    $.ajax({
      url: "/cv/crear",
      type: "POST",
      data: cv,
      success: function (data) {
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("/cv/crear", status, err.toString());
      }.bind(this)
    });
  },

  handleFormularioSubmit: function () {
    this.handleSubmit({
      nombre: this.state.nombre,
			apellido: this.state.apellido,
      sexo: this.state.sexo,
			dni: this.state.dni,
			anio: this.state.anio,
			mes: this.state.mes,
			dia: this.state.dia,
			direccion: this.state.direccion,
			numero: this.state.numero,
			piso: this.state.piso,
			dpto: this.state.dpto,
			localidad: this.state.localidad,
      prov: this.state.prov,
			codpostal: this.state.codpostal,
			nacionalidad: this.state.nacionalidad,
			estadocivil: this.state.estadocivil,
			hijos: this.state.hijos,
			celular: this.state.celular,
			telefono: this.state.telefono,
			otrotel: this.state.otrotel,
			email: this.state.email,
      // experiencia laboral
      fechaIn: this.state.fechaIn,
      fechaFn: this.state.fechaFn,
      rubro: this.state.rubro,
      puesto: this.state.puesto,
      lugar: this.state.lugar,
      nomRef: this.state.nomRef,
      telRef: this.state.telRef,
      puestoRef: this.state.puestoRef,
      // formacion academica
      primIn: this.state.primIn,
      primEst: this.state.primEst,
      primInst: this.state.primInst,
      secIn: this.state.secIn,
      secFin: this.state.secFin,
      secInst: this.state.secInst,
      secEst: this.state.secEst,
      oeIn: this.state.oeIn,
      oeFn: this.state.oeFn,
      oeTit: this.state.oeTit,
      oeEst: this.state.oeEst,
      oeInst: this.state.oeInst,
      oeTipo: this.state.oeTipo,
      // info adicional
      ingles: this.state.ingles,
      informatica: this.state.informatica,
      movA: this.state.movA,
      movM: this.state.movM,
      movB: this.state.movB,
      movO: this.state.movO,
      carnet: this.state.carnet,
      disp: this.state.disp,
      acla: this.state.acla,
      foto: this.state.foto
    });
  },

  render: function () {
		let texto = "Importante: una vez que comienze a llenar la información para crear su CV ";
		texto += "deberá seguir todos los pasos hasta el último de ellos. No podrá saltar ningún procedimiendo";
    let texto2 = "Una vez que haya dado click al boton de siguiente al final de todo formulario, deberá";
    texto2 += " hacer click en la siguiente pestaña para continuar con la creación de su CV."

    return (
      <div className="container">
        <h2>¡Crear mi CV!</h2>
				<p>{texto}</p>
        <p>{texto2}</p>
        <div className="row">
          <form className="col s12" onSubmit={this.handleFormularioSubmit}>
            <ul className="tabs">
              <li className="tab col s3"><a href="#form1" className="active">Informacion Personal</a></li>
              <li className="tab col s3"><a href="#form2">Experiencia Laboral</a></li>
              <li className="tab col s3"><a href="#form3">Formacion Académica</a></li>
              <li className="tab col s3"><a href="#form4">Información Adicional</a></li>
            </ul>
						<div id="form1"><InformacionPersona updatePersona={this.handleInfoPersona}/></div>
            <div id="form2"><ExperienciaLaboral updatePersona={this.handleExpPersona} /></div>
            <div id="form3"><FormacionAcademica updatePersona={this.handleFormPersona}/></div>
            <div id="form4"><InfoAdicional updatePersona={this.handleAdPersona}/></div>
          </form>
        </div>
        {$('ul.tabs').tabs()}
      </div>
    );
  }
});

export default CrearCV;
