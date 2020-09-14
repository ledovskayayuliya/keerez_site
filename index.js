import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ServiceProvider} from './context';
ReactDOM.render(
  <ServiceProvider>
   <Router>
     <App/>
   </Router>
  </ServiceProvider>,
document.getElementById('root')
);

serviceWorker.unregister();
