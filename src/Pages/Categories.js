import { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link, useParams } from "react-router-dom";
import Category from "./Category";

const Categories = () => {

  const { categoryId } = useParams();

  const [recipesCategories, setRecipesCategories] = useState(null);

useEffect(() => {
    axios.get(`${URL}/categories/${categoryId}?_embed=recipes`)
    .then(res => setRecipesCategories(res.data));
  }, [categoryId]);

  if (!recipesCategories) {
    return '';
  }

  return (
    <Container>
      <Category categories={recipesCategories}/>
    </Container>
  )
}

export default Categories;