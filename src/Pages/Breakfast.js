import { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link, useParams } from "react-router-dom";

const Breakfast = () => {

  const { id } = useParams();


  const [breakfastRecipes, setBreakfastRecipes] = useState(null);
  const [recipes, setRecipes] = useState('');

useEffect(() => {
    axios.get(`${URL}/categories/${id}?_embed=recipes`)
    .then(res => setBreakfastRecipes(res.data));
  }, [id]);

  useEffect(() => {
    axios.get(`${URL}/recipes?_expand=author`)
    .then(res => setRecipes(res.data));
  }, []);

  console.log(recipes)

  if (!recipes) {
    return '';
  }

  return (
    <Container>

    <div className="breakfast-recipes-wrapper">
      <h1 className="page-title">{breakfastRecipes.title}</h1>
      <p>{breakfastRecipes.description}</p>
      <img src={breakfastRecipes.img} alt={breakfastRecipes.title} width='300px'/>

      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <Link to={'/#'}>
            <img src={recipe.img} alt={recipe.title}/>
            <h2 className="category-title">{recipe.title}</h2>
          </Link>
          <Link to={'/#'}>
            <span>Created by: {recipe.author.name} {recipe.author.surname}</span>
          </Link>
        </div>
      ))}

    </div>
    </Container>
  )
}

export default Breakfast;