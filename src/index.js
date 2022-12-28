import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CartProvider } from './Context/CartContext';
import { DarkModeProvider } from './Context/DarkModeContext';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkModeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DarkModeProvider>
);