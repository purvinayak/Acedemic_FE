
// import React, { useState } from 'react';
// import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CommanTable from '../../Components/CommanTable';
// import CommanFormdialog from '../../Components/CommanFormdialog';
// import '../../Styles/CourseManagenment.css';

// const CourseManagenment = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
  
//   const tableHeaders = ["BatchID", "Course (Batch)", "Duration (Months)", "Start Time", "End Time", "Action"];
//   const tabledata = [
//     { batchid: "101", course: "Math", duration: "6", start_time: "08:00", end_time: "10:00" },
//     { batchid: "102", course: "Science", duration: "6", start_time: "10:00", end_time: "12:00" },
//   ];

//   const fields = [
//     { label: "BatchID", name: "batchid", required: true },
//     { label: "Course (Batch)", name: "course", required: true },
//     { label: "Duration (Months)", name: "duration", type: "number", required: true },
//     { label: "Start Time", name: "start_time", type: "time", required: true },
//     { label: "End Time", name: "end_time", type: "time", required: true },
//   ];

//   const handleEdit = (row) => {
//     setFormData(row);
//     setOpen(true);
//   };

//   const handleDelete = (row) => {
//     console.log("Delete", row);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(Data => ({ ...Data, [name]: value }));
//   };

//   const handleSubmit = (e) => {
 
//     console.log("Form Data:", formData);
//     handleClose();
//   };

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button color="primary" variant="contained" aria-label="add" onClick={() => setOpen(true)}>
//               <AddCircleIcon />
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
//             <h1 className="institute-manage-title">Courses Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
//               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Course Name" />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: '1px' }} aria-label="search">
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>

//       <CommanTable
//         tableHeaders={tableHeaders}
//         tabledata={tabledata}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//       <CommanFormdialog
//         open={open}
//         onClose={handleClose}
//         onSubmit={handleSubmit}
//         fields={fields}
       
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
// export default CourseManagenment;


import React, { useState } from "react";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../Styles/CourseManagenment.css";
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";

const CourseManagenment = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});                           
  const tableHeaders = ["ID", "Course Name", "Duration", "Fees", "Action"];
  const tableData = [
    { ID: 1, CourseName: "Course1", Duration: "1 Year", Fees: "10000" },
  ];
  const fields = [
    { label: "ID", name: "id", type: "number" },
    { label: "Course Name", name: "courseName", type: "text" },
    { label: "Duration", name: "duration", type: "text" },
    { label: "Fees", name: "fees", type: "number" },
  ];

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
  };

  const handleEdit = (rowData) => {
    setFormData(rowData);
    setOpen(true);
  };

  const handleDelete = (rowData) => {
    console.log("Deleted row:", rowData);
  };
  return (
    <div className="mainContain">
      <div className="add-icon-container">
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={handleClickOpen}
          >
            
          </Button>
        </Grid>
        <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
          <h1>CourseManagement</h1>
        </Grid>
        <Grid item xs={3}>
          <Paper
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
          >
            <InputBase
              placeholder="Search Course Name"
              sx={{ ml: 1, flex: 1 }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
            <IconButton type="submit" sx={{ p: "10px" }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      </div>
      <CommanTable
        tableHeaders={tableHeaders}
        tabledata={tableData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CommanFormdialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        fields={fields}
        onChange={handleChange}
      />
    </div>
  );
};

export default CourseManagenment;