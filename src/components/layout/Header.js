import React from 'react';
import { Link } from "react-router-dom";


const Header = (props) => {
   const { heading } = props;
   return (
      <nav className="navbar navbar-expand-sm navbar-light mb-4 py-1 bg-danger text-light">
         <div className="container">
            <Link style={{fontSize: "35px"}} to="/" className="navbar-brand text-light">{heading} <i className="fas fa-dumbbell" /></Link>
            <div>
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <Link style={{fontSize: "20px"}} to="/" className="nav-link text-light">
                        <i className="fas fa-home"></i> Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link style={{fontSize: "20px"}} to="/contact/add" className="nav-link text-light">
                        <i className="fas fa-plus"></i> Add
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link style={{fontSize: "20px"}} to="/about" className="nav-link text-light">
                        <i className="fas fa-question"></i> About
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
};

Header.defaultProps = {
   heading: "My App"
}


export default Header;
