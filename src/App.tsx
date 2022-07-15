import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import New from './pages/new'
import EditIndex from './pages/edit'
import EditID from './pages/edit/:id'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/new" element={ <New /> } />
        <Route path="/edit" element={ <EditIndex /> } />
        <Route path="/edit/:id" element={ <EditID /> } />
      </Routes>
    </React.Fragment>
  );
}

export default App;
