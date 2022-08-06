import React from 'react';
import { useNavigate } from 'react-router-dom'

const NotfoundPage = () => {
    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }
    return (
        <div>
            <h1>404 - Page Not found</h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go to home
                </button>
            </div>
        </div>
    );
}

export default NotfoundPage;
