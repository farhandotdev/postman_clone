import React from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";
// import makeStyles from '@mui/styles/makeStyles';

// const useStyle = makeStyles({
//     error:{
//         width: '80%',
//         height: 'auto',
//         objectPosition: 'center 0%',
//         margin: 'auto'
//     }
// });
import errorImg from '../assets/postmanResImg.png';

const ErrorScreen = () => {
    // const classes = useStyle();

  return (
    <Box>
      <Typography mt={2} mb={2} style={{ color: "white" }}>
        Response
      </Typography>
      <Box>
        <img src={errorImg} alt="Error" style={{
            width: '100%',
            borderRadius:'20px',
            height: 'auto',
            objectPosition: 'center 0%',
            margin: 'auto'
        }}/>
      </Box>
    </Box>
  );
};

export default ErrorScreen;
