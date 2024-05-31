import {  useState } from "react";
// import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddWeldingProcess = () => {
    // const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [Welding_Allowance, setWelding_Allowance] = useState("6");
    const [Welding_time, setWelding_time] = useState("3");
    const [profile, setProfile] = useState("");

    const handleAddSize = async (e) => {
        e.preventDefault();
        console.log({ Welding_Allowance, Welding_time, profile });

        try {
            if (!Welding_Allowance || !Welding_time || !profile) {
                toast.error("Please fill in all fields");
                return;
            }
            const res = await axios.post(
                "https://your-api-url.com/api/v1/WeldingProcess",
                { Welding_Allowance, Welding_time, profile },
                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success(res.data.message);
            // setIsAuthenticated(true);
            setWelding_Allowance("");
            setWelding_time("");
            setProfile("");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    // if (!isAuthenticated) {
    //     return <Navigate to={"/loginAdmin"} />;
    // }

    return (
        <section className="page">
            <section className="container form-component add-material-form">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="form-title">Add a new Fanlight</h1>
                <form onSubmit={handleAddSize}>
                    <div>
                        <input
                            type="number"
                            placeholder="Welding_Allowance"
                            value={Welding_Allowance}
                            onChange={(e) => setWelding_Allowance(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Number of Segments"
                            value={Welding_time}
                            onChange={(e) => setWelding_time(e.target.value)}
                        />
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

export default AddWeldingProcess;
