import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    const history = useNavigate();
    const goBack = () => {
        history(-1);
    }

    const navigate = (path) => {
        history(path);
    }
    return (
        <div>
            <h1>profile</h1>
            <div>
                <button onClick={() => navigate('/tasks')}>
                    Tasks
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;
