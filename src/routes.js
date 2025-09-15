
import { Navigate } from "react-router-dom";
import AdminRoute from "./components/admindashboard/AdminRoute";
import sessionRoutes from "./components/sessions/SessionRoutes";
import SalesRoute from "./components/salesdashboard/SalesRoute";
import ManagerRoute from "./components/managerdashboard/ManagerRoute";
import AuthGuard from "./auth/AuthGuard";
import Home from "./pages/Home";
import GoogleAuthHandler from "./GoogleAuthHandler";
import AllProduct from "./pages/AllProduct";
import Single from "./pages/Single";
import ShopCategory from "./pages/ShopCategory";
import MyAccount from "./pages/MyAccount";
import MyDesign from "./pages/MyDesign";
import MyOrder from "./pages/MyOrder";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";

const routes = [
  { path: "/oauth-callback", element: <GoogleAuthHandler /> },

  {
    children: [...AdminRoute, ...SalesRoute, ...ManagerRoute],
  },
  ...sessionRoutes,
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:id",
    element: <AllProduct />,
  },
    {
    path: "/single-product/:id",
    element: <Single />,
  },
    {
      path: "/shop-category/:id",
    element: <ShopCategory />,
  },
      {
      path: "/collections",
    element: <Collection />,
  },
      {
    path: "/my-account",
    element: <MyAccount />,
  },
        {
    path: "/account-design",
    element: <MyDesign />,
  },
          {
    path: "/account-order",
    element: <MyOrder />,
  },
     {
    path: "/cart",
    element: <Cart />,
  },
  // { path: "/", element: <Navigate to="vision" /> },
  {
    path: "/login", // Catch-all route to handle unmatched paths
    element: <Navigate to="/login" replace />,
  },
];

export default routes;
