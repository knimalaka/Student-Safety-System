import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/App.css';
import './styles/FrontPage.css';
import './styles/UserFrontPage.css';
import './styles/LoginForm.css';
import './styles/Home.css';
import './styles/UserSignupForm.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
