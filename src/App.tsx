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
  // const queryClient = new QueryClient();
  return (
    <Router>
      {/* <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
/> */}
        <AppRoutes />
        <Footer />
      {/* </QueryClientProvider> */}
    </Router>
  );
}

export default App;