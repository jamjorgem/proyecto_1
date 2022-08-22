import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const CopyRight = () => {
    return (
        <Typography variant='body2' color='Graytext' align="center">
            {'CopyRight (C)'}
            <Link color="inherit" href='https://www.imaginaformacion.com'>
                Imagina Formación
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default CopyRight;
