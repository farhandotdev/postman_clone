import React, { useState } from "react";
import "../App.css";
import { Box, Tabs, Tab } from "@mui/material";
import CreateTable from "./CreateTable";
import CreateJsonText from "./CreateJsonText";

const SelectTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="selectTab">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="white"
        TabIndicatorProps={{
          sx: { backgroundColor: "#f26b3a", height: 4, bottom: 2},
        }}
      >
        <Tab label="Params" style={{fontWeight:'bold', letterSpacing:1, textTransform:'none'}}/>
        <Tab label="Headers" style={{fontWeight:'bold',letterSpacing:1,textTransform:'none'}}/>
        <Tab label="Body" style={{fontWeight:'bold',letterSpacing:1,textTransform:'none'}}/>
      </Tabs>
      <Box role="tabpanel" hidden={value !== 0}>
        <CreateTable text={'Query Params'}/>
      </Box>
      <Box role="tabpanel" hidden={value !== 1}>
        <CreateTable text={'Headers'}/>
      </Box>
      <Box role="tabpanel" hidden={value !== 2}>
        <CreateJsonText/>
      </Box>
    </Box>
  );
};

export default SelectTab;
