import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"
import List from "./pages/List"



function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link> 
      <Link to="/counter"> Counter</Link> 
      <Link to="/input"> Input</Link> 
      <Link to="/input2"> Input2</Link> 
      <Link to="/list"> List</Link> 





      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/input" element={<Input />}/>
        <Route path="/input2" element={<Input2 />}/>
        <Route path="/list" element={<List />}/>






      </Routes>
    </div>
  );
  
}

export default App;

//Link태그는 html 의 a 태그와 같음 
//브라우저 path가 바뀔때마다 어떤 컴포넌트를 매핑해서 보여줄지 정의해주는 태그가 Routes임 
