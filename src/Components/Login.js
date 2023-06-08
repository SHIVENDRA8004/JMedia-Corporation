import { useState } from "react";
import WebCam from "./Layout/WebCam";
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const submitForm = () => {
        alert("Form submitted");
    };
    return (
        <div className="bg-drk container-fluid d-flex justify-content-center align-items-center login">
            <div className="row w-75 h-75 h-100">
                <div className="col container-login container-fluid">
                    <div className="row ">
                        <div className="col text-center p-2">
                            <h1>Verify Using Face Recognition</h1>
                            <p className="m-0 fs-4">Align Your Face Inside Camera</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-sm-6">
                            <WebCam />
                        </div>
                        <div className="col col-sm-6">
                            <form className="form p-2 m-auto">
                                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                                <div className="d-flex justify-content-between align-items-center mt-5">
                                    <button>
                                        <a href="/"> Cancel</a>
                                    </button>
                                    <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
