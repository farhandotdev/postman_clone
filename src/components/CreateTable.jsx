import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AddRow from "./AddRow";

const CreateTable = ({ text }) => {
  const [row, addRow] = useState([0]);

  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table
        sx={{ minWidth: "100%", border: "1px solid white" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              style={{ color: "white", border: "1px solid white", padding: 16 }}
            ></TableCell>
            <TableCell
              style={{ color: "white", border: "1px solid white", padding: 16 }}
            >
              KEY
            </TableCell>
            <TableCell
              style={{ color: "white", border: "1px solid white", padding: 16 }}
            >
              VALUE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((r, index) => {
            <AddRow addRow={addRow} rowId={index} key={index} />;
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
