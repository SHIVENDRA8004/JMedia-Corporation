import Body from "./Layout/Body";
import Header from "./Layout/Header";
const Main = ({ setLocation }) => {
    const headQuarters = [
        { name: "Reo De Jeneirio, Brazil", lng: "-43.1729", lat: "-22.9068" },
        { name: "Accra, Ghana", lng: "-0.205874", lat: " 5.614818" },
        { name: "Paris, France", lng: "2.349014", lat: "48.8566" },
        { name: "Miami, Florida", lng: "-80.1918", lat: "25.7617" },
        { name: "Mumbai, India", lng: "72.8777", lat: "19.076" },
    ];
    return (
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
    );
};

export default Main;
