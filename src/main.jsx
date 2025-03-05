import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SEO from './components/SEO.jsx';
import Header from './components/header.jsx';
import Instagram from './components/Instagram.jsx';
import Facebook from './components/Facebook.jsx';
import Google from './components/Google.jsx';
import Website from './components/Website.jsx';
import Contact from './components/Contact.jsx';
import Termcondition from './components/Termcondition.jsx';
import Footer from './components/Footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(

   
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/seo' element={<SEO />} />
        <Route path='/facebook-ads' element={<Facebook />} />
        <Route path='/instagram-ads' element={<Instagram />} />
        <Route path='/google-ads' element={<Google />} />
        <Route path='/website-designing' element={<Website />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms-conditions' element={<Termcondition />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
)
