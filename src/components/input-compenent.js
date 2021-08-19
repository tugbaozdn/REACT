import React, {useState} from 'react';
import store from '../redux/store';

function InputForm(){
    const [message, setMessage] = useState(store.getState().message);

    const handleChange =(event) =>{
        setMessage(event.target.value);
        //store.dispatch({type:'changeMessage',payload:message})
    }

    const handleSubmit =(event) =>{
       event.preventDefault();
       store.dispatch({type:'changeMessage',payload:message})
    }


    return(

        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Change the message:
                    <input type="text" value={message} onChange={handleChange}/>

                </label>
                    <input type="submit" value="Submit"/>
              </form>
        </>

    )
}

export default InputForm;