import React from "react";
import logo from "../assets/postman-logo.png";
import farhan from "../assets/farhan.jpg";
import { Box, Typography } from "@mui/material";

import "../App.css";
const Header = () => {
  return (
    <>
      <Box className="header-container">
        <div className="header-main">
          <img src={logo} alt="logo" style={{ width: 200 }} />
          <h2>CLONE</h2>
        </div>
        <div className="header-connect">
          <Typography className="span">@farhandotdev</Typography>
          <img src={farhan} alt="Farhan" style={{ width: 60, borderRadius: 10 }}/>
        </div>
      </Box>
    </>
  );
};

export default Header;
