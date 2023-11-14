import React, {useContext} from "react";
import "../App.css";
import { Box, Select, MenuItem, TextField, Button } from "@mui/material";

import { DataContext } from "../contexts/DataProvider";

const Form = () => {
  const {formData, setFormData} = useContext(DataContext);

  const handleChange = (e) => {
    setFormData({...formData, type:e.target.value})
  }

  return (
      <Box className='dropdown'>
        <Select
          style={{width: 120, fontWeight:'bold'}}
          value={formData.type}
          label='Get'
          className="select"
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem style={{backgroundColor:'goldenrod'}} className="m1" value={'Get'}>GET</MenuItem>
          <MenuItem style={{backgroundColor:'green'}} className="m2" value={'Post'}>POST</MenuItem>
          <MenuItem style={{backgroundColor:'rgb(0, 170, 255)'}} className="m3" value={'Patch'}>PATCH</MenuItem>
          <MenuItem style={{backgroundColor:'red'}} className="m4" value={'Delete'}>DELETE</MenuItem>
        </Select>
        <TextField className="textfield" placeholder="https://localhost:0.0.0:1" style={{marginLeft: 2}} />
        <Button className="button" variant="contained" color="success" size='large' style={{marginLeft: 5}}>Send</Button>
      </Box>
  );
};

export default Form;
