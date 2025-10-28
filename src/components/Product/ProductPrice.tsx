"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  original: number;
  discounted?: number;
  currency: string;
};

const formatPrice = (value: number, currency: string) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(value);

export default function ProductPrice({ original, discounted, currency }: Props) {
  const showDiscount = discounted !== undefined && discounted < original;

  return (
    <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap" }}>
      {showDiscount ? (
        <>
          <Typography variant="h4" component="span" fontWeight={600} color="primary.main">
            {formatPrice(discounted as number, currency)}
          </Typography>
          <Typography
            variant="body1"
            component="span"
            color="text.disabled"
            sx={{ textDecoration: "line-through" }}
          >
            {formatPrice(original, currency)}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color="success.main"
            fontWeight={600}
          >
            -{Math.round(((original - (discounted as number)) / original) * 100)}%
          </Typography>
        </>
      ) : (
        <Typography variant="h4" component="span" fontWeight={600}>
          {formatPrice(original, currency)}
        </Typography>
      )}
    </Box>
  );
}
