import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddNewMullion = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [lengthOfBeamId, setLengthOfBeamId] = useState("");
    const [width, setWidth] = useState("");
    const [weightPermeter, setWeightPermeter] = useState("");
    const [coloursId, setColoursId] = useState("");
    const [pricePermeter, setPricePermeter] = useState("");
    const [profileId, setProfileId] = useState("");

    const handleAddMullion = async (e) => {
        e.preventDefault();
        console.log({ name, code, lengthOfBeamId, width, weightPermeter, coloursId, pricePermeter, profileId });

        try {
            if (!name || !code || !width || !weightPermeter || !pricePermeter || !profileId) {
                toast.error("Please fill in all required fields");
                return;
            }

            const res = await axios.post(
                "https://your-server-url.com/api/v1/Mullion",
                { name, code, Length_of_Beam: lengthOfBeamId, Width: width, weightPermeter, colours: coloursId, pricePermeter, profile: profileId },
                {
                    withCredentials: false,
                    headers: { "Content-Type": "application/json" },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            setName("");
            setCode("");
            setLengthOfBeamId("");
            setWidth("");
            setWeightPermeter("");
            setColoursId("");
            setPricePermeter("");
            setProfileId("");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    if (!isAuthenticated) {
        return <Navigate to={"/loginAdmin"} />;
    }

    return (
        <section className="page">
            <section className="container form-component add-mullion-form">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="form-title">ADD A NEW MULLION</h1>
                <form onSubmit={handleAddMullion}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Length of Beam ID"
                            value={lengthOfBeamId}
                            onChange={(e) => setLengthOfBeamId(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Width"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Weight per Meter"
                            value={weightPermeter}
                            onChange={(e) => setWeightPermeter(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Colours ID"
                            value={coloursId}
                            onChange={(e) => setColoursId(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Price per Meter"
                            value={pricePermeter}
                            onChange={(e) => setPricePermeter(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Profile ID"
                            value={profileId}
                            onChange={(e) => setProfileId(e.target.value)}
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

export default AddNewMullion;
