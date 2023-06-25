import { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link } from "react-router-dom";

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
      {categories.map(category => (

        <div key={category.id} className="category-card">
          <Link to={'/recipes/categories/' + category.id}>
            <img src={category.img} alt={category.title}/>
            <h2 className="category-title">{category.title}</h2>
          </Link>
        </div>


      ))}
    </div>
    </Container>
  )
}

export default Recipes;