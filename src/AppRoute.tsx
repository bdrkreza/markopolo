import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import AddUser from "./pages/add/AddUser";
import Dashboard from "./pages/dashboard/Dashboard";
import EditUser from "./pages/edit/EditUser";
import LoginPage from "./pages/login/Login";

export default function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="/add" element={<AddUser />} />
        </Route>
      </Routes>
    </>
  );
}
