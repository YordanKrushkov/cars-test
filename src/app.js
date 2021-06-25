import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ VehicleList } />
                <Route path='/:id' component={ VehicleDetails } />
            </Switch>
        </Router>
    );
}

export default App;