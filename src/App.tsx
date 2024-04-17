import React from 'react';
import { AppRoutes } from './routes';
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
// import { QueryClient } from '@tanstack/react-query';
// import { QueryClientProvider } from '@tanstack/react-query';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import './App.css';


function App() {
  return (
    <Router>
        <AppRoutes />
        <Footer />
    </Router>
  );
}

export default App;
