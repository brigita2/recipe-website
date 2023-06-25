import { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link } from "react-router-dom";

const Recipes = () => {

  const [categories, setCategories] = useState('');

  useEffect(() => {
    axios.get(`${URL}/categories`)
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
        <Link to={'/#'}>
        <div className="category-card">
        <img src={category.img} alt={category.title}/>
        <h2 className="category-title">{category.title}</h2>
        </div>
        </Link>


      ))}
    </div>
    </Container>
  )
}

export default Recipes;