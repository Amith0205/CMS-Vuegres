import './App.css';
// import { Route, Switch} from "react-router-dom";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './Components/Product/Product';
import Dashboard from './Components/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';
import Ads from './Components/Ads/Ads';
import AddProduct from './Components/Dashboard/AddProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/ads',
        element: <Ads />,
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
      }
     
    ]
  }
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
     </> 
    
  );
}

export default App;
