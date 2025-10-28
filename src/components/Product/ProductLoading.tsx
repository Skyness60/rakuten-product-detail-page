"use client";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export default function ProductLoading() {
  return (
    <Box>
      <Skeleton variant="text" width={240} height={24} sx={{ mb: 2 }} />

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: 2 }}
            width="100%"
            height={360}
          />
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {[1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={64}
                height={64}
                sx={{ borderRadius: 2, flexShrink: 0 }}
              />
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Skeleton variant="text" width="80%" height={32} />
          <Skeleton variant="text" width="40%" height={24} />
          <Skeleton variant="rectangular" width="60%" height={88} sx={{ borderRadius: 2, my: 2 }} />
          <Skeleton variant="text" width="90%" height={16} />
          <Skeleton variant="text" width="85%" height={16} />
          <Skeleton variant="text" width="80%" height={16} />
        </Grid>
      </Grid>

      <Skeleton variant="text" width="30%" height={24} sx={{ mt: 4 }} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="95%" height={16} />
      <Skeleton variant="text" width="98%" height={16} />
    </Box>
  );
}
