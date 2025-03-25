// import React, { useState } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Fab,
//   Grid,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";

// const tableHeaders = [
//   "Name",
//   "Mobile No",
//   "isActive",
//   "Date",
//   "Email",
//   "Address",
//   "Action",
// ];
// const tableData = [
//   {
//     Name: "John",
//     MobileNo: "1234567890",
//     isActive: true,
//     Date: "2022-01-01",
//     Email: "john@example.com",
//     Address: "123, ABC Street, XYZ City",
//   },
// ];

// const fields = [
//   { label: "Name", name: "name", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "number" },
//   { label: "Email", name: "email", type: "email" },
//   { label: "Address", name: "address", type: "text" },
//   { label: "Active Status", name: "isActive", type: "checkbox" },
// ];

// const InstituteManage = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     MobileNo: "",
//     email: "",
//     address: "",
//     isActive: false,
//   });

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     handleClose();
//   };

//   const handleEdit = (rowData) => {
//     console.log("Edit action for:", rowData);
//     setFormData(rowData);
//     setOpen(true);
//   };

//   const handleDelete = (rowData) => {
//     console.log("Delete action for:", rowData);
//   };

//   return (
//     <>
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="institute-manage-title">Institute Manage</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="institute-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Institute"
//                   inputProps={{ "aria-label": "search Institutes" }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>3
//       </div>

//       <div className="institute-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//         <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//         />
//       </div>
//     </>
//   );
// };

// export default InstituteManage;


// // import React, { useState, useEffect } from "react";
// // import {
// //   Paper,
// //   InputBase,
// //   Divider,
// //   IconButton,
// //   Fab,
// //   Grid,
// // } from "@mui/material";
// // import AddIcon from "@mui/icons-material/Add";
// // import SearchIcon from "@mui/icons-material/Search";
// // import "../../Styles/InstituteManage.css";
// // import CommanTable from "../../Components/CommanTable";
// // import CommanFormdialog from "../../Components/CommanFormdialog";
// // import axios from "axios";

// // const tableHeaders = [
// //   "Name",
// //   "Mobile No",
// //   "isActive",
// //   "Date",
// //   "Email",
// //   "Address",
// //   "Action",
// // ];

// // const fields = [
// //   { label: "Name", name: "name", type: "text" },
// //   { label: "Mobile No", name: "MobileNo", type: "number" },
// //   { label: "Email", name: "email", type: "email" },
// //   { label: "Address", name: "Address", type: "text" },
// //   { label: "Active Status", name: "isActive", type: "checkbox" },
// // ];

// // const InstituteManage = () => {
// //   const [open, setOpen] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     MobileNo: "",
// //     email: "",
// //     Address: "",
// //     isActive: false,
// //   });
// //   const [tableData, setTableData] = useState([]);

// //   // Fetch data from backend
// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get("/getAdmin_Institute");
// //       setTableData(response.data.data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const handleClickOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === "checkbox" ? checked : value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post("/postAdmin_Institute", formData);
// //       fetchData(); // Refresh data
// //       handleClose();
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //     }
// //   };

// //   const handleEdit = (rowData) => {
// //     setFormData(rowData);
// //     setOpen(true);
// //   };

// //   const handleUpdate = async () => {
// //     try {
// //       await axios.put(`/updateAdmin_Institute?id=${formData._id}`, formData);
// //       fetchData(); // Refresh data
// //       handleClose();
// //     } catch (error) {
// //       console.error("Error updating data:", error);
// //     }
// //   };

// //   const handleDelete = async (rowData) => {
// //     try {
// //       await axios.delete(`/deleteAdmin_Institute?id=${rowData._id}`);
// //       fetchData(); // Refresh data
// //     } catch (error) {
// //       console.error("Error deleting data:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="add-icon-container">
// //         <Grid container spacing={2}>
// //           <Grid item xs={2}>
// //             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
// //               <AddIcon />
// //             </Fab>
// //           </Grid>
// //           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
// //             <h1 className="institute-manage-title">Institute Manage</h1>
// //           </Grid>
// //           <Grid item xs={3}>
// //             <div className="institute-manage-search">
// //               <Paper
// //                 component="form"
// //                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
// //               >
// //                 <InputBase
// //                   sx={{ ml: 1, flex: 1 }}
// //                   placeholder="Search Institute"
// //                   inputProps={{ "aria-label": "search Institutes" }}
// //                 />
// //                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
// //                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
// //                   <SearchIcon />
// //                 </IconButton>
// //               </Paper>
// //             </div>
// //           </Grid>
// //         </Grid>
// //       </div>

