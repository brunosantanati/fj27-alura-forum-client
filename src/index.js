import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import TopicoPage from './pages/TopicoPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TopicoPage />, document.getElementById('root'));
registerServiceWorker();
