import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import AdminTest from './pages/AdminTest/AdminTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Test/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/admintest' element={<AdminTest/>}/>
      </Routes>
    </Router>
  );
}

export default App;

function Test(){
  return(
    <h1>ERRORr</h1>
  )
}
