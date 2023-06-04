import { useEffect } from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl";
import { Button } from "antd";
import { Link} from "react-router-dom";

const Map = ({ location }) => {
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiaGVsbG84MDA0IiwiYSI6ImNsaWZoaGU3bzB0cjIza3MwZ3U3bjZhbjgifQ.WvTmxC8woHj0QXfGURZ6wQ";
        const secondsPerRevolution = 100;
        const maxSpinZoom = 5;
        const slowSpinZoom = 3;
        let userInteracting = false;
        let spinEnabled = true;
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            projection: "globe",
            center: [72.8777, 19.076],
            zoom: 0,
            attributionControl: false,
        });
        map.on("style.load", () => {
            map.setFog({
                color: "rgb(196, 210, 235)",
                "high-color": "rgb(36, 92, 223)",
                "horizon-blend": 0.01,
                "space-color": "rgb(0,0,0,0.25)",
                "star-intensity": 0.4,
            });
            map.addSource("mapbox-dem", {
                type: "raster-dem",
                url: "mapbox://mapbox.terrain-rgb",
            });

            map.setTerrain({
                source: "mapbox-dem",
                exaggeration: 1.5,
            });
        });
        const target = {
            center: [location.lng, location.lat],
            zoom: 12.5,
            bearing: 130,
            pitch: 75,
        };
        const fly = () => {
            map.flyTo({
                ...target,
                duration: 25000,
                essential: true,
            });
        };
        fly();
        function spinGlobe() {
            const zoom = map.getZoom();
            if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
                let distancePerSecond = 360 / secondsPerRevolution;
                if (zoom > slowSpinZoom) {
                    const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                    distancePerSecond *= zoomDif;
                }
                const center = map.getCenter();
                center.lng -= distancePerSecond;
                map.easeTo({ center, duration: 1000, easing: (n) => n });
            }
        }
        map.on("mousedown", () => {
            userInteracting = true;
        });
        map.on("mouseup", () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on("dragend", () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on("pitchend", () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on("rotateend", () => {
            userInteracting = false;
            spinGlobe();
        });

        map.on("moveend", () => {
            spinGlobe();
        });
        const ReoDeJeneirio = new mapboxgl.Marker().setLngLat([-43.1729, -22.9068]).addTo(map);
        const Accra = new mapboxgl.Marker().setLngLat([-0.205874, 5.614818]).addTo(map);
        const paris = new mapboxgl.Marker().setLngLat([2.349014, 48.8566]).addTo(map);
        const miami = new mapboxgl.Marker().setLngLat([-80.1918, 25.7617]).addTo(map);
        const mumbai = new mapboxgl.Marker().setLngLat([72.8777, 19.076]).addTo(map);
    }, []);

    return (
        <div className="Maps ">
            <div id="map"></div>
            <div className="btn-div">
                <Link to="/">
                    <Button className="Button-Map">Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default Map;
