import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// const cool = require('cool-ascii-faces');
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 3000;
// express()
//     .use(express.static(path.join(__dirname, 'public')))
//     .set('views', path.join(__dirname, 'views'))
//     .set('view engine', 'ejs')
//     .get('/', (req, res) => res.render('pages/index'))
//     .get('/cool', (req, res) => res.send(cool()))
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);