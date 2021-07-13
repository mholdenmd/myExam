import React, {useState} from 'react';
import {Link, navigate} from '@reach/router'
import axios from 'axios';

const CreateAuthor = ()=>{

    const [formInfo, setFormInfo] = useState({
        author:"",
        quote:"",
        quotedOn:""
    })
    
    const [error, setError] = useState({})
    
    const changeHandler = (e)=>{
        console.log("transforminggggg!")
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value


        })
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log (" getting ready to submit this form ---->", formInfo)
        axios.post("http://localhost:8000/api/author/create",formInfo)
            .then(res =>{
                console.log("*********  form api submission")
                console.log(res)
                if(res.data.error){
                    console.log (" Try again !  errors were made")
                    setError(res.data.error.errors)
                }
                else{
                navigate("/")
                }
            })
            .catch(err=> console.log("********* ERRORS FROM  API CALLLLLLLLL", err) )

    }

        return (
            <div>
                <Link to = "/">Home</Link>
                <h1>Create New Author:</h1>
                <form onSubmit={submitHandler} className ="col-6 mx-auto">
                    <div>
                        <label htmlFor="">Author</label>
                        <input type = "text" name = "author" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.author? error.author.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Quote</label>
                        <input type = "text" name = "quote" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.quote? error.quote.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Quoted On</label>
                        <input type = "date" name = "quotedOn" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.quotedOn? error.quotedOn.message: ""}</p>
                    </div>
                    <p><input type ="submit" value ="Add Author"/></p>
                    <Link to = "/author/new"><p><input type ="submit" value ="Cancel"/></p></Link>
                </form>
            </div>
        );
    };


export default CreateAuthor;