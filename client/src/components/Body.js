import { Card, Space } from "antd";
import { Link } from "react-router-dom";
const Body = ({ headQuarters, setLocation }) => {
    const HandleClick = (i) => {
        setLocation(headQuarters[i]);
    };
    return (
        <div className="container-fluid Body">
            <div className="row ">
                <div className="col col-sm-8">
                    <div>
                        <h2>
                            Our Global <span className="green">Centers</span>
                        </h2>
                        <p>
                            Discover our global presence with centers located across the Earth. From bustling cities to serene towns, we're strategically
                            positioned to serve you better.
                        </p>
                    </div>
                    <div>Our HeadQuarters</div>
                    <div>
                        {headQuarters?.map((headQuarter, i) => (
                            <div key={i}>
                                <Space direction="vertical" size={16}>
                                    <Card
                                        title={headQuarter.name}
                                        extra={<Link to="/">Map</Link>}
                                        style={{
                                            width: 300,
                                        }}
                                    >
                                        <Link onClick={() => HandleClick(i)}>See On Map</Link>
                                        <p>Card content</p>
                                        <p>Card content</p>
                                    </Card>
                                </Space>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
