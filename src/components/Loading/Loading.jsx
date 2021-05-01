import React from 'react';
import {BallTriangle, Preloader} from "react-preloader-icon";

const Loading = () => {
    return (
        <div>
            <div className="loadingPage">
                <Preloader
                    use={BallTriangle}
                    size={100}
                    strokeWidth={10}
                    strokeHeight={10}
                    strokeColor="#fff"
                    duration={1000}
                />
            </div>
        </div>
    );
};

export default Loading;
