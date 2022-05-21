import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
  <>
    <ColorModeScript />
    <App />
  </>
);
