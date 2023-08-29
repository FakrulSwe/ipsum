import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div className="container-fluid gap-5">
    <img src={logo} alt="" />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-success" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">A</a></li>
            <li><a className="dropdown-item" href="/">B</a></li>
            <li><a className="dropdown-item" href="/">C</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contacts</a>
        </li>
      </ul>
      <form className="d-flex gap-3" role="search">
      <button className="btn btn-outline-success bg-success text-light" type="submit">Get Started</button>
        <button className="btn btn-outline-dark " type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;