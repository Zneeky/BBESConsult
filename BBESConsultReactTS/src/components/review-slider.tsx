import React from "react";
import styles from "./css/ReviewsSlider.module.css";
import { Card, Typography, Box } from '@mui/material';

const ReviewsSlider: React.FC = () => {
  const reviews = [
    { author: "John Doe", text: "This is a great service!" },
    { author: "Jane Smith", text: "Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week." },
    { author: "Alice Deriji", text: "Very professional and efficient." },
    // ... add more reviews
  ];

  return (
    <div className={styles.reviews}>
      <div className={styles["reviews-slide"]}>
        {reviews.map((review) => (
          <Box key={review.author} sx={{ width: '400px', m: 2, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Typography sx={{fontSize:"1.5rem", fontStyle: 'italic', color: 'gray', whiteSpace: 'normal' }}>
              "{review.text}"
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                - {review.author}
              </Typography>
            </Box>
          </Box>
        ))}
      </div>
      {/* Repeat the above div for infinite sliding effect */}
      <div className={styles["reviews-slide"]}>
        {reviews.map((review) => (
          <Box key={review.author} sx={{ width: '400px', m: 2, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Typography  sx={{fontSize:"1.5rem", fontStyle: 'italic', color: 'gray', whiteSpace: 'normal' }}>
              "{review.text}"
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                - {review.author}
              </Typography>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;