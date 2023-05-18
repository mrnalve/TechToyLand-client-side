import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../components/Error/Error";
import AddToyPage from "../Pages/AddToyPage/AddToyPage";
import AllToys from "../Pages/AllToys/AllToys";


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
          element: <AddToyPage></AddToyPage>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/addTechToy')
        },
    ]
  }
]);

export default router;
