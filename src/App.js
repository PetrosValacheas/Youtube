import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>

        <Header />

        <div className ="app_page">

           <SideBar />
           <RecommendedVideos />

        </div>
       
        {/*Header -> <Header />*/}
        {/*SideBar -> <SideBar />*/}
        {/*RecommededVideos -> < />*/}
    </div>
  );
}

export default App;
