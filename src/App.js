import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Recipes from "./Pages/Recipes";
import Categories from "./Pages/Categories";
import Recipe from "./Pages/Recipe";
import Author from "./Pages/Author";
import Authors from "./Components/Authors";
import CreateAuthor from "./Components/CreateAuthor";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
    <div className="top-decoration"></div>
    <div className="navigation-wrapper">
      <Container>
      <nav className="main-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to='/about-us' className='nav-link'>About Us</NavLink>
          </li>

          <li className='nav-item'>
          <NavLink to='/recipes' className='nav-link'>Recipes</NavLink>
          </li>
          
          <li className='nav-item'>
            <NavLink to='/recipes/1' className='nav-link'>Breakfast Ideas</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/recipes/2' className='nav-link'>Easy Dinner Ideas</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/recipes/3' className='nav-link'>Best Salad Recipes</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/recipes/4' className='nav-link'>Healthy Lunch Ideas</NavLink>
          </li>
        </ul>
      </nav>
      <header>
        <a className="header-picture" href="/">
          <img 
          src="https://www.loveandlemons.com/wp-content/themes/loveandlemons5/images/lnl-header.png" 
          alt="Love and Lemons"
          width="700"
          />
        </a>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:categoryId' element={<Categories />} />
        <Route path='/recipes/:categoryId/recipe/:recipeId' element={<Recipe />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/authors/create' element={<CreateAuthor />} />
        <Route path='/authors/:authorId' element={<Author />} />

        <Route path='*' element={
          <>
            <h1>Page not found.</h1>
            <Link to='/'>Go Back to Home Page</Link></>
           } />
      </Routes>
      </Container>
    </div>

      <Footer />
    </>
  );
}

export default App;
