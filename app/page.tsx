'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Header } from '../components/Header.tsx';
import { Modal } from '../components/Modal.tsx';

const HomePage = () => {
  const [openModalType, setOpenModalType] = useState<string | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenModal = (type: string) => setOpenModalType(type);
  const handleCloseModal = () => setOpenModalType(null);

  const titlePosition = '25vh';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header onOpenModal={handleOpenModal} />
      <Container maxWidth="lg" sx={{ flexGrow: 1, position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: titlePosition,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
            }}
          >
            Phish Me!
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              mt: 4,
              flexDirection: isSmallScreen ? 'column' : 'row',
              alignItems: isSmallScreen ? 'center' : 'initial',
            }}
          >
            <Grid>
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{
                  fontSize: '1.25rem',
                  py: 1.5,
                  px: 4,
                  minWidth: '220px',
                }}
              >
                Single player
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="warning"
                size="large"
                sx={{
                  fontSize: '1.25rem',
                  py: 1.5,
                  px: 4,
                  minWidth: '220px',
                }}
              >
                Multiplayer
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Модалка About */}
      <Modal
        open={openModalType === 'about'}
        handleClose={handleCloseModal}
      title="About the game"
      >
        <Typography variant="body1" align="left">
          Phish Me! is a game intended to educate on phishing techniques in a
          fun and entertaining way. You can play alone or try tricking your
          friends (no real page visits involved).
        </Typography>
      </Modal>

      {/* Модалка Credits */}
      <Modal
        open={openModalType === 'credits'}
        handleClose={handleCloseModal}
        title="Credits"
      >
        <Typography variant="body1">
          Author: Dmytro Rekechynskyi
        </Typography>
      </Modal>
    </Box>
  );
};

export default HomePage;
