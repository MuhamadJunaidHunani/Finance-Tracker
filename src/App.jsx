import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicRoutes from './AuthRouting/PublicRoutes';
import PrivateRoutes from './AuthRouting/PrivateRoutes';
import Home from './Pages/Home';
import OtpVerify from './Pages/OtpVerify';
import Register from './Pages/Register';
import DashBoard from './Pages/DashBoard';
import Login from './Pages/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './Redux/Slices/CurrentUser';


const router = createBrowserRouter([
  { path: '/login', element: <PublicRoutes element={<Login />} /> },
  { path: '/register', element: <PublicRoutes element={<Register />} /> },
  { path: '/verifyotp', element: <PublicRoutes element={<OtpVerify />} /> },
  { path: '/dashboard', element: <PrivateRoutes element={<DashBoard />} /> },
  { path: '/', element: <Home /> },
]);

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCurrentUser())
  },[])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
