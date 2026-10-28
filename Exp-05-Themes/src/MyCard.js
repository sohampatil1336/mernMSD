import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MyCard() {
  return (
    <Card sx={{ maxWidth: 400, mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Theme Card Component
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          This card demonstrates theme styles with custom palette and typography.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
