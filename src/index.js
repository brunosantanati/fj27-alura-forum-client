import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { 
    BrowserRouter as Router, 
    Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import TopicoPage from './pages/TopicoPage';
import LoginPage from './pages/LoginPage';

import registerServiceWorker from './registerServiceWorker';

const AluraForum = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/topics" component={TopicoPage} />
            <Route path="/login" component={LoginPage} />
        </div>
    </Router>
);

ReactDOM.render(<AluraForum />, document.getElementById('root'));
registerServiceWorker();
