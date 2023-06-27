import { Link, NavLink, useParams } from "react-router-dom";
import { URL } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container/Container";
import '../Style/author.css'

const Authors = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState('');
    const [authorDeleted, setAuthorDeleted] = useState(false);

    useEffect(() => {
        axios.get(`${URL}/authors/${authorId}`)
        .then(res => setAuthor(res.data));
      }, [authorId]);

    const deleteAuthorHandler = () => {
      axios.delete((`${URL}/authors/${authorId}`))
      .then(data => setAuthorDeleted(true));
    }

    if (!author) {
      return '';
    }

  return (
    <Container>
      {authorDeleted ? (
         <>
        <h2>Author deleted</h2>
        <Link to='/authors'>Go back to authors list</Link>
        </>
      ) : (
    <div className="author-wrapper">
      <div className="inside-wrapper-author">
          <h1 className="page-title">{author.name} {author.surname}</h1>
          <img className="author-img" src={author.img} alt={author.name}/>
          <p><b>Business:</b> {author.business}</p>
          <p><b>Location:</b> {author.location}</p>
          <p><b>Education:</b> {author.education}</p>
          <p><b>Expertise:</b> {author.expertise}</p>

          <h2>Experience</h2>
          <p>{author.experience}</p>

          <button className="button-pink" onClick={deleteAuthorHandler}>Delete Author</button>
          <Link className="button-pink" to='/authors'>Back to all Authors</Link>
          <Link className="button-pink" to='/authors/create'>Create new Author</Link>
      </div>
    </div>

      )}

    </Container>
  )
}

export default Authors;