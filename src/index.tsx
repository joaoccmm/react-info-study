//React
import React from "react";
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
//Components
import App from "./app.tsx";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
