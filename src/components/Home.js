import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import AttendanceReport from "./AttendanceReport";
import EditDetails from "./EditDetails"; 
import FrontPage from "./FrontPage";
import {useHistory} from "react-router-dom";


function Home(){

let history = useHistory();

    return(

        <Router>
              
        <div className="Home">

        <div className="Navbar3">
        <NavLink exact activeClassName="active" to="/components/Home">Home</NavLink>
        </div>

        <div className="Navbar1">
        <NavLink exact activeClassName="active" to="/components/AttendanceReport">AttendaceReport</NavLink>
        </div>

        <div className="Navbar2">
        <NavLink exact activeClassName="active" to="/components/EditDetails">EditDetails</NavLink>
        </div>



        <button onClick= {() => { history.push("./FrontPage"); }}>SignOut</button>

        <hr />
        
        <Switch>
          <Route path="/components/AttendanceReport" component={AttendanceReport} />
          <Route path="/components/EditDetails" component={EditDetails} />
          <Route path="/components/Frontpage" component={FrontPage} />


        </Switch>
        </div>
    
  </Router>
  

       
    )
}

export default Home;

