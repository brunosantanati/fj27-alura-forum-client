import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import TopicoPage from './pages/TopicoPage';
import LoginPage from './pages/LoginPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
