import { createRoot } from 'react-dom/client';
import { App } from './App';

import 'src/assets/styles/index.css';

import './i18next';

createRoot(document.getElementById('root')!).render(<App />);