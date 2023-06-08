import { Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import Map from "./Components/Map/Map";
import Main from "./Components/Main";
import { useState } from "react";
import Login from "./Components/Login";
function App() {
    const headQuarters = [
        { name: "Reo De Jeneirio, Brazil", lng: "-43.1729", lat: "-22.9068" },
        { name: "Accra, Ghana", lng: "-0.205874", lat: " 5.614818" },
        { name: "Paris, France", lng: "2.349014", lat: "48.8566" },
        { name: "Miami, Florida", lng: "-80.1918", lat: "25.7617" },
        { name: "Mumbai, India", lng: "72.8777", lat: "19.076" },
    ];
    const [location, setLocation] = useState({ name: "Default", lng: "72.8777", lat: "19.076" });
    return (
        <Routes>
            <Route path="/check" element={<Test />} />
            {/* <Route path="/map" element={<Map location={location} />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Main headQuarters={headQuarters} setLocation={setLocation} />} />
        </Routes>
    );
}

export default App;
