import React from 'react';
import ReactDOM from 'react-dom';

import InformacionPersona from './Formularios/InfoPersona.js';

const CrearCV = React.createClass({
  render: function () {
		let texto = "Importante: una vez que comienze a llenar la información para crear su CV ";
		texto += "deberá seguir todos los pasos hasta el último de ellos. No podrá saltar ningún procedimiendo";
    return (
      <div className="container">
        <h2>¡Crear mi CV!</h2>
				<p>{texto}</p>
        <div className="row">
          <form className="col s12">
						<div className="row">
							<InformacionPersona />
							<input type="submit" value="Crear CV" className="btn-large"/>
						</div>
          </form>
        </div>
      </div>
    );
  }
});

export default CrearCV;
