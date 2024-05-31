import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddTypeOfUnit = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [Type, setType] = useState("6");
    const [profile, setProfile] = useState("");

    const handleAddSize = async (e) => {
        e.preventDefault();
        console.log({ Type, profile });

        try {
            if (!Type || !profile) {
                toast.error("Please fill in all fields");
                return;
            }
            const res = await axios.post(
                "https://your-api-url.com/api/v1/TypeOfUnit",
                { Type, profile },
                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            setType("");
            setProfile("");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    if (!isAuthenticated) {
        return <Navigate to={"/loginAdmin"} />;
    }

    return (
        <section className="page">
            <section className="container form-component add-material-form">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="form-title">Add a new Fanlight</h1>
                <form onSubmit={handleAddSize}>
                    <div>
                        <input
                            type="number"
                            placeholder="Type"
                            value={Type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="profile"
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                        />
                    </div>
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">ADD</button>
                    </div>
                </form>
            </section>
        </section >
    );
};

export default AddTypeOfUnit;
