import { useState} from 'react';
import {sendFormData} from '../api/MovieAPI'

export function Form() {
    const [Form,setForm]=useState({
        name:'',
        description:'',
        releaseDate:'',
        duration:'',
        rating:''

    })
    function saveForm(e){
        e.preventDefault();
        console.log("Form Data",Form)

        Form.duration=Number(Form.duration)
        Form.rating=Number(Form.rating)
        
        sendFormData(Form).then((response)=>{
            console.log("response",response);
        })
    }

    function updateMovieForm(e){
        console.log('Event',e)

        const key = e.target.name
        const value =e.target.value
        setForm({
            ...Form, //spread Operator => ...
            [key] : value
        })
        console.log('Form',Form)
    }


    return (
        <div>
      <form onSubmit={saveForm}>
          <input type="text" name="name" onChange={updateMovieForm} placeholder="Movie Name"/>
          <input type="text" name="description"  onChange={updateMovieForm} placeholder="Description"/>
          <input type="date" name="releaseDate" onChange={updateMovieForm}  />
          <input type="number" name="duration" onChange={updateMovieForm} placeholder="Duration" />
          <input type="number" name="rating"  onChange={updateMovieForm} placeholder="Rating"/>
          <input type="submit" />
      </form>
      <h1>Name {Form.name}</h1>
      <h1>Description {Form.description}</h1>
      <h1>Release Date {Form.releaseDate}</h1>
      <h1>Duration {Form.duration}</h1>
      <h1>Rating {Form.rating}</h1>
      </div>
    )
  }