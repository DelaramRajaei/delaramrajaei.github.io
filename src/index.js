import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './routes/Home';
import CV from './routes/CV';
import Projects from './routes/Projects';
import Certificates from './routes/Certificates';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        {/* <Route path="publication" element={<Publication />} /> */}
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        {/* <Route path="gallery" element={<Gallery />} /> */}
      </Route>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();