import React from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

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
            <h1>Home Page</h1>
            <h2>Dashboard</h2>

            <div>
                <button onClick={() => navigate('/profile')}>
                    Go to profile
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

export default HomePage;
