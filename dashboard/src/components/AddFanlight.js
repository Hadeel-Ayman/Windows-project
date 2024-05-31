// import { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "..";
// import axios from "axios";
// import logo from '../images/file.png';
// import "react-toastify/dist/ReactToastify.css";

// const AddFanlight = () => {
//     const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//     const [title, setTitle] = useState("");
//     const [numOfSegment, setNumOfSegment] = useState("");
//     const [openingSystem, setOpeningSystem] = useState("");
//     const [profile, setProfile] = useState("");
//     const [image, setImage] = useState(null);

//     const handleAddFanlight = async (e) => {
//         e.preventDefault();
//         console.log({ title, numOfSegment, openingSystem, profile, image });

//         try {
//             if (!title || !numOfSegment || !openingSystem || !profile || !image) {
//                 toast.error("Please fill in all fields");
//                 return;
//             }

//             const formData = new FormData();
//             formData.append("title", title);
//             formData.append("numOfSegment", numOfSegment);
//             formData.append("openingSystem", openingSystem);
//             formData.append("profile", profile);
//             formData.append("image", image);

//             const res = await axios.post(
//                 "https://your-api-url.com/api/v1/Fanlight",
//                 formData,
//                 {
//                     withCredentials: false,
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             toast.success(res.data.message);
//             setIsAuthenticated(true);

//             setTitle("");
//             setNumOfSegment("");
//             setOpeningSystem("");
//             setProfile("");
//             setImage(null);
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
//                 <form onSubmit={handleAddFanlight}>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                         />
//                         <input
//                             type="number"
//                             placeholder="Number of Segments"
//                             value={numOfSegment}
//                             onChange={(e) => setNumOfSegment(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Opening System ID"
//                             value={openingSystem}
//                             onChange={(e) => setOpeningSystem(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Profile ID"
//                             value={profile}
//                             onChange={(e) => setProfile(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="file"
//                             className="choose-image"
//                             onChange={(e) => setImage(e.target.files[0])}
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

// export default AddFanlight;


import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import logo from '../images/file.png';
import "react-toastify/dist/ReactToastify.css";

const AddFanlight = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [title, setTitle] = useState("");
    const [numOfSegment, setNumOfSegment] = useState("");
    const [openingSystemId, setOpeningSystemId] = useState("");
    const [profileId, setProfileId] = useState("");
    const [image, setImage] = useState(null);
    const [openingSystems, setOpeningSystems] = useState([]);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchOpeningSystems = async () => {
            try {
                const response = await axios.get("https://windows-ux0g.onrender.com/api/v1/OpeningSystem");
                setOpeningSystems(response.data);
            } catch (error) {
                console.error("Error fetching opening systems:", error);
                toast.error("Error fetching opening systems. Please try again later.");
            }
        };

        const fetchProfiles = async () => {
            try {
                const response = await axios.get("https://windows-ux0g.onrender.com/api/v1/Profile");
                setProfiles(response.data);
            } catch (error) {
                console.error("Error fetching profiles:", error);
                toast.error("Error fetching profiles. Please try again later.");
            }
        };

        fetchOpeningSystems();
        fetchProfiles();
    }, []);

    const handleAddFanlight = async (e) => {
        e.preventDefault();

        try {
            if (!title || !numOfSegment || !openingSystemId || !profileId || !image) {
                toast.error("Please fill in all fields");
                return;
            }

            const formData = new FormData();
            formData.append("title", title);
            formData.append("numOfSegment", numOfSegment);
            formData.append("openingSystem", openingSystemId);
            formData.append("profile", profileId);
            formData.append("image", image);

            const res = await axios.post("https://windows-ux0g.onrender.com/api/v1/Fanlight",
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
            setNumOfSegment("");
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
            <section className="container form-component add-material-form">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="form-title">Add a new Fanlight</h1>
                <form onSubmit={handleAddFanlight}>
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Number of Segments"
                            value={numOfSegment}
                            onChange={(e) => setNumOfSegment(e.target.value)}
                        />
                    </div>
                    <div>
                        <select
                            value={openingSystemId}
                            onChange={(e) => setOpeningSystemId(e.target.value)}
                            required
                        >
                            <option value="">Select an opening system...</option>
                            {openingSystems.map(system => (
                                <option key={system._id} value={system._id}>{system.name}</option>
                            ))}
                        </select>
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
                    <div>
                        <input
                            type="file"
                            className="choose-image"
                            onChange={(e) => setImage(e.target.files[0])}
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

export default AddFanlight;
