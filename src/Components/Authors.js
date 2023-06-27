import { useEffect, useState } from "react";
import Container from "./Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link } from "react-router-dom";
import '../Style/author.css'

const Authors = () => {

    const [authors, setAuthors] = useState('');

    useEffect(() => {
        axios.get(`${URL}/authors`)
        .then(res => setAuthors(res.data));
      }, []);


    if (!authors) {
        return '';
    }

  return (
    <Container>

    <div className="authors-wrapper">
        {authors.map((author, index) => (
        <div className="author-card">
          <Link key={index} to={`/authors/${author.id}`}>
              <h1>{author.name} {author.surname}</h1>
              <p>From: {author.location}</p>
              <img src={author.img} alt={author.name}/>
          </Link>
        </div>
        ))}
    </div>
    <div className="create-author-button">
    <Link className="button-pink" to={'/authors/create'}>Create new Author</Link>
    </div>

    </Container>
  )
}

export default Authors;