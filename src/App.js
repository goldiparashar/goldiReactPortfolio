// import './App.css';
import React from 'react';
import styled,{ThemeProvider} from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import {Routes,Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sticky from 'react-stickynode';
function App() {
  return (
    <>
      <Sticky enabled={true} innerZ={2} top={0} innerClass='sticky-header'>
        <Header></Header>
      </Sticky>
      <Routes>
        <Route path='/goldiReactPortfolio/' Component={Home}></Route>
        <Route exact path='/goldiReactPortfolio/Home' Component={Home}></Route>
        <Route exact path='/goldiReactPortfolio/Portfolio' Component={Portfolio}></Route>
        <Route exact path='/goldiReactPortfolio/Process' Component={Process}></Route>
        <Route exact path='/goldiReactPortfolio/Contact' Component={Contact}></Route>
        </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
