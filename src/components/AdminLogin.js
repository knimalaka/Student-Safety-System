import React, {useState} from "react";

function AdminLogin() {
     
    return (
  
      <div className="App">
  
        <Router>
     
          <Switch>
  
          <Route exact path="/components/Home" component={Home} />
          <Route exact path="/components/LoginForm" component={LoginForm} />
          <Route exact path="/components/SignupForm" component={SignupForm} />
          <Route exact path="/components/FrontPage" component={FrontPage} />
  
          </Switch>
              
        </Router>
          
      </div>
  
    );
  }
  
  export default AdminLogin;
  