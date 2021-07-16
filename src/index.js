import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/App.css';
import './styles/FrontPage.css';
import './styles/UserFrontPage.css';
import './styles/LoginForm.css';
import './styles/NavBar.css';
import './styles/UserSignupForm.css';
import './styles/AdminSignupForm.css';
import './styles/Home.css';
import './styles/AttendanceReport.css';
import './styles/EditDetails.css';
import './styles/Settings.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
