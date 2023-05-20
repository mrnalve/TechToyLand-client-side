import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../components/Error/Error";
import AddToyPage from "../Pages/AddToyPage/AddToyPage";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import ToysUpdate from "../Pages/ToysUpdate/ToysUpdate";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Register></Register>
        },
        {
          path: '/addToy',
          element: <PrivateRoute><AddToyPage></AddToyPage></PrivateRoute>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/addTechToy')
        },
        {
          path: '/myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/toysDetails/:id',
          element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/toysDetails/${params.id}`)
        },
        {
          path: '/toysUpdate/:id', 
          element: <ToysUpdate></ToysUpdate>,
          loader: ({params})=> fetch(`http://localhost:5000/toysDetails/${params.id}`)
        }
    ]
  }
]);

export default router;
