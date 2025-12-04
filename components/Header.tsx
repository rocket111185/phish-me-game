import { AppBar, Box, Button, Toolbar } from '@mui/material';

export const Header = ({ onOpenModal }: {
  onOpenModal: (type: string) => void;
}) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box>
          <Button
            color="inherit"
            onClick={() => onOpenModal('about')}
            sx={{ fontWeight: 'bold' }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => onOpenModal('credits')}
            sx={{ fontWeight: 'bold', ml: 1 }}
          >
            Credits
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
