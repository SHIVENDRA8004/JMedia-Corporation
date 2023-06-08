import { Route, Routes } from "react-router-dom";
import Map from "./Components/Map/Map";
import Main from "./Components/Main";
import { useState } from "react";
import Login from "./Components/Login";
function App() {
    const [location, setLocation] = useState({ name: "Default", lng: "72.8777", lat: "19.076" });
    return (
        <Routes>
            <Route path="/map" element={<Map location={location} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main setLocation={setLocation} />} />
        </Routes>
    );
}

export default App;
