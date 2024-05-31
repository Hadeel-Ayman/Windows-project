import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddProfile = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [brandname, setBrandname] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [systemId, setSystemId] = useState("");
  const [materialId, setMaterialId] = useState("");

  const handleAddProfile = async (e) => {
    e.preventDefault();
    console.log({ brandname, companyId, systemId, materialId }); // تسجيل القيم للتحقق منها
    try {
      if (!brandname || !companyId || !systemId || !materialId) {
        toast.error("Please fill in all fields");
        return;
      }

      const res = await axios.post(
        "https://windows-ux0g.onrender.com/api/v1/Profile",
        { brandname, company: companyId, system: systemId, material: materialId },
        {
          withCredentials: false,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);

      // إعادة تعيين الحقول بعد الإرسال
      setBrandname("");
      setCompanyId("");
      setSystemId("");
      setMaterialId("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/loginAdmin"} />;
  }

  return (
    <section className="page">
      <section className="container form-component add-profile-form">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="form-title">Add a new Profile</h1>
        <form onSubmit={handleAddProfile}>
          <div>
            <input
              type="text"
              placeholder="Brand Name"
              value={brandname}
              onChange={(e) => setBrandname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company ID"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="System ID"
              value={systemId}
              onChange={(e) => setSystemId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Material ID"
              value={materialId}
              onChange={(e) => setMaterialId(e.target.value)}
            />
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">ADD</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddProfile;
