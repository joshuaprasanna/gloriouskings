import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
//import NumberSample from './NumberSample'; // 👈 Import your new component
import ChurchStaticHome from './Church/ChurchStaticHome';
import ChurchStaticGallery from './Church/ChurchStaticGallery';
import ChurchStaticMinistries from './Church/ChurchStaticMinistries';
import ChurchStaticEvents from './Church/ChurchStaticEvents';

import ChurchStaticAbout from './Church/ChurchStaticAbout';
import ChurchStaticSermons from './Church/ChurchStaticSermons';
import ChurchStaticContact from './Church/ChurchStaticContact';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/churchstatic" element={<ChurchStaticHome />} />
<Route path="/churchstatic/about" element={<ChurchStaticAbout />} />
<Route path="/churchstatic/gallery" element={<ChurchStaticGallery />} />
<Route path="/churchstatic/ministries" element={<ChurchStaticMinistries />} />
<Route path="/churchstatic/events" element={<ChurchStaticEvents />} />
<Route path="/churchstatic/sermons" element={<ChurchStaticSermons />} />
<Route path="/churchstatic/contact" element={<ChurchStaticContact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
