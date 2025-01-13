import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PublicRoutes from './AuthRouting/PublicRoutes';
import PrivateRoutes from './AuthRouting/PrivateRoutes';
import Home from './Pages/Home';
import { ToastProvider } from './Components/UI/CustomToast';

const router = createBrowserRouter([
  // { path: '/login', element: <PublicRoutes element={<Login />} /> },
  { path: '/signup', element: <PublicRoutes element={<Signup />} /> },
  { path: '/', element: <PrivateRoutes element={<Home />} /> },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastProvider />
    </>
  );
}

export default App;
