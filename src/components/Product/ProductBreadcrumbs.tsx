"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function ProductBreadcrumbs({ breadcrumbs }: { breadcrumbs: string[] }) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ fontSize: { xs: 12, md: 14 }, flexWrap: "wrap" }}
    >
      {breadcrumbs.slice(0, -1).map((crumb, i) => (
        <Link
          key={i}
          underline="hover"
          color="inherit"
          href="#"
          sx={{ fontSize: "inherit" }}
        >
          {crumb}
        </Link>
      ))}
      <Typography color="text.primary" sx={{ fontSize: "inherit", fontWeight: 500 }}>
        {breadcrumbs[breadcrumbs.length - 1]}
      </Typography>
    </Breadcrumbs>
  );
}
