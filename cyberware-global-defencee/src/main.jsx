import {React, StrictMode} from 'react';
import App from './App'; // Correct path based on your project structure
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
