import React, { useState } from 'react';
import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CommanTable from '../../Components/CommanTable';
import CommanFormdialog from '../../Components/CommanFormdialog';
//import '../../Styles/StudentManagment.css';

const  StudentManagment = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  
  const tableHeaders = ["StudentID", "Batch", "StudentName","MobileNo","Email","Course","Duration","Decided Fees","Action"];
  const tabledata = [
     {StudentID:"101",Batch:"A",StudentName:"Nisha",MobileNo:"942557878",Email:"n@gmail.com",Course:"node",Duration:"3 month",DecidedFees:"15500"},
     {StudentID:"101",Batch:"A",StudentName:"Nisha",MobileNo:"942557878",Email:"n@gmail.com",Course:"node",Duration:"3 month",DecidedFees:"15500"}
  ];

  const fields = [
    { label: "StudentID", name: "studentID", required: true },
    { label: "Batch", name: "batch", required: true },
    { label: "StudentName", name: "studentName", required: true },
    { label: "MobileNo", name: "mobileNo", required: true },
    { label: "Email", name: "Email", required: true },
    { label: "Course", name: "Course", required: true },
    { label: "Duration", name: "duration", type: "number", required: true },
    { label: "Decided Fees", name: "decided_fees", required: true },
  ];

  const handleEdit = (row) => {
    setFormData(row);
    setOpen(true);
    
  };

  const handleDelete = (row) => {
    console.log("Delete", row);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(Data => ({ ...Data, [name]: value }));
  };

  const handleSubmit = (e) => {
 
    console.log("Form Data:", formData);
    handleClose();
  };

  return (
    <div className="mainContain">
      <div className="add-icon-container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button color="primary" variant="contained" aria-label="add" onClick={() => setOpen(true)}>
              <AddCircleIcon />
            </Button>
          </Grid>
          <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="institute-manage-title">Student Management</h1>
          </Grid>
          <Grid item xs={3}>
            <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '1px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <CommanTable
        tableHeaders={tableHeaders}
        tabledata={tabledata}
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
}
export default StudentManagment;