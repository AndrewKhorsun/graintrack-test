import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fqrkzq1qu3nyp466.us.auth0.com"
      clientId="SGNuBdx86HFENgh54rGoVYxRAMO2CjQb"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);
