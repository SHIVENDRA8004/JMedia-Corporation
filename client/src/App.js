import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Map from "./components/Map/Map.js";
import { Routes, Route } from "react-router-dom";
function App() {
    const headQuarters = [
        { name: "Reo De Jeneirio, Brazil", lng: "-43.1729", lat: "-22.9068" },
        { name: "Accra, Ghana", lng: "-0.205874", lat: " 5.614818" },
        { name: "Paris, France", lng: "2.349014", lat: "48.8566" },
        { name: "Miami, Florida", lng: "-80.1918", lat: "25.7617" },
        { name: "Mumbai, India", lng: "72.8777", lat: "19.076" },
    ];
    const [location, setLocation] = useState({ name: "Default", lng: "0", lat: "0" });
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="container-fluid App">
                            <div className="row">
                                <div className="col-12">
                                    <Header />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Body headQuarters={headQuarters} setLocation={setLocation} />
                                </div>
                            </div>
                        </div>
                    }
                ></Route>
                <Route path="/map" element={<Map location={location} />}></Route>
            </Routes>
        </>
    );
}

export default App;
