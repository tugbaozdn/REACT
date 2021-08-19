import React, {useState} from 'react';
//import server from './remote/axios-instance';
import {titleSearch} from './remote/openmdb-api';
import store from '../redux/store';

function APIDisplay(){
    const [message,setMessage]=useState(store.getState().message);

    let response = titleSearch(message);

        //server.get(`/?t=${message}`);
                
    return(
        <>
        <h1>OMDB API Response:</h1>

       <p>{response}</p> 

        </>
    )

}

export default APIDisplay;