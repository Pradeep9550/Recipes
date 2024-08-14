
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
   <div >
     <div className="top-nabvar">
      
      <img src="https://thumbs.dreamstime.com/b/recipe-book-calligraphy-cover-vector-illustration-emblem-label-print-chef-kitchen-hat-trendy-stylish-typography-inscription-166113287.jpg" alt="" />

     <div className="searchBar">
      <input type="text" placeholder="Search" />
      <button>Search</button>
     </div>

      <div class="other-links">
        <button id="btn-login"><a href="">Login</a></button>
        <button id="btn-signup"><a href="">Sign Up</a></button>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark nv p-3" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ulnav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        
        <li className="nav-item">
            <Link className="nav-link active" to="#" >
              Recipes
            </Link>
            <div className="recipesPages">
            <div className="container1">
              <h4>Recipe Pages</h4>
              <Link className="link" to="/">Recipe Archive</Link>
              <Link className="link" to="/">Recipe Details</Link>
              <Link className="link" to="/">Recipe Categories</Link>
              <Link className="link" to="/">Recipe Authors</Link>
              <Link className="link" to="/">Submit Recipe</Link>
            </div>
            <div className="container3">
              <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/categories/2.jpg" alt="" />
            </div>
            <div className="container2">
              <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/categories/3.jpg" alt="" />
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Contact Us</Link>
        </li>
      </ul>
      <ul className="d-flex gap-4 list-unstyled">
        <li><Link to=""><i class="bi bi-facebook i"></i></Link></li>
        <li><Link to=""><i class="bi bi-twitter i"></i></Link></li>
        <li><Link to=""><i class="bi bi-linkedin i"></i></Link></li>
        <li><Link to=""><i class="bi bi-instagram i"></i></Link></li>
       </ul>
    </div>
  </div>
</nav>



   </div>
  );
};

export default Navbar;
 
