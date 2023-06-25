import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Recipes from "./Pages/Recipes";


function App() {
  return (

    <div className="navigation-wrapper">
      <nav className="main-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to='/home' className='nav-link'>Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/about-us' className='nav-link'>About Us</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/recipes' className='nav-link'>Recipes</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/recipes' element={<Recipes />} />


        <Route path='*' element={
          <>
            <h1>Page not found.</h1>
            <Link to='/'>Go Back to Home Page</Link></>
           } />
      </Routes>
    </div>
  );
}

export default App;
