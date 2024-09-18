// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SurfboardsPage from './components/pages/SurfboardsPage';
import FinsPage from './components/pages/FinsPage';
import AccessoriesPage from './components/pages/AccessoriesPage';
import ApparelPage from './components/pages/ApparelPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

import PrivateRoute from './utils/PrivateRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/authController';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/surfboards" element={<SurfboardsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Private Routes */}
          <Route path="/accessories" element={<PrivateRoute><AccessoriesPage /></PrivateRoute>} />
          <Route path="/apparel" element={<PrivateRoute><ApparelPage /></PrivateRoute>} />
          <Route path="/fins" element={<PrivateRoute><FinsPage /></PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
