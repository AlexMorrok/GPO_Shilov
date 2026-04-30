import { Link } from 'react-router-dom';
import { Button, Stack, Box } from '@mui/material';

const NavButtons = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Stack direction="row" spacing={2}>
        <Button 
          component={Link} 
          to="/" 
          variant="contained" 
          color="primary"
        >
          FIRST PAGE
        </Button>
        <Button 
          component={Link} 
          to="/second" 
          variant="contained" 
          color="primary"
        >
          SECOND PAGE
        </Button>
      </Stack>
    </Box>
  );
};

export default NavButtons;