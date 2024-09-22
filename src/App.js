import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SurfboardsPage from './components/pages/SurfboardsPage';
import SurfboardDetail from './components/pages/SurfboardDetail';
import FinsPage from './components/pages/FinsPage';
import AccessoriesPage from './components/pages/AccessoriesPage';
import ApparelPage from './components/pages/ApparelPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

import PrivateRoute from './utils/PrivateRoute';
import Layout from './components/layout/Layout';  // Import the Layout component
import { AuthProvider } from './context/authController';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />  {/* Home Page */}
            <Route path="surfboards" element={<SurfboardsPage />} />
            {/* Updated Route to use SKU instead of ID */}
            <Route path="surfboards/:sku" element={<SurfboardDetail />} />  {/* Surfboard Details using SKU */}
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          {/* Private Routes within the Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="accessories" element={<PrivateRoute><AccessoriesPage /></PrivateRoute>} />
            <Route path="apparel" element={<PrivateRoute><ApparelPage /></PrivateRoute>} />
            <Route path="fins" element={<PrivateRoute><FinsPage /></PrivateRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
