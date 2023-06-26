import { Link } from "react-router-dom";
import Container from "../Components/Container/Container";


const Category = ({ categories }) => {
 const categoryId = categories.id;
if (!categories) {
  return '';

}
  return (
    <Container>
      <div className="breakfast-recipes-wrapper">
        <h1 className="page-title">{categories.title}</h1>
        <p>{categories.description}</p>
        <img src={categories.img} alt={categories.title} width='300px'/>

        {categories.recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/${categoryId}/recipe/${recipe.id}`}>
              <img src={recipe.img} alt={recipe.title}/>
              <h2 className="category-title">{recipe.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Category;