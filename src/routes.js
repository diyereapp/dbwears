
import { Navigate } from "react-router-dom";
import AdminRoute from "./components/admindashboard/AdminRoute";
import sessionRoutes from "./components/sessions/SessionRoutes";
import SalesRoute from "./components/salesdashboard/SalesRoute";
import ManagerRoute from "./components/managerdashboard/ManagerRoute";
import AuthGuard from "./auth/AuthGuard";
import Home from "./pages/Home";
import GoogleAuthHandler from "./GoogleAuthHandler";
import Selling from "./pages/Selling";


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
    path: "/selling",
    element: <Selling />,
  },


   

];

export default routes;
