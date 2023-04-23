import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from "./Root";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginAuthentication/Login";


const router = createBrowserRouter([
  {
      path: "/",
      element: <RootLayout />,
      //errorElement: <Error />,
      children: [
        {
          path: "/login",
          element: <Login/>,
      },
      {
          path: "/",
          element: <Home/>,
      },
      {
          path: "/dashboard",
          element: <Dashboard/>,
      },
      {
          //path: "/car/add",
          //element: <CarAdd/>,
      },
          
      ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
