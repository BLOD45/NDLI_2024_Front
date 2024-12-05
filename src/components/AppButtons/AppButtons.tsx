import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import CaptchaImage from '../../assets/images/buttons/Captcha.jpg';
import OceanImage from '../../assets/images/buttons/Ocean.png';
import oceanVideo from '../../assets/videos/background/bubbles.mp4';

const images = [
  {
    url: CaptchaImage,
    title: 'Jouer au Cookie Clicker',
    link: '/captcha',
  },
  {
    url: OceanImage,
    title: 'Découvrir les océans',
    link: '/principale',
  },
];

const ImageButton = styled(ButtonBase)({
  position: 'relative',
  height: 200, // Increased size
  width: 200, // Increased size
  borderRadius: '16px', // Rounded corners
  overflow: 'hidden',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease', // Smooth transition for shadow and scaling
  '&:hover': {
    boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.4)', // Shadow becomes stronger on hover
  },
});

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'transform 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)', // Background image zoom effect
  },
});

const AppButtons: React.FC = () => {
    const navigate = useNavigate(); // Hook pour naviguer

  const handleClick = (link: string) => {
    navigate(link); // Redirige vers le lien spécifié
  };

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Full height of the viewport
        width: '100vw',
        background: 'linear-gradient(to bottom, #004e92, #000428)', // Ocean-style gradient
      }}
    >
      <Box
        component="video"
        src={oceanVideo} // Votre vidéo de fond
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, // Assure que la vidéo soit en arrière-plan
        }}
      />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black
            zIndex: 0, // Ensure overlay is above the video
          }}
        />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Align images
          alignItems: 'center',
          width: '50vw', // Adjust width
          padding: '16px',
        }}
      >
        {images.map((image) => (
          <Box
            key={image.title}
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack items vertically
              alignItems: 'center', // Center horizontally
              textAlign: 'center',
              gap: '8px', // Space between image and text
            }}
          >
            <ImageButton onClick={() => handleClick(image.link)}>
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            </ImageButton>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                zIndex: 1,
                textShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              {image.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    </>
  );
};

export default AppButtons;
