import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Checkout from "../pages/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import Private from "../Private Route/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/bookings',
        element: <Private> <Bookings></Bookings> </Private>
      }
    ],
  },
]);

export default router;
