import * as React from "react";
import { Box, Toolbar, IconButton, Typography, AppBar } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Link } from "react-router-dom";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <DirectionsBusIcon />
          </IconButton>
          <Typography my={2} variant="h4" color="inherit" component="div">
            <Link style={{textDecoration:'none', color:'white'}} to={'/'}>Student Routes Data</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
