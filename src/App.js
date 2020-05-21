import React from "react";
import Card from "./components/Card";
import Main from "./components/Main";
import Cursor from "./components/Cursor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className='App'>
        <Cursor id='curse' />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/components/Card' exact id='all-card' component={Card} />
        </Switch>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
          <defs>
            <filter id='squiggly-0'>
              <feTurbulence
                id='turbulence'
                baseFrequency='0.02'
                numOctaves='3'
                result='noise'
                seed='0'
              />
              <feDisplacementMap
                id='displacement'
                in='SourceGraphic'
                in2='noise'
                scale='6'
              />
            </filter>
            <filter id='squiggly-1'>
              <feTurbulence
                id='turbulence'
                baseFrequency='0.02'
                numOctaves='3'
                result='noise'
                seed='1'
              />
              <feDisplacementMap in='SourceGraphic' in2='noise' scale='8' />
            </filter>

            <filter id='squiggly-2'>
              <feTurbulence
                id='turbulence'
                baseFrequency='0.02'
                numOctaves='3'
                result='noise'
                seed='2'
              />
              <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
            </filter>
            <filter id='squiggly-3'>
              <feTurbulence
                id='turbulence'
                baseFrequency='0.02'
                numOctaves='3'
                result='noise'
                seed='3'
              />
              <feDisplacementMap in='SourceGraphic' in2='noise' scale='8' />
            </filter>

            <filter id='squiggly-4'>
              <feTurbulence
                id='turbulence'
                baseFrequency='0.02'
                numOctaves='3'
                result='noise'
                seed='4'
              />
              <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
            </filter>
          </defs>
        </svg>
      </div>
    </Router>
  );
}

export default App;
