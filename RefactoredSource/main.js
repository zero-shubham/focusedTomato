import './styles/styles.scss';
import './styles/base/normalize.css';

import React from 'react';

import ReactDOM from 'react-dom';

import Loading from './Components/Loading';
ReactDOM.render(<Loading/>, document.getElementById('root'));

import('./lazyMain');

