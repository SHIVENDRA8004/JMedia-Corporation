import { Button } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="Header container-fluid ps-sm-5 pe-sm-5 ">
            <div className="row h-100">
                <div className="col d-flex align-items-center">
                    <div className="me-auto logo fs-1 ">
                        JMedia <span> Corporation </span>
                    </div>
                    <div>
                        <Link to="/login">
                            <Button className="Button ">LOGIN</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
