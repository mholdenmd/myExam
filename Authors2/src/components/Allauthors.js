import React, {useEffect, useState}from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const Allauthors = ()=> {
    const [allAuthors, setAllauthors] = useState([])

    const [deleteHit, setDeleteHit] = useState(false)
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors/all")
            .then(res =>{
                console.log("************")
                console.log(res)
                console.log("************")
                setAllauthors(res.data.results)
            })
            .catch()
    }, [deleteHit])

    const deleteAuthor= (e, authorid) => {
        axios.delete(`http://localhost:8000/api/author/delete/${authorid}`)
        .then(res =>{
            console.log("sent a delete request")
            console.log(res)
            setDeleteHit(!deleteHit)
        })
        .catch(err=> console.log(err))

    }

        return (
            
            <div>
                <h2>We have quotes by:</h2>
                {
                    allAuthors.map((authorObj, idx)=>{
                        return  <div  key ={idx} style = {{border:"2px solid blue"}}>
                            <h1>Author : {authorObj.author}</h1>
                            <p>Quote: {authorObj.quote}</p>
                            <p>Quoted On: {authorObj.quotedOn}</p>
                            <button className = "btn-dark" onClick= {(e)=> deleteAuthor(e,authorObj._id)}>Delete Author</button>
                            
                            <button className = "btn-dark" ><Link to = {`/author/edit/${authorObj._id}`}>Edit Author</Link></button>
                            

                        </div>
                
                    })
                }
            </div>
            
        );
    };


export default Allauthors;  