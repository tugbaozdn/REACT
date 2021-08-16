import React, {useState} from 'react'
function FunctionExample(props){

    const [name,setName]=useState(props.name);
    const [message,setMessage]=useState(props.message);


    const doClick=()=> {
        setName("Jacob");
            setMessage("This is a new message!!!");

    }
    
    return(
        <>
            <div className="FunctionExample">
                <h1>This is a function Example</h1>
                <p>Hello, {name}. {message}</p>

            </div>

            <button style={{width: '100px'}} onClick={doClick}>Click me!</button>

        </>


    );
}

export default FunctionExample;