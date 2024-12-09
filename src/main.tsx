import { createRoot } from 'react-dom/client';
import { App } from './App';

import 'src/assets/styles/index.css';

import './i18next';

import 'aos/dist/aos.css';

createRoot(document.getElementById('root')!).render(<App />);
