import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redax/reduxStore";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));


    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
            <App/>
                </Provider>
                </BrowserRouter>
        </React.StrictMode>
    );



reportWebVitals();
