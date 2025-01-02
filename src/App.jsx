import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthProvider } from './context/AuthContext';
import PublicRoutes from './AuthRouting/PublicRoutes';
import PrivateRoutes from './AuthRouting/PrivateRoutes';
import { UserProvider } from './context/UsersContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';

const router = createBrowserRouter([
  { path: '/login', element: <PublicRoutes element={<Login />} /> },
  { path: '/signup', element: <PublicRoutes element={<Signup />} /> },
  { path: '/', element: <PrivateRoutes element={<Home />} />},
]);


function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
