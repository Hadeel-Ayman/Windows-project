import { useContext, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddCompany from "./components/AddCompany";
import Admins from "./components/Admin";
import Students from "./components/Students";
import { Context } from ".";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./index.css";
import AddMaterial from "./components/AddMaterial";
import AddGlass from "./components/AddGlass";
import AddFrame from "./components/AddFrame";
import AddLayout from "./components/AddLayout";
import AddNewMullion from "./components/AddMulllion";
import AddProfile from "./components/AddProfile";
import AddFanlight from "./components/AddFanlight";
import AddSize from "./components/AddSize";
import AddFloatingMullion from "./components/AddFloatingMullion";
import AddGlassColor from "./components/AddGlassColor";
import AddGlazingBead from "./components/AddGlazingBead";
import AddOpeningLayout from "./components/AddOpeningLayout";
import AddOpeningSystem from "./components/AddOpeningSystem";
import AddProfileColor from "./components/AddProfileColor";
import AddReinforcementsteel from "./components/AddReinforcementsteel";
import AddSash from "./components/AddSash";
import AddWeldingProcess from "./components/AddWeldingProcess";
import AddTypeOfUnit from "./components/AddTypeOfUnit";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, setIsAuthenticated, setAdmin } = useContext(Context);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false);
      setAdmin({});
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://windows-ux0g.onrender.com/api/v1/User/getAdminDetails",
          {
            headers: {
              'Authorization': `Bearer ${token}`, // تضمين التوكن في الهيدر
              'Content-Type': 'application/json'
            },
            withCredentials: false,
          }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [setAdmin, setIsAuthenticated, token]);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/loginAdmin" element={<Login />} />
        <Route path="/AddCompany" element={ <AddCompany /> } />
        <Route path="/AddMaterial" element={ <AddMaterial /> } />
        <Route path="/admin/addnew" element={ <AddNewAdmin /> } />
        <Route path="/admins" element={ <Admins /> } />
        <Route path="/AddGlass" element={ <AddGlass /> } />
        <Route path="/students" element={ <Students /> } />
        <Route path="/AddFrame" element={ <AddFrame /> } />
        <Route path="/AddLayout" element={ <AddLayout /> } />
        <Route path="/AddNewMullion" element={ <AddNewMullion /> } />
        <Route path="/AddProfile" element={ <AddProfile /> } />
        <Route path="/AddFanlight" element={ <AddFanlight /> } />
        <Route path="/AddSize" element={ <AddSize /> } />
        <Route path="/AddFloatingMullion" element={ <AddFloatingMullion /> } />
        <Route path="/AddGlassColor" element={ <AddGlassColor /> } />
        <Route path="/AddGlazingBead" element={ <AddGlazingBead /> } />
        <Route path="/AddOpeningLayout" element={ <AddOpeningLayout /> } />
        <Route path="/AddOpeningSystem" element={ <AddOpeningSystem /> } />
        <Route path="/AddProfileColor" element={ <AddProfileColor /> } />
        <Route path="/AddReinforcementsteel" element={ <AddReinforcementsteel /> } />
        <Route path="/AddSash" element={ <AddSash /> } />
        <Route path="/AddWeldingProcess" element={ <AddWeldingProcess /> } />
        <Route path="/AddTypeOfUnit" element={ <AddTypeOfUnit /> } />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
