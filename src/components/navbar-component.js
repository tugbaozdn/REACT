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

    const [name, setName] =useState("Tugba");
    const [message, setMessage] = useState("This is the default message.");

    const propsObject={
        name:name,
        message:message,
        updatemessage: setMessage
    
    }

    // const propsObject={
    //     ...propsObject,
    //     message: "my new message..."
    // }

    console.log('navbar:',propsObject);

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
                   <ClassExample {...propsObject} />
                    </Route>
                  
                    <Route exact path="/functionExample">   
                        {/*<FunctionExample message="This is our prop message." name="Kyle"/>*/}
                        <FunctionExample {...propsObject}/>
                    </Route>

                    <Route exact path="/Tweet">
                        <div className="app"> 
                        <Tweet name="Tugba Ozden" message1="This is a random tweet" numOfLikes='1' /> 
                        <Tweet name="Anne Gilbert" message1="I like programming." numOfLikes='100'/> 
                        <Tweet name="Matt Ozden" message1="Reading is very special activity." numOfLikes='80'/>
                        
                        </div>  
                                 
                    </Route>
                    
                </Switch>
            </div>
        </Router>


        </>
    );
}

export default NavBar;