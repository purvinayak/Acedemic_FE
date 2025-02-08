import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const CommanTable = ({ tableHeaders, tabledata, onEdit, onDelete}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table with headers and actions">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell key={index} align="center">{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
            <TableCell align="right">{row.batchid}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.start_time}</TableCell>
              <TableCell align="right">{row.end_time}</TableCell>
          
     
                     <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onEdit(row)}
                  style={{ marginRight: 8 }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => onDelete(row)}
                >
                  Delete
                </Button>
             
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommanTable;