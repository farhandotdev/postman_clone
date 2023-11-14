import React,{useState} from "react";
import {TableRow, TableCell, TableBody, Checkbox, TextField } from "@mui/material";


const AddRow = ({addRow, rowId}) => {
  const [checkCheckedBox, setCheckCheckedBox] = useState(false);

  const handleChange = (e) =>{
    if(!checkCheckedBox){
      setCheckCheckedBox(true)
      addRow(oldArr=>[...oldArr, rowId])
    }
    else{
      setCheckCheckedBox(false)
    }
  }


  return (
      <TableRow>
        <TableCell style={{border:'1px solid white',color: "white" }}>
            <Checkbox
                size="large"
                style={{color:'white', padding:'2px 5px'}}
                checked={checkCheckedBox}
                onChange={(e)=>handleChange(e)}
            />
        </TableCell>
        <TableCell style={{border:'1px solid white',color: "white" }}>
            <TextField
                style={{width:'100%', border:'1px solid white'}}
                inputProps={{style:{height: 30, padding:'0 5px'}}}
            />
        </TableCell>
        <TableCell style={{border:'1px solid white',color: "white" }}>
        <TextField
                style={{width:'100%', border:'1px solid white'}}
                inputProps={{style:{height: 30, padding:'0 5px'}}}
            />
        </TableCell>
      </TableRow>
  );
};

export default AddRow;
