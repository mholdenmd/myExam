import React, {useState, useEffect}from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios'



const EditAuthor = (props)=> {
    const [formInfo, setFormInfo] = useState({
        author:"",
        quote:"",
        quotedOn:""
    })

    useEffect(()=> {
        console.log(props.authorid)
        axios.get(`http://localhost:8000/api/author/${props.authorid}`)
            .then(res =>{
                console.log(res.data)
                setFormInfo(res.data.results)

            })
            .catch(err => console.log("**********", err))
    },[props.authorid])


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
        axios.put(`http://localhost:8000/api/author/update/${props.authorid}`,formInfo)
            .then(res =>{
                console.log("*********  form api submission")
                console.log(res)
                navigate("/")
        
            })
            .catch(err=> console.log("********* ERRORS FROM  API CALLLLLLLLL", err) )

    }

    console.log(formInfo)
        return (
            <div>
                <Link to = "/">Home</Link>
            <h1>Edit Author: {props.authorid}</h1>
            <form onSubmit={submitHandler}>
                    <p>Author : <input type = "text" name = "author" id =""onChange={changeHandler} value = {formInfo.author}/></p>
                    <p>Quote : <input type = "text" name = "quote" id =""onChange={changeHandler} value = {formInfo.quote}/></p>
                    <p>Quoted On : <input type = "date" name = "quotedOn" id =""onChange={changeHandler} value = {formInfo.quotedOn}/></p>
                    <p><input type ="submit" value ="Edit Author"/></p>
                    <Link to = "/author/new"><p><input type ="submit" value ="Cancel"/></p></Link>
                </form>
            </div>
        );
    }


export default EditAuthor;