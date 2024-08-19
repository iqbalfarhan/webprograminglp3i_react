import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import WarnaProvider from './providers/WarnaProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WarnaProvider>
      <App />
    </WarnaProvider>
  </StrictMode>,
);
