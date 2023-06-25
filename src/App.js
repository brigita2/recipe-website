import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (

    <div className="navigation-wrapper">
      <nav className="main-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to='/home' className='nav-link'>Home</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />


        {/* <Route path='*' element={
          <>
            <h1>Page not found.</h1>
            <Link to='/'>Go Back to Home Page</Link></>
           } /> */}
      </Routes>
    </div>
  );
}

export default App;
