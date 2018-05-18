import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import {view as Index} from '../index/';


export default () => (
    <Router>
        <Route path="/" component={Index}/>
    </Router>
);