import React, { useState } from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user",
};
const WebCam = () => {
    const [image, setImage] = useState("");
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    });

    return (
        <div>
            <div className="text-center">
                <div>
                    {image === "" ? (
                        <Webcam class="webcame" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
                    ) : (
                        <img className="image " src={image} alt="imge" />
                    )}
                </div>
                <div>
                    {image !== "" ? (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setImage("");
                            }}
                            className="webcam-btn mt-5"
                        >
                            Retake Image
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                capture();
                            }}
                            className="webcam-btn mt-5"
                        >
                            Capture
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WebCam;
