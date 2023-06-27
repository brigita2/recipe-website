import { useState } from "react";
import Container from "./Container/Container";
import { URL } from "../config";
import axios from "axios";
import '../Style/createAuthor.css';

const CreateAuthor = () => {
    const[newAuthor, setNewAuthor] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');
    const [education, setEducation] = useState('');
    const [expertise, setExpertise] = useState('');
    const [experience, setExperience] = useState('');
    const [img, setImgUrl] = useState('');
    

    const nameHandler = (e) => setName(e.target.value);
    const surnameHandler = (e) => setSurname(e.target.value);
    const businessHandler = (e) => setBusiness(e.target.value);
    const locationHandler = (e) => setLocation(e.target.value);
    const educationHandler = (e) => setEducation(e.target.value);
    const expertiseHandler = (e) => setExpertise(e.target.value);
    const experienceHandler = (e) => setExperience(e.target.value);
    const imgUrlHandler = (e) => setImgUrl(e.target.value);

    const newAuthorHandler = (event) => {
        event.preventDefault();

        axios.post(`${URL}/authors`, {
            name: name,
            surname: surname,
            business: business,
            location: location,
            education: education,
            expertise: expertise,
            experience: experience,
            img: img
        }).then(res => setNewAuthor(res.data))
    }
console.log(newAuthor)

  return (
    <Container>
        <div className="create-author-page"> 
        <div className="form-wrapper">
            <form onSubmit={newAuthorHandler} action="next.php" method="post" enctype="multipart/form-data">
                <h1>Create new Author</h1>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={nameHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" name="surname" value={surname} onChange={surnameHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="business">Business:</label>
                    <input type="text" id="business" name="business" value={business} onChange={businessHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={locationHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="education">Education:</label>
                    <input type="text" id="education" name="education" value={education} onChange={educationHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="expertise">Expertise:</label>
                    <input type="text" id="expertise" name="expertise" value={expertise} onChange={expertiseHandler}></input>
                </div>

                <div className="form-control">
                    <label htmlFor="experience">Experience:</label>
                    <textarea id="experience" name="experience" value={experience} onChange={experienceHandler}></textarea>
                </div>

                <div className="form-control">
                    <label htmlFor="image">Add a picture:</label>
                    <input type="url" id="image" name="image" value={img} onChange={imgUrlHandler}></input>
                </div>

                <input className="button-pink" type="submit" value="Create new Author"></input>
            </form>
        </div>

        <div className="new-author-wrapper">
            {newAuthor && (
                <>
                <h2>New Author created:</h2>
                <h3>{newAuthor.name} {newAuthor.surname}</h3>
                <p>Business: {newAuthor.business}</p>
                <p>Location: {newAuthor.location}</p>
                <p>Education: {newAuthor.education}</p>
                <p>Expertise: {newAuthor.expertise}</p>
                <p>Experience: {newAuthor.experience}</p>
                <img src={newAuthor.img} alt={newAuthor.name}/>

                </>
            )}
        </div>
        </div>
    </Container>
  )
}

export default CreateAuthor;