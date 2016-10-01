import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = React.createClass({
  render: function () {
    return (
      <nav>
        <div className="nav-wrapper light-green darken-1">
          <a href="#" className="brand-logo right">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="#">Sass</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

const Layout = React.createClass({
  render: function () {
    return (
      <Navbar/>
    );
  }
});

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
