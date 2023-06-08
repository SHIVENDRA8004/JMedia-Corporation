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
        <div className="bg-drk container-fluid d-flex justify-content-center login">
            <div className="row h-100 w-100 align-items-center">
                <div className="col h-75 w-100 p-0">
                    <div className="h-100 w-100">
                        <div className="container-login h-100 w-100">
                            <div className="text-center p-2 w-100 h-25">
                                <h1>Verify Using Face Recognition</h1>
                                <p className="m-0 fs-4">Align Your Face Inside Camera</p>
                            </div>
                            <div className="d-block d-sm-flex w-100 h-75">
                                <div className="w-sm-50 w-100 h-100">
                                    <WebCam />
                                </div>
                                <div className="w-sm-50 w-100 h-100 d-flex align-items-center justify-content-center text-center">
                                    <div className="h-100">
                                        <form className="form p-1 position-relative m-auto z-2">
                                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                            <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                                            <button type="submit" className="mt-5 " id="login-button" onClick={(e) => submitForm(e)}>
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
