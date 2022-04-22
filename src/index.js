import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MyStore} from "./ulti/Store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <MyStore>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </MyStore>
    </>

);

