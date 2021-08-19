
import React, { useState } from 'react';
import App from '../App';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ClassExample } from './class-component';
import FunctionExample from './function-component';
import Tweet from './Tweet';

function NavBar(){

    // const propsObject ={
    //     name:"Doug",
    //     message: "This is a our prop message.",
    //     //updateMessage:setMessage
    // }

    // const [name, setName] =useState("Tugba");
    // const [message, setMessage] = useState("This is the default message.");
    // const [isRed, setRed]=useState(false);
    // const [count,setCount]=useState(0);



    // const increment =()=>{
    //     setCount(count+1);
    //     setRed(!isRed);
    // };


    const[users, setUsers] = useState([
        {name:'Tugba', message1:'Hello there'},
        {name:'Anne', message1: 'I am Anne'},
        {name: 'Zeynep', message1: 'I like reading.'}


    ]);

    // const propsObject={
    //     name:name,
    //     message:message,
    //     updateMessage: setMessage
    
    // }



    // const propsObject={
    //     ...propsObject,
    //     message: "my new message..."
    // }

   // console.log('navbar:',propsObject);

    return(
        <>

            <Router>
                <div className="Navbar">
                    <Link className="NavbarLink" to="/">App</Link>
                    <Link className="NavbarLink" to="/classExample"> Class </Link>
                     <Link className="NavbarLink" to="/functionExample"> Function </Link>
                     <Link className="NavbarLink" to="/Tweet"> Tweet </Link>

                 </div>

            <div className="Content">
                <Switch>
                    <Route exact path="/" >
                        <App />
                    </Route>
                    <Route exact path="/classExample">
                   {/*<ClassExample stuff={propsObject} />*/}
                   <ClassExample />
                    </Route>
                  
                    <Route exact path="/functionExample">   
                        {/*<FunctionExample message="This is our prop message." name="Kyle"/>*/}
                        <FunctionExample />
                    </Route>

                    <Route exact path="/Tweet">
                        <div className="app"> 
                        {/*<Tweet name="Tugba Ozden" message1="This is a random tweet" numOfLikes='1' /> 
                        <Tweet name="Anne Gilbert" message1="I like programming." numOfLikes='100'/> 
                        <Tweet name="Matt Ozden" message1="Reading is very special activity." numOfLikes='80'/>
                        <button onClick={increment}>Increment</button>
                        <p className={isRed ? 'red' : ""}>Change my color</p>
    <h4>{count}</h4>*/}

                            {users.map(user=>(
                                  <Tweet name={user.name} message1={user.message1}/>  
                            ))}                        
                        
                        </div>                                   
                    </Route>                    
                    
                </Switch>
            </div>
        </Router>


        </>
    );
}

export default NavBar;