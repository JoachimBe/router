import React from 'react';
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom';
import './App.css';
import Home from './components/Home/index'
import Histoire from './components/History/index'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavLink exact to='/'>Accueil</NavLink>
        <NavLink to='/components/History/index' activeStyle={{color:"red"}}>Histoire</NavLink>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/components/History/index' component={Histoire}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
