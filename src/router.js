import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ACT from './components/ACT/ACT';
import SAT from './components/SAT/SAT';

export default (
    <Switch>
        <Route path='/ACT' component={ACT} />
        <Route path='/SAT' component={SAT} />
        <Route path='/' component={Home} exact />
    </Switch>
)