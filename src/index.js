import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
    <App/>
)   

reportWebVitals();;