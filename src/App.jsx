import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
// import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PublicRoutes from './AuthRouting/PublicRoutes';
import PrivateRoutes from './AuthRouting/PrivateRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';

const router = createBrowserRouter([
  // { path: '/login', element: <PublicRoutes element={<Login />} /> },
  { path: '/signup', element: <PublicRoutes element={<Signup />} /> },
  { path: '/', element: <PrivateRoutes element={<Home />} />},
]);


function App() {
  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer />
    </>
  );
}

export default App;
