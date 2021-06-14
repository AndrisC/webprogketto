import React from 'react';
import './style/App.css';
import Nav from './components/Nav';
import Search from "./view/Search";
import Heroes from "./view/Heroes";
import Home from "./view/Home";
import newHero from "./view/newHero";
import heroDetail from './components/heroDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/search" exact component={Search}/>
                    <Route path="/heroes" exact component={Heroes}/>
                    <Route path="/newHero" exact component={newHero}/>
                    <Route path="/hero/:id" component={heroDetail}/>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
