import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/routes';
import { GlobalStyle } from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
