import React from 'react';
import App from '../App';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ClassExample } from './class-component';
import FunctionExample from './function-component';

function NavBar(){

    const propsObject ={
        name:"Doug",
        message: "This is a our prop message."
    }

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
                    <ClassExample stuff={propsObject} />
                    </Route>
                    <Route exact path="/functionExample">
                        
                        <FunctionExample message="This is our prop message." name="Kyle"/>
                    </Route>
                    
                </Switch>
            </div>
        </Router>


        </>
    );
}

export default NavBar;