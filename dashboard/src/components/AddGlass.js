
import { useContext, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png'
import "react-toastify/dist/ReactToastify.css";

const AddGlass = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [glass_density, setglass_density] = useState("");
  const [thickness, setThickness] = useState("");
  const [specification, setSpecification] = useState("");
  const [pricePermeterSqure, setPricePermeterSqure] = useState("");
  const [weightPermeterSqure, setWeightPermeterSqure] = useState("");

  const handleAddCompany = async (e) => {
    e.preventDefault();
    console.log({ name, thickness, specification, code, weightPermeterSqure, pricePermeterSqure, glass_density }); // تسجيل القيم للتحقق منها
    try {
      if (!name || !thickness || !specification || !code || !glass_density || !weightPermeterSqure || !pricePermeterSqure) {
        toast.error("Please fill in all fields");
        return;
      }

      const res = await axios.post(
        "https://windows-ux0g.onrender.com/api/v1/Glass",
        { name, thickness, specification, code, glass_density, weightPermeterSqure, pricePermeterSqure },
        {
          withCredentials: false,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      // إزالة التوجيه إلى الصفحة الرئيسية
      setName("");
      setglass_density("");
      setCode("");
      setSpecification("");
      setThickness("");
      setWeightPermeterSqure("");
      setPricePermeterSqure("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // if (!isAuthenticated) {
  //   return <Navigate to={"/loginAdmin"} />;
  // }

  return (
    <section className="page">
      <section className="container form-component add-student-form">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="form-title">ADD A GALSS</h1>
        <form onSubmit={handleAddCompany}>
          <div>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="thickness"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
            />
            <input
              type="text"
              placeholder="specification"
              value={specification}
              onChange={(e) => setSpecification(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="pricePermeterSqure"
              value={pricePermeterSqure}
              onChange={(e) => setPricePermeterSqure(e.target.value)}
            />
            <input
              type="text"
              placeholder="weightPermeterSqure"
              value={weightPermeterSqure}
              onChange={(e) => setWeightPermeterSqure(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="density of glass"
              value={glass_density}
              onChange={(e) => setglass_density(e.target.value)}
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

export default AddGlass;
