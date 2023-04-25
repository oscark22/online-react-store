import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreateAccount from "../pages/CreateAccount";
import LoginAccount from "../pages/LoginAccount copy";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signUp" element={<CreateAccount />} />
      <Route path="/signIn" element={<LoginAccount />} />
    </Routes>
  );
};
export default Router;
