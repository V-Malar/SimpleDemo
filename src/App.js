import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Calculator from './pages/Calculator';
import Login from './components/Forms/Login';
import Todo from './components/Forms/Todo';
import Nopage from './pages/Nopage';
import Fetch from './components/Forms/Fetch';
import Fetchimg from './components/Forms/Fetchimg';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="calculator" element={<Calculator/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="todo" element={<Todo/>}/>
            <Route path="fetch" element={<Fetch/>}/>
            <Route path="fimg" element={<Fetchimg/>}/>
            <Route path = "*" element = {<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
