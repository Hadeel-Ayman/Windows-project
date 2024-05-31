// import { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "..";
// import axios from "axios";
// import logo from '../images/file.png';
// import "react-toastify/dist/ReactToastify.css";

// const AddCuttingProcess = () => {
//     const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//     const [Thickenss, setThickenss] = useState("6");
//     const [Welding_time, setWelding_time] = useState("2");
//     const [profile, setProfile] = useState("");

//     const handleAddSize = async (e) => {
//         e.preventDefault();
//         console.log({ Thickenss, Welding_time, profile });

//         try {
//             if (!Thickenss || !Welding_time || !profile) {
//                 toast.error("Please fill in all fields");
//                 return;
//             }
//             const res = await axios.post(
//                 "https://your-api-url.com/api/v1/CuttingProcess",
//                 { Thickenss, Welding_time, profile },
//                 {
//                     withCredentials: false,
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             toast.success(res.data.message);
//             setIsAuthenticated(true);
//             setThickenss("");
//             setWelding_time("");
//             setProfile("");
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     };

//     if (!isAuthenticated) {
//         return <Navigate to={"/loginAdmin"} />;
//     }

//     return (
//         <section className="page">
//             <section className="container form-component add-material-form">
//                 <img src={logo} alt="logo" className="logo" />
//                 <h1 className="form-title">Add a new Fanlight</h1>
//                 <form onSubmit={handleAddSize}>
//                     <div>
//                         <input
//                             type="number"
//                             placeholder="Thickenss"
//                             value={Thickenss}
//                             onChange={(e) => setThickenss(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="number"
//                             placeholder="Number of Segments"
//                             value={Welding_time}
//                             onChange={(e) => setWelding_time(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="profile"
//                             value={profile}
//                             onChange={(e) => setProfile(e.target.value)}
//                         />
//                     </div>
//                     <div style={{ justifyContent: "center", alignItems: "center" }}>
//                         <button type="submit">ADD</button>
//                     </div>
//                 </form>
//             </section>
//         </section >
//     );
// };

// export default AddCuttingProcess;

import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddCuttingProcess = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [thickenss, setThickenss] = useState("6");
    const [welding_time, setWelding_time] = useState("2");
    const [profileId, setProfileId] = useState("");
    const [profiles, setProfiles] = useState([]); // حالة لتخزين البروفايلات

    useEffect(() => {
        // Fetch profiles when component mounts
        const fetchProfiles = async () => {
            try {
                const response = await axios.get("https://windows-ux0g.onrender.com/api/v1/Profile");
                setProfiles(response.data);
            } catch (error) {
                console.error("Error fetching profiles:", error);
                toast.error("Error fetching profiles. Please try again later.");
            }
        };

        fetchProfiles();
    }, []); // فقط عندما يتم تحميل المكون

    const handleAddSize = async (e) => {
        e.preventDefault();

        try {
            if (!thickenss || !welding_time || !profileId) {
                toast.error("Please fill in all fields");
                return;
            }

            const res = await axios.post(
                "https://windows-ux0g.onrender.com/api/v1/CuttingProcess",
                { thickenss, welding_time, profile: profileId },
                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success(res.data.message);
            setIsAuthenticated(true);
            setThickenss("");
            setWelding_time("");
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
            <section className="container form-component add-material-form">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="form-title">Add a new Fanlight</h1>
                <form onSubmit={handleAddSize}>
                    <div>
                        <input
                            type="number"
                            placeholder="Thickenss"
                            value={thickenss}
                            onChange={(e) => setThickenss(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Number of Segments"
                            value={welding_time}
                            onChange={(e) => setWelding_time(e.target.value)}
                        />
                        <select
                            value={profileId}
                            onChange={(e) => setProfileId(e.target.value)}
                            required
                        >
                            <option value="">Select a profile...</option>
                            {profiles.map(profile => (
                                <option key={profile._id} value={profile._id}>{profile.name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">ADD</button>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default AddCuttingProcess;
