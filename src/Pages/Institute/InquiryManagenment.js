
// import React, { useState } from "react";
// import {
//     Paper,
//     InputBase,
//     Divider,
//     IconButton,
//     Button,
//     Grid,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import "../../Styles/InquiryManagenment.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";

// const InquiryManagenment = () => {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({});
//     const tableHeaders = ["ID", "Studentname", "mo", "email", "Course_name"];
//     const tableData = [
//         { ID: 1, Studentname: "purvi", mo: "9876543245", email: 'purvinayak1999@gmail.com', Course_name: "React" },
//     ];
//     const fields = [
//         { label: "ID", name: "id", type: "number", required: true },
//         { label: "Studentname", name: "Studentname", type: "text", required: true },
//         { label: "mo", name: "mo", type: "number", required: true },
//         { label: "email", name: "email", required: true },
//         { label: "Course_name", name: "Course_name", required: true },
//     ];

//     const handleClickOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted:", formData);
//         setOpen(false);
//     };

//     const handleEdit = (rowData) => {
//         setFormData(rowData);
//         setOpen(true);
//     };

//     const handleDelete = (rowData) => {
//         console.log("Deleted row:", rowData);
//     };
//     return (
//         <div className="mainContain">
//             <div className="add-icon-container">
//                 <Grid container spacing={2} style={{ marginBottom: "20px" }}>
//                     <Grid item xs={2}>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             startIcon={<AddCircleIcon />}
//                             onClick={handleClickOpen}
//                         >

//                         </Button>
//                     </Grid>
//                     <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//                         <h1>InquiryManagement</h1>
//                     </Grid>
//                     <Grid item xs={3}>
//                         <Paper
//                             component="form"
//                             sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
//                         >
//                             <InputBase
//                                 placeholder="Search Course Name"
//                                 sx={{ ml: 1, flex: 1 }}
//                             />
//                             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                             <IconButton type="submit" sx={{ p: "10px" }}>
//                                 <SearchIcon />
//                             </IconButton>
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </div>
//             <CommanTable
//                 tableHeaders={tableHeaders}
//                 tabledata={tableData}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//             />

//             <CommanFormdialog
//                 open={open}
//                 onClose={handleClose}
//                 onSubmit={handleSubmit}
//                 fields={fields}
//                 onChange={handleChange}
//             />
//         </div>
//     );
// };

// export default InquiryManagenment;

import React, { useState, useEffect } from "react";
import { Paper, InputBase, Divider, IconButton, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";
import axios from "axios";

const tableHeaders = ["Inquiry ID", "Student Name", "Mobile No", "Email", "Course", "Action"];

const fields = [
  { label: "Inquiry ID", name: "InquiryID", type: "text" },
  { label: "Student Name", name: "StudentName", type: "text" },
  { label: "Mobile No", name: "MobileNo", type: "text" },
  { label: "Email", name: "Email", type: "email" },
  { label: "Course", name: "Course", type: "text" },
];

const InquiryManagement = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ InquiryID: "", StudentName: "", MobileNo: "", Email: "", Course: "" });
  const [tableData, setTableData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/institute/getInquiry");
      setTableData(response.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ InquiryID: "", StudentName: "", MobileNo: "", Email: "", Course: "" });
    setEditMode(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put('http://localhost:9000/institute/updateInquiry?id=${editingId}', formData);
      } 
      else {
        await axios.post("http://localhost:9000/institute/postInquiry", formData);
      }
      fetchTableData();
      handleClose();
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  const handleEdit = (rowData) => {
    setFormData(rowData);
    setEditingId(rowData._id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://localhost:9000/institute/deleteInquiry?id=${rowData._id}`);
      fetchTableData();
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  return (
    <div className="mainContain">
      <div className="add-icon-container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleClickOpen}>
              Add Inquiry
            </Button>
          </Grid>
          <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
            <h1>Inquiry Management</h1>
          </Grid>
          <Grid item xs={3}>
            <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 400 }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Inquiry" />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <CommanTable
        tableHeaders={tableHeaders}
        tabledata={tableData.map((item) => ({
          ID: item._id,
          inquiryID: item.InquiryID,
          studentName: item.StudentName,
          mobileNo: item.MobileNo,
          email: item.Email,
          course: item.Course,
          action: (
            <>
              <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Edit</Button>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(item)}>Delete</Button>
            </>
          ),
        }))}
      />

      <CommanFormdialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        fields={fields}
        onChange={handleChange}
        formData={formData}
        editMode={editMode}
      />
    </div>
  );
};

export default InquiryManagement;