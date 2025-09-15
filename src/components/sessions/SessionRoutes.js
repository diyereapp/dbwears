import JwtRegister from "./JwtRegister";
import JwtLogin from "./JwtLogin";
import MyAccount from "../../pages/MyAccount";

const sessionRoutes = [
  // { path: "/signup", element: <JwtRegister /> },
  { path: "/my-account", element: <MyAccount /> },

  { path: "/register", element: <JwtRegister /> },

  // { path: "/forgot-password", element: <ForgotPassword /> },
  // { path: "/logins", element: <Login2 /> },
  // { path: "/register", element: <Register /> },
  // { path: "/404", element: <NotFound /> },
];

export default sessionRoutes;
