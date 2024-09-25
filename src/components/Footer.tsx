import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="#">
        Oselya Life
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center' },
        }}
      >
        <Box>
          <div>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
