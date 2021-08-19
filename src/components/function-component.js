import React, {useState} from 'react'
import InputForm from './input-compenent'
import store from '../redux/store';
import APIComponent from './api-displays';

function FunctionExample(){

    //const [name,setName]=useState(props.name);
    //const [message,setMessage]=useState(props.message);


     const doClick=()=> {
        setName("Jacob");
            setMessage("This is a new message!!!");

     }


    const [name,setName] = useState(store.getState().name);
    const [message, setMessage]=useState(store.getState().message);

    const unsubscribe =store.subscribe(()=>{
            setName(store.getState().name)
            setMessage(store.getState().name)


    })
    
    return(
        <>
            <div className="FunctionExample">
                <h1>This is a function Example</h1>
                <p>Hello, {name}. {message}</p>

            </div>

            <button style={{width: '100px'}} onClick={doClick}>Click me!</button>
            <InputForm />
            <APIComponent/>
        </>


    );
}

export default FunctionExample;