"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  const products = [
    { name: "Mattress", id: "11084451963" },
    { name: "Phone (bug)", id: "7758205598" },
    { name: "Gaming CD", id: "13060247469" },
    { name: "Monitor", id: "10735101964" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Rakuten Product Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        Select a product to view its details:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                textTransform: "none",
              }}
            >
              {product.name}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
