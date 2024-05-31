
import { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { AiOutlineSend, AiOutlineProfile } from "react-icons/ai";
import { RxFrame } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { MdAddModerator, MdColorLens, MdSystemUpdateAlt } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { BsBuildingAdd } from "react-icons/bs";
import { GiMaterialsScience, GiCrackedGlass, GiHamburgerMenu, GiResize, GiDrill, GiFloatingCrystal, GiPrayerBeads, GiRosaShield, GiTireIronCross } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { TbBrandWindows } from "react-icons/tb";
import { PiFanLight, PiUniteSquareLight } from "react-icons/pi";
import { IoCutOutline } from "react-icons/io5";
import { IoMdColorFill } from "react-icons/io";
import { VscLayoutSidebarRight } from "react-icons/vsc";



import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "..";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No token found");
    }

    await axios
      .get("https://windows-ux0g.onrender.com/api/v1/Auth/logout", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        withCredentials: false
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
        navigateTo("/loginAdmin");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message);
      });
  };

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(false);
  };

  const gotoStudentsPage = () => {
    navigateTo("/students");
    setShow(false);
  };

  const gotoRequestsPage = () => {
    navigateTo("/admins");
    setShow(false);
  };

  const gotoAddMaterial = () => {
    navigateTo("/AddMaterial");
    setShow(false);
  };

  const gotoAddFrame = () => {
    navigateTo("/AddFrame");
    setShow(false);
  };

  const gotoAddTypeOfUnit = () => {
    navigateTo("/AddTypeOfUnit");
    setShow(false);
  };

  const gotoAddWeldingProcess = () => {
    navigateTo("/AddWeldingProcess");
    setShow(false);
  };

  const gotoAddCompany = () => {
    navigateTo("/AddCompany");
    setShow(false);
  };

  const gotoAddGlass = () => {
    navigateTo("/AddGlass");
    setShow(false);
  };

  const gotoAddGlazingBead = () => {
    navigateTo("/AddGlazingBead");
    setShow(false);
  };

  const gotoAddLayout = () => {
    navigateTo("/AddLayout");
    setShow(false);
  };

  const gotoAddNewMullion = () => {
    navigateTo("/AddNewMullion");
    setShow(false);
  };

  const gotoAddOpeningLayout = () => {
    navigateTo("/AddOpeningLayout");
    setShow(false);
  };

  const gotoAddProfile = () => {
    navigateTo("/AddProfile");
    setShow(false);
  };

  const gotoAddFanlight = () => {
    navigateTo("/AddFanlight");
    setShow(false);
  };

  const gotoAddCuttingProcess = () => {
    navigateTo("/AddCuttingProcess");
    setShow(false);
  };

  const gotoAddFloatingMullion = () => {
    navigateTo("/AddFloatingMullion");
    setShow(false);
  };

  const gotoAddOpeningSystem = () => {
    navigateTo("/AddOpeningSystem");
    setShow(false);
  };

  const gotoAddProfileColor = () => {
    navigateTo("/AddProfileColor");
    setShow(false);
  };

  const gotoAddGlassColor = () => {
    navigateTo("/AddGlassColor");
    setShow(false);
  };

  const gotoAddReinforcementsteel = () => {
    navigateTo("/AddReinforcementsteel");
    setShow(false);
  };

  const gotoAddSize = () => {
    navigateTo("/AddSize");
    setShow(false);
  };

  const gotoAddSash = () => {
    navigateTo("/AddSash");
    setShow(false);
  };

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(false);
  };

  return (
    <>
      <nav
        style={{ display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <div onClick={gotoHomePage} title="Home">
            <TiHome />
            <span>Home</span>
          </div>
          <div onClick={gotoAddNewAdmin} title="Add Admin">
            <MdAddModerator />
            <span>Add Admin</span>
          </div>
          <div onClick={gotoAddCompany} title="Add Company">
            <BsBuildingAdd />
            <span>Add Company</span>
          </div>
          <div onClick={gotoAddGlass} title="Add Glass">
            <GiCrackedGlass />
            <span>Add Glass</span>
          </div>
          <div onClick={gotoAddFrame} title="Add Frame">
            <RxFrame />
            <span>Add Frame</span>
          </div>
          <div onClick={gotoAddMaterial} title="Add Material">
            <GiMaterialsScience />
            <span>Add Material</span>
          </div>
          <div onClick={gotoRequestsPage} title="Student Request">
            <AiOutlineSend />
            <span>Student Request</span>
          </div>
          <div onClick={gotoStudentsPage} title="Students">
            <FaCircleUser />
            <span>Students</span>
          </div>
          <div onClick={gotoAddLayout} title="AddLayout">
            <FiLayout />
            <span>Add Layout</span>
          </div>
          <div onClick={gotoAddNewMullion} title="Add New Mullion">
            <TbBrandWindows />
            <span>Add New Mullion</span>
          </div>
          <div onClick={gotoAddProfile} title="Add Profile">
            <AiOutlineProfile  />
            <span>Add Profile</span>
          </div>
          <div onClick={gotoAddFanlight} title="Add Fanlight">
            <PiFanLight />
            <span>Add Fanlight</span>
          </div>
          <div onClick={gotoAddSize} title="Add Size">
            <GiResize />
            <span>Add Size</span>
          </div>
          <div onClick={gotoAddCuttingProcess} title="Add CuttingProcess">
            <IoCutOutline />
            <span>Add CuttingProcess</span>
          </div>
          <div onClick={gotoAddFloatingMullion} title="Add Floating Mullion">
            <GiFloatingCrystal />
            <span>Add Floating Mullion</span>
          </div>
          <div onClick={gotoAddGlazingBead} title="Add GlazingBead">
            <GiPrayerBeads />
            <span>Add GlazingBead</span>
          </div>
          <div onClick={gotoAddGlassColor} title="Add Glass Color">
            <MdColorLens />
            <span>Add Glass Color</span>
          </div>
          <div onClick={gotoAddProfileColor} title="Add Profile Color">
            <IoMdColorFill />
            <span>Add Profile Color</span>
          </div>
          <div onClick={gotoAddOpeningSystem} title="Add OpeningSystem">
            <MdSystemUpdateAlt />
            <span>Add OpeningSystem</span>
          </div>
          <div onClick={gotoAddOpeningLayout} title="Add OpeningLayout">
            <VscLayoutSidebarRight />
            <span>Add OpeningLayout</span>
          </div>
          <div onClick={gotoAddReinforcementsteel} title="Add Reinforcementsteel">
            <GiTireIronCross />
            <span>Add Reinforcementsteel</span>
          </div>
          <div onClick={gotoAddSash} title="Add Sash">
            <GiRosaShield />
            <span>Add Sash</span>
          </div>
          <div onClick={gotoAddTypeOfUnit} title="Add TypeOfUnit">
            <PiUniteSquareLight />
            <span>Add TypeOfUnit</span>
          </div>
          <div onClick={gotoAddWeldingProcess} title="Add TypeOfUnit">
            <GiDrill />
            <span>Add WeldingProcess</span>
          </div>
          <div onClick={handleLogout} title="Logout">
            <CiLogout />
            <span>Logout</span>
          </div>
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
