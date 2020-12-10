import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Regiser from './pages/Register'
import Introduce from './pages/Introduce'
import List from './pages/List'
import UpdateLog from './pages/UpdateLog'
import writePage from './pages/writePage'
import EasterGaram from './pages/Eastergaram';
import Hire from './pages/Hire'
import HireFront from './pages/HireFront'
import HireBack from './pages/HireBack'
import HireBot from './pages/HireBot'
import HireIllust from './pages/HireIlust'


function App() {
  return (
    <>  
      <Route component = {Introduce} path = '/' exact />
      <Route component = {Login} path = '/login'/>
      <Route component = {Regiser} path = '/register' />
      <Route component = {List} path = '/List' />
      <Route component = {UpdateLog} path = '/@username:postId' />
      <Route component = {writePage} path = '/write'/>
      <Route component = {Hire} path = '/hire'/>
      <Route component = {HireFront} path = '/FrontEnd'/>
      <Route component = {HireBack} path = '/BackEnd'/>
      <Route component = {HireBot} path = '/bot'/>
      <Route component = {HireIllust} path = '/illust'/>
      <Route component = {EasterGaram} path = '/abc1203928392898993310dhfuhfauafhua123932919dhj1h2hj32j'/>
      
    </>
  );
}

export default App;