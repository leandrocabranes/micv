import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import CrearCV from './CrearCV.js';
import Empresas from './Empresas.js';

const Navbar = React.createClass({
  render: function () {
    return (
      <nav>
        <div className="nav-wrapper light-green darken-1">
          <a href="#" className="brand-logo right">Mi CV</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/crear_cv">Crear mi CV</Link></li>
            <li><Link to="/empresas">Empresas</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

const Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
});

const app = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/crear_cv" component={CrearCV}/>
      <Route path="/empresas" component={Empresas}/>
    </Route>
  </Router>
), app);
