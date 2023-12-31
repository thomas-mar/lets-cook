import Header from './components/header/header';
import Home from './pages/home';
import About from './pages/about';
import Recipes from './pages/recipes';
import Meal from './pages/meal';
import Search from './pages/search';
import Footer from './components/footer/footer';
import React, { useEffect, useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



import './App.scss';


const App = () => {
  const [start, setStart] = useState(true);

  

  return (
    <div>
    <div>

          <Header/>
    <div className="main-content">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/recipes" element={<Recipes/>}></Route>
        <Route exact path="/meal" element={<Meal/>}></Route>

        <Route exact path="/search" element={<Search/>}></Route>

      </Routes>
    </Router>
    </div>


    <Footer/>
    </div>
    

    </div>


  );
}

export default App;
