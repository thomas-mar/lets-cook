import Header from './components/header/header';
import Home from './pages/home';
import About from './pages/about';
import Recipes from './pages/recipes';
import Search from './pages/search';
import Footer from './components/footer/footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



import './App.scss';


const App = () => {



  return (
    <div>

    <Header/>
    <div class="main-content">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/recipes" element={<Recipes/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>

      </Routes>
    </Router>
    </div>


    <Footer/>

    </div>


  );
}

export default App;
