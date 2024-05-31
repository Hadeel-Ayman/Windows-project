
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png'
import "react-toastify/dist/ReactToastify.css";

const AddProfileColor = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [profile, setProfile] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const handleAddNewStudent = async (e) => {
        e.preventDefault();
        console.log({ profile, image, title }); // تسجيل القيم للتحقق منها
        try {
            if (!profile || !image || !title) {
                toast.error("Please fill in all fields");
                return;
            }

            const res = await axios.post(
                "https://windows-ux0g.onrender.com/api/v1/Material",
                { profile, image, title },
                {
                    withCredentials: false,
                    headers: { "Content-Type": "application/json" },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            // إزالة التوجيه إلى الصفحة الرئيسية
            setProfile("");
            setTitle("");
            setImage("");
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
                            placeholder="profile"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">ADD</button>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default AddProfileColor;
