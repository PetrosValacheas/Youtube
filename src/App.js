import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <Header />
            <h1>Search page </h1>
          </Route>
          <Route path="/">
            <Header />
            <div className ="app_page">
               <SideBar />
               <RecommendedVideos />
            </div>*/
          </Route>
        </Switch>
      </Router> 
  
    </div>
  );
}

export default App;
