import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./page/home"
import Err from "./page/Err"
import Singlecoctai from "./page/Singlecoctai"
import About from "./page/about"


import Nav from './component/nav'
function App() {
  return (
    <Router >
        <Nav />
      <Routes>
      <Route exact path= '/' element = {<Home/>}>
            
          </Route>

          <Route  path= '/about' element = { <About/>}>
           
          </Route>

          <Route  path= '*' element = { <Err/>}>
            
          </Route>

          <Route  path= '/singlecoctai/:id' element = {<Singlecoctai/>}>
            
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
