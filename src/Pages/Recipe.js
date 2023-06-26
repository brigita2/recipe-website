import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL } from "../config";
import IngredientsList from "../Components/IngredientsList";
import InstructionsList from "../Components/Container/InstructionsList";
import Container from "../Components/Container/Container";

const Recipe = () => {

    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        axios.get(`${URL}/recipes/${recipeId}?_expand=author`)
        .then(res => setRecipe(res.data));
      }, [recipeId]);

      if (!recipe && !recipe.description) {
        return '';
      };

  return (
    <Container>

        <div className="recipe-wrapper">
            <img src={recipe.img} alt={recipe.title}/>
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.intro}</p>

            {recipe.author && (
                <Link to={`/authors/${recipe.author.id}`}><h2>Author: {recipe.author.name} {recipe.author.surname}</h2></Link> 
                )}
            <>
            <IngredientsList recipe={recipe} />
            <InstructionsList recipe={recipe} />
            </>

        </div>
    </Container>
  )
}

export default Recipe;