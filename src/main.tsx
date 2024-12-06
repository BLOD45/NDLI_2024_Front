import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CauchemardCookieBasicCount from './pages/CookieCauchemard/Cookie.tsx'
import Principale from './pages/Principale/Principale.tsx';
import Captcha from './pages/Captcha/Captcha.tsx';
import Credits from './pages/Credits/Credits.tsx';
import ChoixPage from './pages/ChoixCreditOuCookie/ChoixCreditOuCookie.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CauchemardCookie" element={<CauchemardCookieBasicCount />} />
        <Route path="/Principale" element={<Principale />} />
        <Route path="/Captcha" element={<Captcha />} />
        <Route path="/ChoixPage" element={<ChoixPage />} />
        <Route path="/Credits" element={<Credits />} />
        <Route path="/CauchemardCookie" element={<CauchemardCookieBasicCount />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)