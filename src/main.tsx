import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import AOS from 'aos';

import 'src/assets/styles/index.css';

import './i18next';

import 'aos/dist/aos.css';

AOS.init({ delay: 75, once: true, easing: 'linear' });

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>,
);
