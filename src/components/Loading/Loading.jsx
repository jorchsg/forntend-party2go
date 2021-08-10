import React from "react";
import "./loading.scss";

const Loading = () => {
    return (
        <div className="content_loading">
            <div>
                <h2 style={{ color: "white" }}>Loading...</h2>
            </div>
            {/* Loading */}
            <div className="content_icon_loading">
                <svg id="loading" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122 122">
                    <path id="circle4" d="M120.5,61c0,32.9-26.6,59.5-59.5,59.5S1.5,93.9,1.5,61S28.1,1.5,61,1.5S120.5,28.1,120.5,61z" />
                    <path
                        id="circle3"
                        d="M104.7,61c0,24.1-19.6,43.7-43.7,43.7c-24.1,0-43.7-19.6-43.7-43.7c0-24.1,19.6-43.7,43.7-43.7
	                    C85.1,17.3,104.7,36.9,104.7,61z"
                    />
                    <path id="circle2" d="M87.8,61c0,14.8-12,26.9-26.9,26.9S34.1,75.8,34.1,61s12-26.9,26.9-26.9S87.8,46.2,87.8,61z" />
                    <path
                        id="circle1"
                        d="M61.2,73.3c6.9,0,12.5-5.6,12.5-12.5c0-6.9-5.6-12.5-12.5-12.5c-6.9,0-12.5,5.6-12.5,12.5
	                    C48.7,67.7,54.3,73.3,61.2,73.3z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Loading;
