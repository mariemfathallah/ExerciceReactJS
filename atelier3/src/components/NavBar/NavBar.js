import React, { Component } from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import NavItem from '../NavItem/NavItem';
import { FaSearch } from "react-icons/fa";

 class home extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <Link to="/" className="nav success">DeB</Link>
  
    <form className="d-flex" role="search" >  
        <input className="form-control me-2" type="search" placeholder="Type Something" aria-label="Search" style={{borderRadius:'50px'}}/>
<FaSearch style={{color:'gray', fontSize:'20px',right:'30px',position:'relative',top:'8px',width:'330px'}}/>
      </form>  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavItem>
        <Link to="/" className="nav-link active">Home</Link>
        
        </NavItem>
        <NavItem>
        <Link to="/list" className="nav-link">List Departments</Link>
        
        </NavItem>
      </ul>
     
    </div>
  </div>
</nav>

      </div>

    )
  }
}
export default home;