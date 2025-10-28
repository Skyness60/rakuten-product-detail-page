"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

type Props = {
  images: string[];
  name: string;
};

export default function ProductImages({ images, name }: Props) {
  const [mainIdx, setMainIdx] = useState(0);

  const main = images && images.length > 0 ? images[mainIdx] : undefined;

  return (
    <Stack spacing={2}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 240, md: 360 },
          backgroundColor: "#fff",
        }}
      >
        {main ? (
          <CardMedia
            component="img"
            src={main}
            alt={name}
            loading="lazy"
            style={{
              maxHeight: "320px",
              objectFit: "contain",
            }}
          />
        ) : (
          <Box sx={{ color: "text.disabled", fontSize: 14 }}>No image</Box>
        )}
      </Card>

      {images && images.length > 1 && (
        <ImageList cols={4} gap={8} sx={{ m: 0 }}>
          {images.map((img, i) => (
            <ImageListItem
              key={i}
              onClick={() => setMainIdx(i)}
              sx={{
                borderRadius: 2,
                cursor: "pointer",
                boxSizing: "border-box",
                border: i === mainIdx ? "2px solid #e60023" : "2px solid transparent",
                p: "2px",
                background: i === mainIdx ? "rgba(230,0,35,0.08)" : "transparent",
                transition: "border 0.2s, background 0.2s",
                minHeight: 56,
                minWidth: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt={`${name} ${i + 1}`}
                loading="lazy"
                style={{ objectFit: "contain", width: "100%", height: "100%", borderRadius: "8px" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Stack>
  );
}
