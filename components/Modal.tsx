'use client';

import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal as MuiModal,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'var(--mui-palette-background-default)',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
  outline: 'none',
};

export const Modal = ({ open, handleClose, title, children }: {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>

          <Box id="modal-description" sx={{ mt: 2 }}>
            {children}
          </Box>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Fade>
    </MuiModal>
  );
};
