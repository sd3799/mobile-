import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/Responsive.css';

const App = () => (
  <>
    <Navbar />
    <main className="min-h-screen pt-16 pb-10">
      <AppRoutes />
    </main>
    <Footer />
  </>
);
export default App;