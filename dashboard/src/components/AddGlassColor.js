
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png'
import "react-toastify/dist/ReactToastify.css";

const AddGlassColor = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [plus, setPlus] = useState("");
    const [glass, setGlass] = useState("");

    const handleAddNewStudent = async (e) => {
        e.preventDefault();
        console.log({ title, image, plus, glass }); // تسجيل القيم للتحقق منها
        try {
            if (!title || !image || !plus || !glass) {
                toast.error("Please fill in all fields");
                return;
            }

            const res = await axios.post(
                "https://windows-ux0g.onrender.com/api/v1/GlassColor",
                { title, image, plus, glass },
                {
                    withCredentials: false,
                    headers: { "Content-Type": "application/json" },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            setTitle("");
            setPlus("");
            setImage("");
            setGlass('')
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
                <h1 className="form-title">Add a new Material</h1>
                <form onSubmit={handleAddNewStudent}>
                    <div>
                        <input
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="plus"
                            value={plus}
                            onChange={(e) => setPlus(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            className="Chooose_image Chooose_image2"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="glass"
                            value={glass}
                            onChange={(e) => setGlass(e.target.value)}
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

export default AddGlassColor;