// //       <div className="institute-table-container" style={{ marginTop: "20px" }}>
// //         <CommanTable
// //           tableHeaders={tableHeaders}
// //           tabledata={tableData}
// //           onEdit={handleEdit}
// //           onDelete={handleDelete}
// //         />
// //         <CommanFormdialog
// //           open={open}
// //           onClose={handleClose}
// //           onSubmit={formData._id ? handleUpdate : handleSubmit}
// //           fields={fields}
// //           onChange={handleChange}
// //           formData={formData}
// //         />
// //       </div>
// //     </>
// //   );
// // };

// // export default InstituteManage;

// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Fab,
//   Grid,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = [
//   "Name",
//   "Mobile No",
//   "isActive",
//   "Date",
//   "Email",
//   "Address",
//   "Action",
// ];

// const fields = [
//   { label: "Name", name: "name", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "number" },
//   { label: "Email", name: "email", type: "email" },
//   { label: "Address", name: "Address", type: "text" },
//   { label: "Active Status", name: "isActive", type: "checkbox" },
// ];

// const InstituteManage = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     MobileNo: "",
//     email: "",
//     Address: "",
//     isActive: false,
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("/api/getAdmin_Institute");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       name: "",
//       MobileNo: "",
//       email: "",
//       Address: "",
//       isActive: false,
//     });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         // Update existing record
//         await axios.put(`/api/updateAdmin_Institute?id=${editingId}`, formData);
//       } else {
//         // Create new record
//         await axios.post("/api/postAdmin_Institute", formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving data:", err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData(rowData);
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`/api/deleteAdmin_Institute?id=${rowData._id}`);
//       fetchTableData();
//     } catch (err) {
//       console.error("Error deleting data:", err);
//     }
//   };

//   return (
//     <>
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="institute-manage-title">Institute Manage</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="institute-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Institute"
//                   inputProps={{ "aria-label": "search Institutes" }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       </div>

//       <div className="institute-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//         <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//         />
//       </div>
//     </>
//   );
// };

// export default InstituteManage;


// import React, { useState } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Button,
//   Grid,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";

// const InstituteManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const tableHeaders = ["Name", "Mo", "IsActive", "Date", "Email", "Address", "Action"];
//   const tableData = [
//     { name: "Arihant Class", mo: "1234567", isActive: true, date: "23/3/24", email: "purvi@1888", address: "" },
//   ];
//   const fields = [
//     { label: "Name", name: "name", type: "text" },
//     { label: "Mo", name: "mo", type: "text" },
//     { label: "Date", name: "date", type: "date" },
//     { label: "Email", name: "email", type: "email" },
//     { label: "Address", name: "address", type: "text" },
//     { label: "IsActive", name: "isActive", type: "checkbox" },
//   ];

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setOpen(false);
//   };

//   const handleEdit = (rowData) => {
//     setFormData(rowData);
//     setOpen(true);
//   };

//   const handleDelete = (rowData) => {
//     console.log("Deleted row:", rowData);
//   };

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2} style={{ marginBottom: "20px" }}>
//           <Grid item xs={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<AddCircleIcon />}
//               onClick={handleClickOpen}
//             >
//               Add
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1>Institute Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper
//               component="form"
//               sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
//             >
//               <InputBase
//                 placeholder="Search Institute Name"
//                 sx={{ ml: 1, flex: 1 }}
//               />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton type="submit" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//       <CommanTable
//         tableHeaders={tableHeaders}
//         tabledata={tableData}
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
// };

// export default InstituteManagement;

// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Button,
//   Grid,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const InstituteManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const tableHeaders = ["Name", "Mo", "IsActive", "Date", "Email", "Address", "Action"];
//   const fields = [
//     { label: "Name", name: "name", type: "text" },
//     { label: "Mo", name: "mo", type: "text" },
//     { label: "Date", name: "date", type: "date" },
//     { label: "Email", name: "email", type: "email" },
//     { label: "Address", name: "address", type: "text" },
//     { label: "IsActive", name: "isActive", type: "checkbox" },
//   ];
//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   const fetchInstitutes = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/admin/getAdmin_Institute");
//       setTableData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {

//       if (formData._id) {
//         await axios.put(`http://localhost:9000/admin/updateAdmin_Institute?id=${formData._id}`, formData);
//       } else {
//         await axios.post("http://localhost:9000/admin/postAdmin_Institute", formData);
//       }
//       fetchInstitutes();
//       setOpen(false);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };
//   const handleEdit = (rowData) => {
//     setFormData(rowData);
//     setOpen(true);
//   };
//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`http://localhost:9000/admin/deleteAdmin_Institute?id=${rowData._id}`);
//       fetchInstitutes();
//     } catch (error) {
//       console.error("Error deleting row:", error);
//     }
//   };
//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2} style={{ marginBottom: "20px" }}>
//           <Grid item xs={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<AddCircleIcon />}
//               onClick={handleClickOpen}
//             >
//               Add
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1>Institute Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper
//               component="form"
//               sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
//             >
//               <InputBase
//                 placeholder="Search Institute Name"
//                 sx={{ ml: 1, flex: 1 }}
//               />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton type="submit" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//       <CommanTable
//         tableHeaders={tableHeaders}
//         tabledata={tableData}
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
// };

// export default InstituteManagement;


//this is finalll code 
// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Button,
//   Grid,
//   Fab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = ["Name", "Mobile No", "Date", "Email", "Address", "isActive", "Action"];
// const fields = [
//   { label: "Name", name: "name", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "number" },
//   { label: "Date", name: "date", type: "date" },
//   { label: "Email", name: "email", type: "email" },
//   { label: "Address", name: "Address", type: "text" },
//   { label: "Active Status", name: "isActive", type: "checkbox" },
// ];

// const InstituteManage = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     MobileNo: "",
//     date: "",
//     email: "",
//     Address: "",
//     isActive: false,
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/admin/getAdmin_Institute");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       name: "",
//       MobileNo: "",
//       date: "",
//       email: "",
//       Address: "",
//       isActive: false,
//     });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("ppppp");
//     try {
//       if (editMode) {
//         // Update existing record
//         console.log("formData", formData);
//         console.log("jijijij");
//         await axios.put(`http://localhost:9000/admin/updateAdmin_Institute?id=${editingId}`, formData);
//       } else {
//         console.log("4534535");
//         // Create new record
//         await axios.post("http://localhost:9000/admin/postAdmin_Institute", formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving data:", err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData(rowData);
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`http://localhost:9000/admin/deleteAdmin_Institute?id=${rowData._id}`);
//       fetchTableData();
//     } catch (err) {
//       console.error("Error deleting data:", err);
//     }
//   };

//   return (
//     <>
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="institute-manage-title">Institute Manage</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="institute-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Institute"
//                   inputProps={{ "aria-label": "search Institutes" }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       </div>

//       <div className="institute-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           // tabledata={tableData}
//           tabledata={tableData.map((item) => ({
//             name: item.name,
//             MobileNo: item.MobileNo,
//             date: new Date(item.date).toLocaleDateString(),
//             email: item.email,
//             Address: item.Address,
//             isActive: item.isActive ? "Yes" : "No",
//             _id: item._id,
//           }))}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//         <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//           formData={formData}
//         />
//       </div>
//     </>
//   );
// };

// export default InstituteManage;





// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Button,
//   Grid,
//   Fab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = ["Name", "Mobile No", "Date", "Email", "Address", "isActive", "Action"];
// const fields = [
//   { label: "Name", name: "name", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "number" },
//   { label: "Date", name: "date", type: "date" },
//   { label: "Email", name: "email", type: "email" },
//   { label: "Address", name: "Address", type: "text" },
//   { label: "Active Status", name: "isActive", type: "checkbox" },
// ];

