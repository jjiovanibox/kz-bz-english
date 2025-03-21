"use client";
import { CldImage } from 'next-cloudinary';
import { Box, Container } from '@mui/material';
import styles from '../styles/home.module.css';

export default function Home() {
  const images = [
    "samples/animals/cat",
    "samples/two-ladies",
    "cld-sample",
    "samples/smile",
    "cld-sample-3",
    "cld-sample-4",
    "cld-sample-5",
    "samples/man-portrait",
    "samples/balloons",
    "samples/upscale-face-1",
  ];

  const images2 = [
    "cld-sample-4",
    "cld-sample-5",
    "samples/man-portrait",
    "samples/balloons",
    "samples/upscale-face-1",
  ];

  return (
    <Container>
      <Box className={styles.imageGallery}>
        {images.map((src, index) => (
          <Box key={index} className={styles.imageContainer}>
            <CldImage
              src={src}
              width="300"
              height="300"
              crop="auto"
              alt={`Sample Image ${index + 1}`}
            />
          </Box>
        ))}
      </Box>
      <Box className={styles.imageGallery}>
        {images2.map((src, index) => (
          <Box key={index} className={styles.imageContainer}>
            <CldImage
              src={src}
              width="300"
              height="300"
              crop="auto"
              alt={`Sample Image ${index + 1}`}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}