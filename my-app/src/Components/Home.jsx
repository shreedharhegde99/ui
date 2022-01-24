import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Paper, ImageListItem } from "@mui/material";
import styled from "styled-components"

const Image = styled.img`
max-height:300px;
max-width:300px;

`





function HomePage() {
  const[width,setWidth]=useState(window.innerWidth)
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  return (
    <>
      {/* heading area */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ background: "white" }}>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <img
                src="https://zerodha.com/static/images/logo.svg"
                alt="Zerodha"
                style={{ height: "20px", width: "150px" }}
              />
            </Typography>
            <Typography color="secondary">{width}px</Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon color="info" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      {/* body area */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={0} sm={0} lg={3}></Grid>
          <Grid xs={12} lg={6}>
            
              <Image
                src="	https://zerodha.com/static/images/landing.png"
                alt="No.1 Broker in India"
               
              />
          </Grid>
          <Grid xs={0} sm={0} lg={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}



export default HomePage;
