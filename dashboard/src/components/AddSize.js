import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddSize = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [Width, setWidth] = useState("");
    const [height, setheight] = useState("");

    const handleAddSize = async (e) => {
        e.preventDefault();
        console.log({ Width, height });

        try {
            if (!Width || !height) {
                toast.error("Please fill in all fields");
                return;
            }
            const res = await axios.post(
                "https://your-api-url.com/api/v1/Size",
                { Width, height },
                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            setWidth("");
            setheight("");
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
                            placeholder="Width"
                            value={Width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Number of Segments"
                            value={height}
                            onChange={(e) => setheight(e.target.value)}
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

export default AddSize;
