// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const CommanTable = ({ tableHeaders, tabledata, onEdit, onDelete}) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="dynamic table with headers and actions">
//         <TableHead>
//           <TableRow>
//             {tableHeaders.map((header, index) => (
//               <TableCell key={index} align="center">{header}</TableCell>
//             ))}
//           </TableRow>
          
//         </TableHead>
//         <TableBody>
//           {tabledata.map((row, rowIndex) => (
//             <TableRow key={rowIndex}>
//             <TableCell align="right">{row.batchid}</TableCell>
//               <TableCell align="right">{row.course}</TableCell>
//               <TableCell align="right">{row.duration}</TableCell>
//               <TableCell align="right">{row.start_time}</TableCell>
//               <TableCell align="right">{row.end_time}</TableCell>

//                      <Button
//                   variant="contained"
//                   color="primary"
//                   size="small"
//                   onClick={() => onEdit(row)}
//                   style={{ marginRight: 8 }}
//                 >
//                   Edit
//                 </Button>

//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="small"
//                   onClick={() => onDelete(row)}
//                 >
//                   Delete
//                 </Button>
             
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CommanTable;

// import React from 'react';
// import '../Styles/Commantable.css'
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const CommanTable = ({ tableHeaders, tabledata, onEdit, onDelete}) => {
//   return (
//     <TableContainer component={Paper} >
//       <Table  aria-label="dynamic table with headers and actions" className='container'>
//         <TableHead className='header_main'>
//           <TableRow>
//             {tableHeaders.map((header, index) => (
//               <TableCell key={index}>{header}</TableCell>
//             ))}
//           </TableRow>
          
//         </TableHead>
//         <TableBody >
//           {tabledata.map((row, rowIndex) => (
//             <TableRow key={rowIndex} >
//             <TableCell className='sub_row'>{row.batchid}</TableCell>
//               <TableCell className='sub_row'>{row.course}</TableCell>
//               <TableCell className='sub_row'>{row.duration}</TableCell>
//               <TableCell className='sub_row'>{row.start_time}</TableCell>
//               <TableCell className='sub_row'>{row.end_time}</TableCell>

//                      <Button
//                      className='but'
//                   variant="contained"
//                   color="primary"
//                   size="small"
//                   onClick={() => onEdit(row)}

//                 >
//                   Edit
//                 </Button>

//                 <Button
//                 className='but'
//                   variant="contained"
//                   color="secondary"
//                   size="small"
//                   onClick={() => onDelete(row)}
//                 >
//                   Delete
//                 </Button>
             
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CommanTable;



import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../Styles/Commantable.css';

const CustomTable = ({ tableHeaders, tabledata }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom table with headers and actions" className='container'>
        <TableHead className='header_main'>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(row).map((key, cellIndex) => (
                key !== 'action' && <TableCell key={cellIndex} className='sub_row'>{row[key]}</TableCell>
              ))}
              <TableCell className='sub_row'>
                {row.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;