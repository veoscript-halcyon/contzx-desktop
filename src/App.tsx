import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </React.Fragment>
  );
}

export default App;