// const InstituteManage = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     MobileNo: "",
//     date: "",
//     email: "",
//     Address: "",
//     isActive: false,
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/admin/getAdmin_Institute");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       name: "",
//       MobileNo: "",
//       date: "",
//       email: "",
//       Address: "",
//       isActive: false,
//     });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/admin/updateAdmin_Institute?id=${editingId}`, formData);
//       } else {
//         await axios.post("http://localhost:9000/admin/postAdmin_Institute", formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving data:", err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData({
//       name: rowData.name,
//       MobileNo: rowData.MobileNo,
//       date: new Date(rowData.date).toISOString().split('T')[0],
//       email: rowData.email,
//       Address: rowData.Address,
//       isActive: rowData.isActive,
//     });
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`http://localhost:9000/admin/deleteAdmin_Institute?id=${rowData._id}`);
//       fetchTableData();
//     } catch (err) {
//       console.error("Error deleting data:", err);
//     }
//   };

//   return (
//     <>
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="institute-manage-title">Institute Manage</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="institute-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Institute"
//                   inputProps={{ "aria-label": "search Institutes" }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       </div>

//       <div className="institute-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData.map((item) => ({
//             name: item.name,
//             MobileNo: item.MobileNo,
//             date: new Date(item.date).toLocaleDateString(),
//             email: item.email,
//             Address: item.Address,
//             isActive: item.isActive ? "Yes" : "No",
//             action: (
//               <>
//                 <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Edit</Button>
//                 <Button variant="contained" color="secondary" onClick={() => handleDelete(item)}>Delete</Button>
//               </>
//             ),
//           }))}
//         />
//         <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//           formData={formData}
//         />
//       </div>
//     </>
//   );
// };

// export default InstituteManage;

// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Button,
//   Grid,
//   Fab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = ["Name", "Mobile No", "Date", "Email", "Address", "isActive", "Action"];
// const fields = [
//   { label: "Name", name: "name", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "number" },
//   { label: "Date", name: "date", type: "date" },
//   { label: "Email", name: "email", type: "email" },
//   { label: "Address", name: "Address", type: "text" },
//   { label: "Active Status", name: "isActive", type: "checkbox" },
// ];

// const InstituteManage = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     MobileNo: "",
//     date: "",
//     email: "",
//     Address: "",
//     isActive: false,
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/admin/getAdmin_Institute");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       name: "",
//       MobileNo: "",
//       date: "",
//       email: "",
//       Address: "",
//       isActive: false,
//     });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/admin/updateAdmin_Institute?id=${editingId}`, formData);
//       } else {
//         await axios.post("http://localhost:9000/admin/postAdmin_Institute", formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving data:", err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData({
//       name: rowData.name,
//       MobileNo: rowData.MobileNo,
//       date: new Date(rowData.date).toISOString().split('T')[0],
//       email: rowData.email,
//       Address: rowData.Address,
//       isActive: rowData.isActive,
//     });
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`http://localhost:9000/admin/deleteAdmin_Institute?id=${rowData._id}`);
//       fetchTableData();
//     } catch (err) {
//       console.error("Error deleting data:", err);
//     }
//   };

//   return (
//     <>
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="institute-manage-title">Institute Manage</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="institute-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Institute"
//                   inputProps={{ "aria-label": "search Institutes" }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       </div>

//       <div className="institute-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData.map((item) => ({
//             name: item.name,
//             MobileNo: item.MobileNo,
//             date: new Date(item.date).toLocaleDateString(),
//             email: item.email,
//             Address: item.Address,
//             isActive: item.isActive ? "Yes" : "No",
//             action: (
//               <>
//                 <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Edit</Button>
//                 <Button variant="contained" color="secondary" onClick={() => handleDelete(item)}>Delete</Button>
//               </>
//             ),
//           }))}
//         />
//         <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//           formData={formData}
//         />
//       </div>
//     </>
//   );
// };

// export default InstituteManag
// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   InputBase,
//   Divider,
//   IconButton,
//   Button,
//   Grid,
//   Fab,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
// import "../../Styles/InstituteManage.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = ["Name", "Mobile No", "Date", "Email", "Address", "isActive", "Action"];
// const fields = [
//   { label: "Name", name: "name", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "number" },
//   { label: "Date", name: "date", type: "date" },
//   { label: "Email", name: "email", type: "email" },
//   { label: "Address", name: "Address", type: "text" },
//   { label: "Active Status", name: "isActive", type: "checkbox" },
// ];

