import React from 'react';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const history = useNavigate();
    const logout = () => {
        history('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <CopyRight></CopyRight>
        </div>
    );
}

export default DashboardPage;
