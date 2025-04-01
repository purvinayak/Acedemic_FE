// // import React, { useState } from 'react';
// // import { Paper, InputBase, Divider, IconButton, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControlLabel, Checkbox } from '@mui/material';
// // import '../../Styles/BatchManagement.css'
// // import SearchIcon from '@mui/icons-material/Search';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // import BatchManagementTable from '../../Components/BatchManageTable';
// // import CommanTable from '../../Components/CommanTable';

// // const BatchManagement = () => {
// //   const [open, setOpen] = useState(false);
// //   const [formData, setFormData] = useState({});
// //   const tableHeaders=["id","Course Name","Duretion","Fees","Action"]
// //   const tableData = [
// //     { id: 1, CourseName: "Course1", Duration: "1 Year",
// //       Fees: "10000", Action: "View" },
// //   ]
// // const fields=[
// //   {label:"Id",name:"id",type:"number"},
// //   {label:"Course Name",name:"CourseName",type:"text"},
// //   {label:"Duration",name:"Duration",type:"text"},
// //   {label:"Fees",name:"Fees",type:"number"},

// // ]
// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleCheckboxChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       isActive: e.target.checked
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     handleClose(); 
// //   };

// //   return (
// //     <>
// //     <div className="mainContain">
// //       {/* Second row: Button */}
// //       <div className="add-icon-container" >
// //         <Grid container spacing={2}>
// //           <Grid item xs={2}>
// //             <Button color="primary" variant="contained" aria-label="add" onClick={handleClickOpen}>
// //               <AddCircleIcon/>
// //             </Button>
// //           </Grid>
// //           <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
// //             <h1 className="institute-manage-title"> BatchesManagement</h1>
// //           </Grid>
// //           <Grid item xs={3}>
// //             <div className='institute-manage-search'>
// //               <Paper
// //                 component="form"
// //                 sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
// //               >
// //                 <InputBase
// //                   sx={{ ml: 1, flex: 1 }}
// //                   placeholder="Search CourseName"
// //                   inputProps={{ 'aria-label': 'search CourseName' }}
// //                 />
// //                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
// //                 <IconButton color="primary" sx={{ p: '10px' }} aria-label="search">
// //                   <SearchIcon/>
// //                 </IconButton>
// //               </Paper>
// //             </div>
// //           </Grid>
// //         </Grid>
// //       </div>

// //       {/* Third row: Institute Table */}
// //       <div className="institute-table-container" style={{ marginTop: '20px' }}>
// //       <CommanTable
// //           tableHeaders={tableHeaders}
// //           tabledata={tableData}
// //           onEdit={handleEdit}
// //           onDelete={handleDelete}
// //         />
// //           <CommanFormdialog
// //           open={open}
// //           onClose={handleClose}
// //           onSubmit={handleSubmit}
// //           fields={fields}
// //           onChange={handleChange}
// //         />
// //       </div>

// //       {/* Dialog for adding Institute */}
      
// //       </div>
// //     </>
// //   );
// // };

// // export default BatchManagement;

// // import React, { useState } from "react";
// // import {
// //   Paper,
// //   InputBase,
// //   Divider,
// //   IconButton,
// //   Button,
// //   Grid,
// // } from "@mui/material";
// // import SearchIcon from "@mui/icons-material/Search";
// // import AddCircleIcon from "@mui/icons-material/AddCircle";
// // import "../../Styles/BatchManagement.css";
// // import CommanTable from "../../Components/CommanTable";
// // import CommanFormdialog from "../../Components/CommanFormdialog";

// // const BatchManagement = () => {
// //   const [open, setOpen] = useState(false);
// //   const [formData, setFormData] = useState({});
// //   const tableHeaders = ["ID", "Course Name", "Duration", "Fees", "Action"];
// //   const tableData = [
// //     { ID: 1, CourseName: "Course1", Duration: "1 Year", Fees: "10000" },
// //   ];
// //   const fields = [
// //     { label: "ID", name: "id", type: "number" },
// //     { label: "Course Name", name: "courseName", type: "text" },
// //     { label: "Duration", name: "duration", type: "text" },
// //     { label: "Fees", name: "fees", type: "number" },
// //   ];

// //   const handleClickOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     setOpen(false);
// //   };

// //   const handleEdit = (rowData) => {
// //     setFormData(rowData);
// //     setOpen(true);
// //   };

// //   const handleDelete = (rowData) => {
// //     console.log("Deleted row:", rowData);
// //   };

// //   return (
// //     <div>
// //       <Grid container spacing={2} style={{ marginBottom: "20px" }}>
// //         <Grid item xs={2}>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             startIcon={<AddCircleIcon />}
// //             onClick={handleClickOpen}
// //           >
// //             Add Batch
// //           </Button>
// //         </Grid>
// //         <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
// //           <h1>BatchesManagement</h1>
// //         </Grid>
// //         <Grid item xs={3}>
// //           <Paper
// //             component="form"
// //             sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
// //           >
// //             <InputBase
// //               placeholder="Search Course Name"
// //               sx={{ ml: 1, flex: 1 }}
// //             />
// //             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
// //             <IconButton type="submit" sx={{ p: "10px" }}>
// //               <SearchIcon />
// //             </IconButton>
// //           </Paper>
// //         </Grid>
// //       </Grid>

// //       <CommanTable
// //         tableHeaders={tableHeaders}
// //         tabledata={tableData}
// //         onEdit={handleEdit}
// //         onDelete={handleDelete}
// //       />

// //       <CommanFormdialog
// //         open={open}
// //         onClose={handleClose}
// //         onSubmit={handleSubmit}
// //         fields={fields}
// //         onChange={handleChange}
// //       />
// //     </div>
// //   );
// // };

// // export default BatchManagement;
// import React, { useState } from 'react';
// import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CommanTable from '../../Components/CommanTable';
// import CommanFormdialog from '../../Components/CommanFormdialog';
// import '../../Styles/BatchManagement.css';

// const  PaymentManagment = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
  
//   const tableHeaders = ["StudentID","Student Name","MobileNo","Course","Duration (Months)","Recieve Payment","Left payment", "Action"];
//   const tabledata = [
//     {  studentId: "101", studentName:"nisha",mobileNo:"9742589561",course: "Math", duration: "6", recievePayment: "1000",  Leftpayment: "8000" },
//     {  studentId: "102", studentName:"purvi",mobileNo:"4258974125",course: "Science", duration: "6",  recievePayment: "2000",  Leftpayment: "7000" },
//   ];

//   const fields = [
//     { label: "StudentID", name: "studentId", required: true },
//     { label: "Student Name", name: "studentName", required: true },
//     { label: "MobileNo", name: "mobileNo", required: true }, 
//     { label: "Course (Batch)", name: "course", required: true },
//     { label: "Duration (Months)", name: "duration", type: "number", required: true },
//     { label: "Recieve Payment", name: "RecievedFees", type: "number", required: true },
//     { label: "Left payment", name: "RemainingFees", type: "number", required: true },
//   ];
//   // RecievedFees: "",
//   // RemainingFees
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
//             <h1 className="institute-manage-title">Payment Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
//               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
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
// export default PaymentManagment;