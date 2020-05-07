import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <header>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
           </ul>
         </header>
         <Route exact path="/">
           Home 
         </Route>
         <Route path="/about">
           About 
         </Route>
         <Route path="/contact">
           Contact 
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
