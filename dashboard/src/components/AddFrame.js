
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png'
import "react-toastify/dist/ReactToastify.css";

const AddFrame = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [from, setFrom] = useState("");
  const [code, setCode] = useState("");
  const [LengthOfBeam, setLengthOfBeam] = useState("");
  const [Renovation, setRenovation] = useState("");
  const [Renovation_height, setRenovationHeight] = useState("");
  const [FrameHeight, setFrameHeight] = useState("");
  const [FrameWidth, setFrameWidth] = useState("");
  const [weightPermeter, setWeightPermeter] = useState("");
  const [colours, setColours] = useState("");
  const [pricePermeter, setPricePermeter] = useState("");
  const [profile, setProfile] = useState("");

  const handleAddCompany = async (e) => {
    e.preventDefault();
    console.log({ name, image, colours, pricePermeter, profile, weightPermeter, FrameHeight, FrameWidth, from, Renovation_height, Renovation, code, LengthOfBeam }); // تسجيل القيم للتحقق منها
    try {
      if (!name || !image || !Renovation || !code || !LengthOfBeam || !setPricePermeter || !setProfile || !setColours || !setWeightPermeter || !setFrameWidth || !setFrameHeight || !setRenovationHeight) {
        toast.error("Please fill in all fields");
        return;
      }

      const res = await axios.post(
        "https://windows-ux0g.onrender.com/api/v1/Frame",
        { name, image, Renovation, material: code, profile: LengthOfBeam },
        {
          withCredentials: false,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      // إزالة التوجيه إلى الصفحة الرئيسية
      setName("");
      setImage("");
      setFrom();
      setCode("");
      setLengthOfBeam("");
      setRenovation("");
      setRenovationHeight("");
      setFrameHeight("");
      setFrameWidth("");
      setWeightPermeter("");
      setColours("");
      setPricePermeter("");
      setProfile();
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
            <input
              type="number"
              placeholder="from price"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div>
            <input
              type="file"
              className="Chooose_image3"
              placeholder="Chooose image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div className="radio">
              <label>Renovation:</label>
              <div>
                <label >Yes</label>
                <input
                  type="radio"
                  placeholder="Renovation"
                  name="yes"
                  value={Renovation == "Yes"}
                  onChange={(e) => setRenovation(e.target.value)}
                />
                <label >No</label>
                <input
                  type="radio"
                  name="yes"
                  placeholder="Renovation"
                  value={Renovation == "No"}
                  onChange={(e) => setRenovation(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <input
              type="number"
              placeholder="Length_Of_Beam"
              value={LengthOfBeam}
              onChange={(e) => setLengthOfBeam(e.target.value)}
            />
            <input
              type="number"
              placeholder="Frame of Height"
              value={FrameHeight}
              onChange={(e) => setFrameHeight(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Frame_Width"
              value={FrameWidth}
              onChange={(e) => setFrameWidth(e.target.value)}
            />
            <input
              type="number"
              placeholder="Renovation of height"
              value={Renovation_height}
              onChange={(e) => setRenovationHeight(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="weight_Permeter"
              value={weightPermeter}
              onChange={(e) => setWeightPermeter(e.target.value)}
            />
            <input
              type="number"
              placeholder="price_Permeter"
              value={pricePermeter}
              onChange={(e) => setPricePermeter(e.target.value)}
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

export default AddFrame;
