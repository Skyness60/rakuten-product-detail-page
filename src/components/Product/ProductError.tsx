"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductError({ message }: { message: string }) {
  return (
    <Box sx={{ maxWidth: 480, mx: "auto", textAlign: "center", mt: 8 }}>
      <Alert severity="error" sx={{ mb: 2, textAlign: "left" }}>
        <Typography fontWeight={600} mb={0.5}>
          Oups, impossible de charger le produit.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </Alert>

      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.reload()}
        sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
      >
        Réessayer
      </Button>
    </Box>
  );
}
