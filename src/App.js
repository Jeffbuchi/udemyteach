import React from 'react';

//import logo from './logo.svg';

import './css/proj.css';
import './css/App.css';


import Feed from './visuals/feed';
import HomePage from './visuals/home';
import YotubePage from'./visuals/videopage';
import ContentPage from './visuals/content';
import WelcomePage from './visuals/welcome';
import Images from './visuals/imgur';
import {Route,NavLink,HashRouter} from "react-router-dom";
function App() {
  return (
    <div className="App flex">
      < WelcomePage />
      <HashRouter>
      < Feed />
      <div className = "app-content">
        <Route exact path = "/" component ={HomePage} />
        <Route path = "/content/:contentid" component={ContentPage}/>
        <Route path = "/imgur" component = {Images}/>
        <Route path = "/videopage" component = {YotubePage}/>
      </div>
      </HashRouter>
     
    </div>
    
  );
}

export default App;


