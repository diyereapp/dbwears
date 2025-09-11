import useAuth from "../components/hooks/useAuth";
// import { flat } from 'app/utils/utils';
import { Navigate, useLocation } from "react-router-dom";
const AuthGuard = ({ children }) => {
  const { isAuthenticated, isInitialised } = useAuth();
  const { pathname } = useLocation();

  const storedAccessToken = localStorage.getItem("jwtToken");

  // if (!isInitialised) {
  //   return <div>Loading...</div>;
  // }

  if (!isInitialised) {
    return null; // or a hidden loader
  }

  // Check if either isAuthenticated or storedAccessToken exists
  const isUserAuthenticated = isAuthenticated || storedAccessToken;

  return isUserAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate replace to="/login" state={{ from: pathname }} />
  );
};

export default AuthGuard;