// const InstituteManage = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     MobileNo: "",
//     date: "",
//     email: "",
//     Address: "",
//     isActive: false,
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/admin/getAdmin_Institute");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       name: "",
//       MobileNo: "",
//       date: "",
//       email: "",
//       Address: "",
//       isActive: false,
//     });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/admin/updateAdmin_Institute?id=${editingId}`, formData);
//       } else {
//         await axios.post("http://localhost:9000/admin/postAdmin_Institute", formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving data:", err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData({
//       name: rowData.name,
//       MobileNo: rowData.MobileNo,
//       date: new Date(rowData.date).toISOString().split('T')[0],
//       email: rowData.email,
//       Address: rowData.Address,
//       isActive: rowData.isActive,
//     });
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`http://localhost:9000/admin/deleteAdmin_Institute?id=${rowData._id}`);
//       fetchTableData();
//     } catch (err) {
//       console.error("Error deleting data:", err);
//     }
//   };

//   return (
//     <>
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="institute-manage-title">Institute Manage</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="institute-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Institute"
//                   inputProps={{ "aria-label": "search Institutes" }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
//                   <SearchIcon />
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       </div>

//       <div className="institute-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData.map((item) => ({
//             name: item.name,
//             MobileNo: item.MobileNo,
//             date: new Date(item.date).toLocaleDateString(),
//             email: item.email,
//             Address: item.Address,
//             isActive: item.isActive ? "Yes" : "No",
//             action: (
//               <>
//                 <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Edit</Button>
//                 <Button variant="contained" color="secondary" onClick={() => handleDelete(item)}>Delete</Button>
//               </>
//             ),
//           }))}
//         />
//         <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//           formData={formData}
//         />
//       </div>
//     </>
//   );
// };

// export default InstituteManage;
import React, { useState, useEffect } from "react";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  Button,
  Grid,
  Fab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "../../Styles/InstituteManage.css";
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";
import axios from "axios";

const tableHeaders = ["Name", "Mobile No", "Date", "Email", "Address", "isActive", "Action"];
const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Mobile No", name: "MobileNo", type: "number" },
  { label: "Date", name: "date", type: "date" },
  { label: "Email", name: "email", type: "email" },
  { label: "Address", name: "Address", type: "text" },
  { label: "Active Status", name: "isActive", type: "checkbox" },
];

const InstituteManage = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    MobileNo: "",
    date: "",
    email: "",
    Address: "",
    isActive: false,
  });
  const [tableData, setTableData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/admin/getAdmin_Institute");
      setTableData(response.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      name: "",
      MobileNo: "",
      date: "",
      email: "",
      Address: "",
      isActive: false,
    });
    setEditMode(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:9000/admin/updateAdmin_Institute?id=${editingId}`, formData);
        alert("Data Updated Successfully");
        setEditMode(false);
        handleClose();

      } else {
        await axios.post("http://localhost:9000/admin/postAdmin_Institute", formData);
      }
      fetchTableData();
      handleClose();
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  const handleEdit = (rowData) => {
    setFormData({
      name: rowData.name,
      MobileNo: rowData.MobileNo,
      date: new Date(rowData.date).toISOString().split('T')[0],
      email: rowData.email,
      Address: rowData.Address,
      isActive: rowData.isActive,
    });
    setEditingId(rowData._id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://localhost:9000/admin/deleteAdmin_Institute?id=${rowData._id}`);
      fetchTableData();
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  return (
    <>
      <div className="add-icon-container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="institute-manage-title">Institute Manage</h1>
          </Grid>
          <Grid item xs={3}>
            <div className="institute-manage-search">
              <Paper
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Institute"
                  inputProps={{ "aria-label": "search Institutes" }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="institute-table-container" style={{ marginTop: "20px" }}>
        <CommanTable
          tableHeaders={tableHeaders}
          tabledata={tableData.map((item) => ({
            name: item.name,
            MobileNo: item.MobileNo,
            date: new Date(item.date).toLocaleDateString(),
            email: item.email,
            Address: item.Address,
            isActive: item.isActive ? "Yes" : "No",
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
    </>
  );
};

export default InstituteManage;