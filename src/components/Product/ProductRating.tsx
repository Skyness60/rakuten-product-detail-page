"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

type Props = {
  score?: number;
  count?: number;
};

export default function ProductRating({ score, count }: Props) {
  if (score === undefined || count === undefined) return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Rating value={score} precision={0.1} readOnly />
      <Typography variant="body2" color="text.secondary">
        {score.toFixed(1)} / 5 ({count} reviews)
      </Typography>
    </Box>
  );
}
