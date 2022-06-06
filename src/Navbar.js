import React from 'react'
import {Link} from "react-router-dom";
const Navbar=()=>{
 
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Banana News Network</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/business" style={{color: "black"}}>Business</Link></li>
                <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/entertainment" style={{color: "black"}}>Entertainment</Link></li>
                <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/general" style={{color: "black"}}>General</Link></li>
                <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/health" style={{color: "black"}}>Health</Link></li>
                <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/science" style={{color: "black"}}>Science</Link></li>
                <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/sports" style={{color: "black"}}>Sports</Link></li>
                <li className="nav-item">
                <Link className="nav-link dropdown-item" to="/technology" style={{color: "black"}}>Technology</Link></li>
            
          </ul>
        </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  
}
export default Navbar