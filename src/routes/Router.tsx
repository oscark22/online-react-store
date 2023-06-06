import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreateAccount from "../pages/CreateAccount";
import LoginAccount from "../pages/LoginAccount copy";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductView from "../pages/ProductDetails";

interface ProtectedRoute {
  isLoggedIn: boolean;
  redirectPath?: string;
  children?: JSX.Element;
}

const Router = () => {
  const auth = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setIsLoggedIn(auth.loggedIn);
  }, [auth.loggedIn]);

  console.log(auth.loggedIn);

  const ProtectedRoute = ({
    isLoggedIn,
    redirectPath = "/signIn",
    children,
  }: ProtectedRoute) => {
    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />;
    } else {
      return children ? children : <Outlet />;
    }
  };

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isLoggedIn={!isLoggedIn} redirectPath="/dashboard" />
        }
      >
        <Route path="/signUp" element={<CreateAccount />} />
        <Route path="/signIn" element={<LoginAccount />} />
      </Route>
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Navigate to="/ProductDetails" replace />} />
        <Route path="/ProductDetails" element={<ProductView product={{'id':1, 'name':'DoggoLoco', 'description':'DoggoLoco está muy locoshon', 'image':'imagen', 'age': '7 years old.'}} />} />
      </Route>
    </Routes>
  );
};
export default Router;
