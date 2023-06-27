
const IngredientsList = ({ recipe }) => {

  return (
    <ul id="recipe-ingredients-list">
        <h2>Ingredients</h2>
        {Object.keys(recipe.ingredients).map((stepKey, index) => <li key={index}>{recipe.ingredients[stepKey]}</li>)}
    </ul>
  )
}

export default IngredientsList;