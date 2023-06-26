import { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import axios from "axios";
import { URL } from "../config";
import { Link } from "react-router-dom";
import '.././Style/aboutUs.css';

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState('');

useEffect(() => {
  axios.get(`${URL}/aboutUs`)
  .then(res => setAboutUs(res.data));
}, []);


if (!aboutUs) {
  return '';
}
  return (
    <Container>
      <div className="page-wrapper">
        <h1 className="page-title">About Simply Lemons Recipes</h1>

        <div className="nav-wrapper">
          <span><a className="button-pink" href='#who-we-are'>Who We Are</a></span>
          <span><a className="button-pink" href='#our-history'>Our History</a></span>
          <span><a className="button-pink" href='#recipe-testing'>Recipe Development & Testing</a></span>
          <span><a className="button-pink" href='#contact-us'>Contact Us</a></span>
          <span><a className="button-pink" href='#authors'>Our Authors</a></span>
        </div>

      {aboutUs.map(data => (
        <div key={data.id} className="content-wrapper">
          <h2 id='who-we-are' className="title">Who We Are</h2>
          <p>{data.whoWeAre.firstParagraph}</p>
          <p>{data.whoWeAre.secondParagraph}</p>

          <h2 id='our-history' className="title">Our History</h2>
          <p>{data.ourHistory}</p>

          <h2 id='recipe-testing' className="title">Recipe Development & Testing</h2>
          <p>{data.recipeDevelopment}</p>

          <h2 id='authors' className="title">Our Authors</h2>
          <Link className="button-pink" to='/authors'>To our Authors List</Link>

          <h2 id='contact-us' className="title">Contact Us</h2>
          <p>{data.contactUs}</p>
          <a href="mailto:contact@simplyrlemonecipes.com">{data.email}</a>
        </div>

))}
        <Link className="button-pink" to={'/'}>Go to Home Page</Link>
      </div>
    </Container>
  )
}

export default AboutUs;