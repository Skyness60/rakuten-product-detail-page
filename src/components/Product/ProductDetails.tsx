"use client";

import { Product } from "@/types";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

export default function ProductDetails({ product }: { product: Product }) {
  const [isUsed, setIsUsed] = useState(false);

  const displayedPrice = isUsed
    ? product.price.original / 2
    : product.price.discounted || product.price.original;

  return (
    <Stack spacing={2}>
      <Typography
        variant="h5"
        component="h1"
        fontWeight={600}
        sx={{ wordBreak: "break-word" }}
      >
        {product.name}
      </Typography>

      <ProductRating
        score={product.rating?.score}
        count={product.rating?.count}
      />

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: "#fff",
          display: "inline-block",
          maxWidth: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <button
            onClick={() => setIsUsed(false)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: isUsed ? "#f0f0f0" : "#007BFF",
              color: isUsed ? "#000" : "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              flex: 1,
              marginRight: "0.5rem",
            }}
          >
            Neuf
          </button>
          <button
            onClick={() => setIsUsed(true)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: isUsed ? "#007BFF" : "#f0f0f0",
              color: isUsed ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              flex: 1,
            }}
          >
            D'occasion
          </button>
        </Box>
        <ProductPrice
          original={product.price.original}
          discounted={displayedPrice}
          currency={product.price.currency}
        />
        <Typography variant="caption" color="text.secondary" display="block">
          TVA incluse, frais de port non inclus
        </Typography>
      </Paper>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            maxWidth: "300px",
          }}
        >
          Acheter
        </button>
      </Box>
    </Stack>
  );
}
