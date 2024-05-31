import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddOpeningLayout = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [openingSystemId, setOpeningSystemId] = useState("");
    const [profileId, setProfileId] = useState("");

    const handleAddCompany = async (e) => {
        e.preventDefault();
        console.log({ title, image, openingSystemId, profileId });

        try {
            if (!title || !image || !openingSystemId || !profileId) {
                toast.error("Please fill in all fields");
                return;
            }

            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);
            formData.append("openingSystem", openingSystemId);
            formData.append("profile", profileId);

            const res = await axios.post(
                "https://windows-ux0g.onrender.com/api/v1/OpeningLayout",
                formData,
                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            setTitle("");
            setOpeningSystemId("");
            setProfileId("");
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
                <h1 className="form-title">ADD A NEW LAYOUT</h1>
                <form onSubmit={handleAddCompany}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Opening System ID"
                            value={openingSystemId}
                            onChange={(e) => setOpeningSystemId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Profile ID"
                            value={profileId}
                            onChange={(e) => setProfileId(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            className="choose_image"
                            placeholder="Choose image"
                            onChange={(e) => setImage(e.target.files[0])}
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

export default AddOpeningLayout;
