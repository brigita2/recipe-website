import { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link } from "react-router-dom";
import '../Style/recipes.css'

const Recipes = () => {

  const [categories, setCategories] = useState('');

  useEffect(() => {
    axios.get(`${URL}/categories?_embed=recipes`)
    .then(res => setCategories(res.data));
  }, []);

  if (!categories) {
    return '';
  };

  return (
    <Container>
      <div className="recipes-wrapper">
        <h1 className="page-title">All Recipes</h1>
        <div className="recipes-wrapper-left">

          {categories.map(category => (
            <div key={category.id} className="category-card">
              <Link to={`/recipes/${category.id}`}>
                <img src={category.img} alt={category.title}/>
                <h2 className="category-title">{category.title}</h2>
              </Link>
          </div>
      ))}
        </div>
        {categories.map(category =>(
        <div className="recipes-wrapper-right">
          <h3>Filter Recipes:</h3>
          <Link className="button-pink" to={`/recipes/${category.id}`}>Breakfast Ideas</Link>
          <Link className="button-pink" to={`/recipes/${category.id}`}>Easy Dinner Ideas</Link>
          <Link className="button-pink" to={`/recipes/${category.id}`}>Best Salad recipes</Link>
          <Link className="button-pink" to={`/recipes/${category.id}`}>Healthy Lunch Ideas</Link>
        </div>
        ))}

      </div>
    </Container>
  )
}

export default Recipes;