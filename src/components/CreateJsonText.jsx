import React from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";

const CreateJsonText = () => {
  const styles = {
    backgroundColor: "transparent",
    color: "white",
    borderRadius: 10,
    minWidth:'97%',
    maxWidth: '97%',
    border: "1px solid white",
    padding: '10px 0 0 3%',
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Box>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <TextareaAutosize minRows={7} style={styles} />
    </Box>
  );
};

export default CreateJsonText;
