import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    console.log(location.pathname);

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    const goBack = () => {
        history(-1);
    }

    const goForward = () => {
        history(1);
    }
    return (
        <div>
            <h1>about | FAQS</h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go to home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
