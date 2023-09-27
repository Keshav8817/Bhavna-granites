import Hello from "./Hello.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Products from './Components/Products.js';
import Disp from './Components/Disp.js';
import 'react-sticky-header/styles.css';
import reactRouterDom from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (

    <div class="App">
      
      <Hello />
      <Products />
      <Disp />

    
        

    </div>
    
  );
}

export default App;
