import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddSash = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [lengthOfBeamId, setLengthOfBeamId] = useState("");
    const [height, setheight] = useState("");
    const [image, setImage] = useState("");
    const [from, setFrom] = useState("");
    const [weightPermeter, setWeightPermeter] = useState("");
    const [coloursId, setColoursId] = useState("");
    const [pricePermeter, setPricePermeter] = useState("");
    const [profileId, setProfileId] = useState("");
    const [typeofunitId, setTypeofunitId] = useState("");

    const handleAddMullion = async (e) => {
        e.preventDefault();
        console.log({ name, code, image, from, typeofunitId, lengthOfBeamId, height, weightPermeter, coloursId, pricePermeter, profileId });

        try {
            if (!name || !code || !height || !image || !typeofunitId || !from || !weightPermeter || !pricePermeter || !profileId) {
                toast.error("Please fill in all required fields");
                return;
            }

            const formData = new FormData();
            formData.append("name", name);
            formData.append("code", code);
            formData.append("height", height);
            formData.append("typeofunitId", typeofunitId);
            formData.append("image", image);
            formData.append("from", from);
            formData.append("weightPermeter", weightPermeter);
            formData.append("pricePermeter", pricePermeter);
            formData.append("profileId", profileId);

            const res = await axios.post(
                "https://your-server-url.com/api/v1/Sash",
                formData,
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
            setheight("");
            setWeightPermeter("");
            setColoursId("");
            setPricePermeter("");
            setProfileId("");
            setFrom("");
            setImage("");
            setTypeofunitId("");
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
                            placeholder="height"
                            value={height}
                            onChange={(e) => setheight(e.target.value)}
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
                    <div>
                        <input
                            type="file"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="from"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            value={typeofunitId}
                            onChange={(e) => setTypeofunitId(e.target.value)}
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

export default AddSash;
