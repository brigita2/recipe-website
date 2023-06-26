
const InstructionsList = ({ recipe }) => {

  return (
    <ol className="recipe-steps-list">
        <h2>Instructions</h2>
        {Object.keys(recipe.description).map((stepKey, index) => <li key={index}>{recipe.description[stepKey]}</li>)}
    </ol>
  )
}

export default InstructionsList;