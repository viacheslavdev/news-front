import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './screens/HomePage'
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/burgermenu" element={<BurgerMenu/>}/>
        </Routes>
    </Router>
  );
}

export default App;
