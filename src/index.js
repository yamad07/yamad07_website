import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {
    TopBar,
    Welcome,
    History,
    Container,
} from './components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TopBar />, document.getElementById('top_bar'));
ReactDOM.render(<Welcome />, document.getElementById('welcome'));
ReactDOM.render(<History />, document.getElementById('history'));

registerServiceWorker();
