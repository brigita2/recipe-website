
import { Link } from "react-router-dom";
import Container from "../Components/Container/Container";

const Home = () => {


  return (
    <Container>

    <div>
      <Link to='/recipes'>
      <h1 className="page-title">Search Our Best Recipes</h1>
      </Link>
    </div>
    </Container>

  )
}

export default Home;