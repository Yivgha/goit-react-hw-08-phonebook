import { Typography } from '@mui/material';
import { Image } from 'components/Image/Image';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
const phoneImg = new URL('../images/tel.png', import.meta.url);

export function HomePage() {
    return (
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component={'span'} variant={'body2'} sx={{ marginBottom: 2 }}>
                <Link component={RouterLink} to="/register" variant="body2">Try with me</Link>
            </Typography>
            <Image src={phoneImg} alt="phone" />
        </Box>
    )
}