import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// module.exports = function(api){
//   return{
//     plugins: [macros],


//   }}

//   module.exports = {
//     'fontawesome-svg-core': {
//       'license': 'free'
//     }
//   }
