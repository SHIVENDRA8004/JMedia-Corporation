import { useState } from "react";
import WebCam from "./WebCam";
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const submitForm = () => {
        alert("Form submitted");
    };
    return (
        <div className="bg-dark">
            <div className="home-container">
                <div className="container">
                    <div className="text">
                        <h1>Fill up this form!</h1>
                        <form className="form">
                            <WebCam />
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
