import React, { useState } from 'react';
import App from '../App';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ClassExample } from './class-component';
import FunctionExample from './function-component';

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
                    <Link className="NavbarLink" to="/classExample">Class</Link>
                     <Link className="NavbarLink" to="/functionExample">Function</Link>
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
                    
                </Switch>
            </div>
        </Router>


        </>
    );
}

export default NavBar;