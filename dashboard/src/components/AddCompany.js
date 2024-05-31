import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddCompany = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [name, setName] = useState("");
  const [materialId, setMaterialId] = useState("");
  const [profileId, setProfileId] = useState("");
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://windows-ux0g.onrender.com/api/v1/Company");
        setProfiles(res.data.profiles);
        setMaterials(res.data.materials);
      } catch (error) {
        toast.error("Failed to fetch profiles or materials");
      }
    };

    fetchData();
  }, []);

  const handleAddCompany = async (e) => {
    e.preventDefault();
    console.log({ name, image, size, materialId, profileId });
    try {
      if (!name || !image || !size || !materialId || !profileId) {
        toast.error("Please fill in all fields");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      formData.append("size", size);
      formData.append("material", materialId);
      formData.append("profile", profileId);

      const res = await axios.post(
        "https://windows-ux0g.onrender.com/api/v1/Company",
        formData,
        {
          withCredentials: false,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      setName("");
      setProfileId("");
      setMaterialId("");
      setSize("");
      setImage(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/loginAdmin"} />;
  }

  return (
    <section className="page">
      <section className="container form-component add-student-form">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="form-title">ADD A NEW COMPANY</h1>
        <form onSubmit={handleAddCompany}>
          <div>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select value={profileId} onChange={(e) => setProfileId(e.target.value)}>
              <option value="">Select Profile</option>
              {profiles.map(profile => (
                <option key={profile._id} value={profile._id}>{profile.brandname}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="file"
              className="Chooose_image"
              placeholder="Choose image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <input
              type="size"
              placeholder="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div>
            <select value={materialId} onChange={(e) => setMaterialId(e.target.value)}>
              <option value="">Select Material</option>
              {materials.map(material => (
                <option key={material._id} value={material._id}>{material.type}</option>
              ))}
            </select>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">ADD</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddCompany;
