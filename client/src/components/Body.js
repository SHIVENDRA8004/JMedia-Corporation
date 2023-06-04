import { Card, Space } from "antd";
import { Link } from "react-router-dom";
const Body = ({ headQuarters, setLocation }) => {
    const HandleClick = (i) => {
        setLocation(headQuarters[i]);
    };
    return (
        <div className="container-fluid Body">
            <div className="row ">
                <div className="col">
                    <div className="text-center mt-4 mb-4">
                        <h3 className="mt-2">
                            Our Global <span className="green">Centers</span>
                        </h3>
                        <p className="fs-5 w-75 m-auto">
                            Discover our global presence with centers located across the Earth. From bustling cities to serene towns, we're strategically
                            positioned to serve you better.
                        </p>
                    </div>
                    <div className="green fs-1 text-center mb-4">Our HeadQuarters</div>
                    <div className="w-100 text-center">
                        <table class="table table-dark table-striped table-hover w-100">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Center Location</th>
                                    <th scope="col">Locate On Map</th>
                                </tr>
                            </thead>
                            <tbody>
                                {headQuarters?.map((headQuarter, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{headQuarter.name}</td>
                                        <td>
                                            <Link className="green" style={{ textDecoration: "none" }} to="/map" onClick={() => HandleClick(i)}>
                                                See On Map
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
