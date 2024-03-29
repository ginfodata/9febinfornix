import React from 'react';
import {Link} from "react-router-dom";



const NavigationBar = () => {
  
  return (
    <>
    
 
    {/* <div>
  */}

    {/* <nav className="navbar">
      
      <ul className="nav-list">
         <li>
         <Link to="/home">home</Link>
         </li>
        <li>
        <Link to="/About">about</Link>
        </li>
        <li>
        <Link to="/Services">services</Link>
        </li>
        <li>
        <Link to="/Contact">contact</Link>
        </li>
        <li>
        <Link to="/Login">login</Link>
        </li>
        <li>
        <Link to="/Signup">signup</Link>
        </li>
      </ul>
    </nav>
    </div>  */}


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" >INFORNIX </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link "  to='/Services' role="button"  aria-expanded="false">
            Services
          </Link>
          <li className="nav-item">
          <Link className="nav-link "  to='/Quiz' role="button"  aria-expanded="false">
          Online Assessment
          </Link>
          </li>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-10 w-50px" type="search" placeholder="Search"  ></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavigationBar;
