import React, {Component} from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import House from './components/House'
import NotFound from './components/NotFound'


class App extends Component {
  state = {
    house: null,
    mainColor: '',
    secondaryColor: ''
  }
  //state in react is always an object
  updateHouseInfo = (newState) => {
    this.setState(newState)
  }
  render(){

    return (
      <HashRouter>
        <div className="App">
          <h1>Hogwarts School</h1>
          <Switch>
          <Route exact path='/' component={() => (
            <Home updateHouseInfo={this.updateHouseInfo}/>
          )} />
          <Route path='/about' component={About} />
          <Route path='/house/:name' component={() => (
            <House 
            mainColor={this.state.mainColor}
            secondaryColor={this.state.secondaryColor}
            />
          )} />
          <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
