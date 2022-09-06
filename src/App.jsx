import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import {Navigation} from "./components/Navbar/Navbar";
import {Banner} from "./components/Body/Banner";
import Carousels from "./components/Body/Carousel";
import Skills from "./components/Body/Skills";
import PolaroidBase from "./components/Polaroid/PolaroidBase";
import Photography from "./components/Body/Photography";
import Footer from './components/Footer/Footer';
import Portfolio from "./components/Body/Portfolio";
import "./App.css";



function App() {
    return (
    <Router>
        <Routes>
    <Route exact path="/rezoluti0n/" element={<div>  <Navigation/> <Banner/> <Skills/> <PolaroidBase/> <Photography/>  <Carousels/> <Footer/>  </div>}/>
  
    <Route exact path="/rezoluti0n/photography" element={<div>  <Photography/> <Carousels/> <Footer/>  </div>}/>

    <Route exact path="/rezoluti0n/portfolio" element={<Portfolio/>}/>
    </Routes>
    </Router>
    );
}


export default App;