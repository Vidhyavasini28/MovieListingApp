import axios from 'axios'
import { json } from 'body-parser'
const baseUrl="http://localhost:3000/movies"

export const getMovies = async()=>{
    console.log("This is an api")
    try{
        const  response = await axios.get(baseUrl)
        console.log(response.data)
        return response.data
    }
    catch(e){
        console.log(e);
    }
    
}

export const getMoviesbyId = async(id)=>{
    console.log("This is an api")
    try{
        const  response = await axios.get(`${baseUrl}/${id}`)
        console.log(response.data)
    }
    catch(e){
        console.log(e);
    }
    
}

export const sendFormData = async(data)=>{
    console.log("Data",data)
    console.log("This is an api")
    try{
        const  response = await axios.post(baseUrl,data);
        console.log(response.data)
        return response.data
    }
    catch(e){
        console.log(e);
    }
    
}