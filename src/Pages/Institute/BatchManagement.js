// import React, { useState } from 'react';
// import { Paper, InputBase, Divider, IconButton, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControlLabel, Checkbox } from '@mui/material';
// import '../../Styles/BatchManagement.css'
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import BatchManagementTable from '../../Components/BatchManageTable';
// import CommanTable from '../../Components/CommanTable';

// const BatchManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const tableHeaders=["id","Course Name","Duretion","Fees","Action"]
//   const tableData = [
//     { id: 1, CourseName: "Course1", Duration: "1 Year",
//       Fees: "10000", Action: "View" },
//   ]
// const fields=[
//   {label:"Id",name:"id",type:"number"},
//   {label:"Course Name",name:"CourseName",type:"text"},
//   {label:"Duration",name:"Duration",type:"text"},
//   {label:"Fees",name:"Fees",type:"number"},

// ]
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({
//       ...formData,
//       isActive: e.target.checked
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     handleClose(); 
//   };

//   return (
//     <>
//     <div className="mainContain">
//       {/* Second row: Button */}
//       <div className="add-icon-container" >
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button color="primary" variant="contained" aria-label="add" onClick={handleClickOpen}>
//               <AddCircleIcon/>
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
//             <h1 className="institute-manage-title"> BatchesManagement</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className='institute-manage-search'>
//               <Paper
//                 component="form"
//                 sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search CourseName"
//                   inputProps={{ 'aria-label': 'search CourseName' }}
//                 />
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: '10px' }} aria-label="search">
//                   <SearchIcon/>
//                 </IconButton>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       </div>

//       {/* Third row: Institute Table */}
//       <div className="institute-table-container" style={{ marginTop: '20px' }}>
//       <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//           <CommanFormdialog
//           open={open}
//           onClose={handleClose}
//           onSubmit={handleSubmit}
//           fields={fields}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Dialog for adding Institute */}
      
//       </div>
//     </>
//   );
// };

// export default BatchManagement;

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
// import "../../Styles/BatchManagement.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";

// const BatchManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const tableHeaders = ["ID", "Course Name", "Duration", "Fees", "Action"];
//   const tableData = [
//     { ID: 1, CourseName: "Course1", Duration: "1 Year", Fees: "10000" },
//   ];
//   const fields = [
//     { label: "ID", name: "id", type: "number" },
//     { label: "Course Name", name: "courseName", type: "text" },
//     { label: "Duration", name: "duration", type: "text" },
//     { label: "Fees", name: "fees", type: "number" },
//   ];

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
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
//     <div>
//       <Grid container spacing={2} style={{ marginBottom: "20px" }}>
//         <Grid item xs={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddCircleIcon />}
//             onClick={handleClickOpen}
//           >
//             Add Batch
//           </Button>
//         </Grid>
//         <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//           <h1>BatchesManagement</h1>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper
//             component="form"
//             sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
//           >
//             <InputBase
//               placeholder="Search Course Name"
//               sx={{ ml: 1, flex: 1 }}
//             />
//             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//             <IconButton type="submit" sx={{ p: "10px" }}>
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </Grid>
//       </Grid>

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

// export default BatchManagement;
// import React, { useState } from 'react';
// import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CommanTable from '../../Components/CommanTable';
// import CommanFormdialog from '../../Components/CommanFormdialog';
// import '../../Styles/BatchManagement.css';

// const BatchManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
  
//   const tableHeaders = [ "Course (Batch)", "Duration (Months)", "Start Time", "End Time", "Action"];
//   const tabledata = [
//     { batchid: "101", course: "Math", duration: "6", start_time: "08:00", end_time: "10:00" },
//     { batchid: "102", course: "Science", duration: "6", start_time: "10:00", end_time: "12:00" },
//   ];

//   const fields = [
 
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
//             <h1 className="institute-manage-title">Batch Management</h1>
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
// export default BatchManagement;

// import React, { useState, useEffect } from "react";
// import {
//   Paper, InputBase, Divider, IconButton, Button, Grid,
//   Select, MenuItem, FormControl, InputLabel, Dialog,
//   DialogTitle, DialogContent, DialogActions, TextField,
//   Box, Chip,Checkbox, ListItemText
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import CommanTable from "../../Components/CommanTable";
// import axios from "axios";

// const BatchManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     batchName: "",
//     selectedCourse: "",
//     selectedStudents: [],
//     batchTime: "",
//     duration: ""
//   });
//   const [courses, setCourses] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [tableData, setTableData] = useState([]);

//   // Fetch courses and students on component mount
//   useEffect(() => {
//     fetchCourses();
//     fetchStudents();
//     fetchBatches();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getInstitute_Course");
//       setCourses(response.data.data);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     }
//   };
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       batchName: "",
//       selectedCourse: "",
//       selectedStudents: [],
//       batchTime: "",
//       duration: ""
//     });
//   };
//   const handleEdit = async (item) => {
//     setFormData({
//       ...item,
//       selectedCourse: item.selectedCourse || "",
//       selectedStudents: item.selectedStudents || []
//     });
//     setOpen(true);
//   };
//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getStudent");
//       setStudents(response.data.data);
//     } catch (err) {
//       console.error("Error fetching students:", err);
//     }
//   };

//   const fetchBatches = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getBatch");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching batches:", err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleStudentSelect = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       selectedStudents: e.target.value
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting batch data:", formData);
//       const response = await axios.post("http://localhost:9000/institute/postBatch", formData);
//       console.log("Batch created:", response.data);
//       fetchBatches();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving batch:", err);
//       alert("Error creating batch: " + err.message);
//     }
//   };
//   const handleDelete = async (item) => {
//     try {
//       await axios.delete(`http://localhost:9000/institute/deleteBatch?id=${item._id}`);
//       fetchBatches();
//       alert("Batch deleted successfully");
//     } catch (err) {
//       console.error("Error deleting batch:", err);
//       alert("Error deleting batch");
//     }
//   };



//   const BatchFormDialog = () => (

   

//     console.log('Selected course:', formData.selectedCourse); // Debug log
//   console.log('Available students:', availableStudents); // Debug log

//     <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//       <DialogTitle>{formData._id ? 'Edit Batch' : 'Create New Batch'}</DialogTitle>
//       <DialogContent>
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Batch Name"
//           name="batchName"
//           value={formData.batchName}
//           onChange={handleChange}
//           required
//         />

//         <FormControl fullWidth margin="normal" required>
//           <InputLabel>Select Course</InputLabel>
//           <Select
//             name="selectedCourse"
//             value={formData.selectedCourse}
//             onChange={handleChange}
//           >
//             {courses.map(course => (
//               <MenuItem key={course._id} value={course._id}>
//                 {course.Course_Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl fullWidth margin="normal">
//           <InputLabel>Select Students</InputLabel>
//           <Select
//             multiple
//             name="selectedStudents"
//             value={formData.selectedStudents}
//             onChange={handleStudentSelect}
//             renderValue={(selected) => (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                 {selected.map((studentId) => {
//                   const student = students.find(s => s._id === studentId);
//                   return student?.StudentName || '';
//                 }).join(', ')}
//               </Box>
//             )}
//           >
//            {availableStudents.map(student => (
//             <MenuItem key={student._id} value={student._id}>
//               <Checkbox checked={formData.selectedStudents.includes(student._id)} />
//               <ListItemText 
//                 primary={student.StudentName}
//                 secondary={`Email: ${student.Email}`}
//               />
//                 </MenuItem>
//               ))}
//           </Select>
//         </FormControl>

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Batch Time"
//           name="batchTime"
//           value={formData.batchTime}
//           onChange={handleChange}
//           required
//         />

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Duration"
//           name="duration"
//           value={formData.duration}
//           onChange={handleChange}
//           required
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button 
//           onClick={handleSubmit} 
//           variant="contained" 
//           color="primary"
//           disabled={!formData.batchName || !formData.selectedCourse || !formData.batchTime || !formData.duration}
//         >
//           {formData._id ? 'Update Batch' : 'Create Batch'}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button 
//               variant="contained" 
//               color="primary" 
//               startIcon={<AddCircleIcon />}
//               onClick={() => setOpen(true)}
//             >
//               Add Batch
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1>Batch Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 400 }}>
//               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Batch" />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>

//       <CommanTable
//         tableHeaders={[
//           "Batch Name",
//           "Course",
//           "Students",
//           "Time",
//           "Duration",
//           "Action"
//         ]}
//         tabledata={tableData.map((item) => ({
//           batchName: item.batchName,
//           course: item.selectedCourse?.Course_Name || '',
//           students: item.selectedStudents?.map(s => s.StudentName).join(', ') || '',
//           time: item.batchTime,
//           duration: item.duration,
//           action: (
//             <>
//               <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>
//                 Edit
//               </Button>
//               <Button variant="contained" color="secondary" onClick={() => handleDelete(item)}>
//                 Delete
//               </Button>
//             </>
//           ),
//         }))}
//       />

//       <BatchFormDialog />
//     </div>
//   );
// };

// export default BatchManagement;
///final code 
// import React, { useState, useEffect } from "react";
// import {
//   Paper, InputBase, Divider, IconButton, Button, Grid,
//   Select, MenuItem, FormControl, InputLabel, Dialog,
//   DialogTitle, DialogContent, DialogActions, TextField,
//   Box, Chip, Checkbox, ListItemText
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import CommanTable from "../../Components/CommanTable";
// import axios from "axios";

// const BatchManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     batchName: "",
//     selectedCourse: "",
//     selectedStudents: [],
//     batchTime: "",
//     duration: ""
//   });
//   const [courses, setCourses] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [tableData, setTableData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchCourses();
//     fetchStudents();
//     fetchBatches();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getInstitute_Course");
//       setCourses(response.data.data);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     }
//   };

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getStudent");
//       setStudents(response.data.data);
//     } catch (err) {
//       console.error("Error fetching students:", err);
//     }
//   };

//   const fetchBatches = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getBatch");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching batches:", err);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       batchName: "",
//       selectedCourse: "",
//       selectedStudents: [],
//       batchTime: "",
//       duration: ""
//     });
//   };

//   const handleEdit = (item) => {
//     setFormData({
//       ...item,
//       selectedCourse: item.selectedCourse || "",
//       selectedStudents: item.selectedStudents || []
//     });
//     setOpen(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => {
//       const newData = {
//         ...prev,
//         [name]: value
//       };
//       if (name === 'selectedCourse') {
//         newData.selectedStudents = [];
//       }
//       return newData;
//     });
//   };

//   const handleStudentSelect = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       selectedStudents: e.target.value
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Validate required fields
//       if (!formData.batchName || !formData.selectedCourse || !formData.batchTime || !formData.duration) {
//         alert("Please fill in all required fields");
//         return;
//       }
  
//       // Prepare payload
//       const payload = {
//         batchName: formData.batchName,
//         selectedCourse: formData.selectedCourse,
//         selectedStudents: formData.selectedStudents,
//         batchTime: formData.batchTime,
//         duration: formData.duration
//       };
  
//       // Make API call
//       if (formData._id) {
//         // Update existing batch
//         const response = await axios.put(
//           `http://localhost:9000/institute/updateBatch?id=${formData._id}`, 
//           payload
//         );
//         if (response.data.success) {
//           alert("Batch updated successfully!");
//         } else {
//           throw new Error(response.data.message || "Failed to update batch");
//         }
//       } else {
//         // Create new batch
//         const response = await axios.post(
//           "http://localhost:9000/institute/postBatch", 
//           payload
//         );
//         if (response.data.success) {
//           alert("Batch created successfully!");
//         } else {
//           throw new Error(response.data.message || "Failed to create batch");
//         }
//       }
  
//       // Refresh table data and close dialog
//       await fetchBatches();
//       handleClose();
  
//     } catch (err) {
//       console.error("Error saving batch:", err);
//       alert("Error: " + (err.response?.data?.message || err.message));
//     }
//   };
//   const handleStudentRemove = (studentId) => {
//     setFormData(prev => ({
//       ...prev,
//       selectedStudents: prev.selectedStudents.filter(id => id !== studentId)
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     if (!formData.batchName || !formData.selectedCourse || !formData.batchTime || !formData.duration) {
//   //       alert("Please fill in all required fields");
//   //       return;
//   //     }

//   //     const response = await axios.post("http://localhost:9000/institute/postBatch", formData);
//   //     alert("Batch created successfully!");
//   //     fetchBatches();
//   //     handleClose();
//   //   } catch (err) {
//   //     console.error("Error saving batch:", err);
//   //     alert("Error creating batch: " + (err.response?.data?.message || err.message));
//   //   }
//   // };

//   const handleDelete = async (item) => {
//     try {
//       await axios.delete(`http://localhost:9000/institute/deleteBatch?id=${item._id}`);
//       fetchBatches();
//       alert("Batch deleted successfully");
//     } catch (err) {
//       console.error("Error deleting batch:", err);
//       alert("Error deleting batch");
//     }
//   };

//   const filteredBatches = tableData.filter(batch =>
//     batch.batchName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredStudents = students.filter(student => 
//     student.Course === formData.selectedCourse || 
//     student.Course?._id === formData.selectedCourse
//   );

//   const BatchFormDialog = () => (
//     <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//       <DialogTitle>{formData._id ? 'Edit Batch' : 'Create New Batch'}</DialogTitle>
//       <DialogContent>
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Batch Name"
//           name="batchName"
//           value={formData.batchName}
//           onChange={handleChange}
//           required
//         />

//         <FormControl fullWidth margin="normal" required>
//           <InputLabel>Select Course</InputLabel>
//           <Select
//             name="selectedCourse"
//             value={formData.selectedCourse}
//             onChange={handleChange}
//           >
//             {courses.map(course => (
//               <MenuItem key={course._id} value={course._id}>
//                 {course.Course_Name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl fullWidth margin="normal">
//           <InputLabel>Select Students</InputLabel>
//           <Select
//             multiple
//             name="selectedStudents"
//             value={formData.selectedStudents}
//             onChange={handleStudentSelect}
//             renderValue={(selected) => (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                 {selected.map((studentId) => {
//                   const student = students.find(s => s._id === studentId);
//                   return student ? (
//                     <Chip 
//                       key={studentId} 
//                       label={student.StudentName} 
//                       onDelete={() => handleStudentRemove(studentId)}
//                     />
//                   ) : null;
//                 })}
//               </Box>
//             )}
//           >
//             {filteredStudents.map(student => (
//               <MenuItem key={student._id} value={student._id}>
//                 <Checkbox 
//                   checked={formData.selectedStudents.includes(student._id)}
//                 />
//                 <ListItemText 
//                   primary={student.StudentName}
//                   secondary={`Email: ${student.Email}`}
//                 />
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Batch Time"
//           name="batchTime"
//           value={formData.batchTime}
//           onChange={handleChange}
//           required
//         />

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Duration"
//           name="duration"
//           value={formData.duration}
//           onChange={handleChange}
//           required
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button 
//           onClick={handleSubmit} 
//           variant="contained" 
//           color="red"
//           disabled={!formData.batchName || !formData.selectedCourse || !formData.batchTime || !formData.duration}
//         >
//           {formData._id ? 'Update Batch' : 'Create Batch'}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button 
//               variant="contained" 
//               color="primary" 
//               startIcon={<AddCircleIcon />}
//               onClick={() => setOpen(true)}
//             >
//               Add Batch
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1>Batch Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 400 }}>
//               <InputBase 
//                 sx={{ ml: 1, flex: 1 }} 
//                 placeholder="Search Batch" 
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>

//       <CommanTable
//         tableHeaders={[
//           "Batch Name",
//           "Course",
//           "Students",
//           "Time",
//           "Duration",
//           "Action"
//         ]}
//         tabledata={filteredBatches.map((item) => ({
//           batchName: item.batchName,
//           course: item.selectedCourse?.Course_Name || '',
//           students: Array.isArray(item.selectedStudents) 
//             ? item.selectedStudents
//                 .map(s => s.StudentName || '')
//                 .filter(Boolean)
//                 .join(', ') 
//             : '',
//           time: item.batchTime,
//           duration: item.duration,
//           action: (
//             <>
//               <Button 
//                 variant="contained" 
//                 color="primary" 
//                 onClick={() => handleEdit(item)}
//                 style={{ marginRight: '8px' }}
//               >
//                 Edit
//               </Button>

//               <Button 
//                 variant="contained" 
//                 color="secondary" 
//                 onClick={() => handleDelete(item)}
//               >
//                 Delete
//               </Button>
//             </>
//           ),
//         }))}
//       />

//       <BatchFormDialog />
//     </div>
//   );
// };

// export default BatchManagement;


// 
import React, { useState, useEffect } from "react";
import {
  Paper, InputBase, Divider, IconButton, Button, Grid,
  Select, MenuItem, FormControl, InputLabel, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField,
  Box, Chip, Checkbox, ListItemText
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommanTable from "../../Components/CommanTable";
import axios from "axios";

const BatchManagement = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    batchName: "",
    selectedCourse: [], // Now allows multiple courses
    selectedStudents: [],
    batchTime: "",
    duration: "",
  });
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const coursesRes = await axios.get("http://localhost:9000/institute/getInstitute_Course");
      setCourses(coursesRes.data.data);
      console.log('Fetching courses...', coursesRes.data.data);
      const studentsRes = await axios.get("http://localhost:9000/institute/getStudent");
      setStudents(studentsRes.data.data);
      console.log('Fetching students...', studentsRes.data.data);

      const batchesRes = await axios.get("http://localhost:9000/institute/getBatches");
      setTableData(batchesRes.data.data);
      console.log('Fetching batches...', batchesRes.data.data);
      console.log('Fetching batches...');
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleEdit = async (item) => {
    try {
      setFormData({
        _id: item._id,
        batchName: item.batchName,
        selectedCourse: item.selectedCourse?._id || item.selectedCourse,
        selectedStudents: item.selectedStudents?.map(s => s._id) || [],
        batchTime: item.batchTime,
        duration: item.duration,
      });
      setOpen(true);
    } catch (error) {
      console.error("Error editing batch:", error);
      alert("Error editing batch");
    }
  };
  const handleClose = () => {
    setOpen(false);
    // Reset form data
    setFormData({
      batchName: "",
      selectedCourse: "",
      selectedStudents: [],
      batchTime: "",
      duration: ""
    });
  };
  const handleDelete = async (item) => {
    if (!window.confirm("Are you sure you want to delete this batch?")) {
      return;
    }
  
    try {
      const response = await axios.delete(`http://localhost:9000/institute/deleteBatch/${item._id}`);
      if (response.data.success) {
        await fetchInitialData();
        alert("Batch deleted successfully");
      } else {
        throw new Error(response.data.message || "Failed to delete batch");
      }
    } catch (err) {
      console.error("Error deleting batch:", err);
      alert("Error deleting batch: " + (err.response?.data?.message || err.message));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to:`, value); // Debug log
  
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      
      // Reset selected students when course changes
      if (name === 'selectedCourse') {
        newData.selectedStudents = [];
      }
      
      return newData;
    });
  };
  

  const filteredStudents = React.useMemo(() => {
  console.log("Current formData:", formData);
  console.log("Selected course:", formData.selectedCourse);
  console.log("All students:", students);
  
  if (!formData.selectedCourse) {
    return [];
  }

  const filtered = students.filter(student => {
    // Check if student has Course property
    if (!student.Course) {
      return false;
    }

    // Handle both string and object course references
    const studentCourseId = typeof student.Course === 'object' 
      ? student.Course._id 
      : student.Course;

    const selectedCourseId = formData.selectedCourse;

    const matches = studentCourseId === selectedCourseId;
    
    console.log(`Student: ${student.StudentName}, Course: ${studentCourseId}, Selected: ${selectedCourseId}, Matches: ${matches}`);
    
    return matches;
  });

  console.log("Filtered students:", filtered);
  return filtered;
}, [students, formData.selectedCourse]);
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/institute/createBatch",
        formData
      );
      if (response.data.success) {
        fetchInitialData();
        setOpen(false);
        setFormData({
          batchName: "",
          selectedCourse: "",
          selectedStudents: [],
          batchTime: "",
          duration: "",
        });
        alert("Batch created successfully!");
      } else {
        throw new Error(response.data.message || "Failed to create batch");
      }
    } catch (error) {
      console.error("Error creating batch:", error);
    }
  };

  return (
    <div className="mainContain">
      <div className="add-icon-container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleIcon />}
              onClick={() => setOpen(true)}
            >
              Add Batch
            </Button>
          </Grid>
          <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
            <h1>Batch Management</h1>
          </Grid>
          <Grid item xs={3}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 400,
                p: "2px 4px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Batch"
                value={formData.searchQuery || ""}
                onChange={(e) =>
                  handleChange({
                    target: { name: "searchQuery", value: e.target.value },
                  })
                }
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Create New Batch</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Batch Name"
            name="batchName"
            value={formData.batchName}
            onChange={handleChange}
          />


 <FormControl fullWidth margin="normal">
  <InputLabel>Select Course</InputLabel>
  <Select
    name="selectedCourse"
    value={formData.selectedCourse}
    onChange={(e) => handleChange(e)}
    label="Select Course"
  >
    {courses && courses.length > 0 ? (
      courses.map((course) => (
        <MenuItem key={course._id} value={course._id}>
          {course.Course_Name || course.courseName}
        </MenuItem>
      ))
    ) : (
      <MenuItem disabled>No courses available</MenuItem>
    )}

  </Select>
</FormControl>

 {filteredStudents.length > 0 ? (
   <FormControl fullWidth margin="normal">
     <InputLabel>Select Students</InputLabel>
     <div>
       {filteredStudents.map((student) => (
         <div key={student._id}>
           <Checkbox
             checked={formData.selectedStudents.includes(student._id)}
             onChange={(e) => {
             const newSelected = e.target.checked
                 ? [...formData.selectedStudents, student._id]
                : formData.selectedStudents.filter((id) => id !== student._id);

               setFormData((prev) => ({
                 ...prev,
                selectedStudents: newSelected,
              }));
            }}
           />
           {student.StudentName} ({student.Email})
         </div>
       ))}
    </div>
  </FormControl>
 ) : (
   <p>No students enrolled in the selected course.</p>
 )} 



          <TextField
            fullWidth
            margin="normal"
            label="Batch Time"
            name="batchTime"
            value={formData.batchTime}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Create Batch
          </Button>
        </DialogActions>
      </Dialog> */}
<Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
    <DialogTitle>{formData._id ? 'Edit Batch' : 'Create New Batch'}</DialogTitle>
    <DialogContent>
      <TextField
        fullWidth
        margin="normal"
        label="Batch Name"
        name="batchName"
        value={formData.batchName}
        onChange={handleChange}
        required
      />

      <FormControl fullWidth margin="normal" required>
        <InputLabel>Select Course</InputLabel>
        <Select
          name="selectedCourse"
          value={formData.selectedCourse}
          onChange={handleChange}
          label="Select Course"
        >
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <MenuItem key={course._id} value={course._id}>
                {course.Course_Name || course.courseName}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No courses available</MenuItem>
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Select Students</InputLabel>
        <Select
          multiple
          name="selectedStudents"
          value={formData.selectedStudents || []}
          onChange={(e) => {
            console.log("Selected students:", e.target.value);
            setFormData(prev => ({
              ...prev,
              selectedStudents: e.target.value
            }));
          }}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((studentId) => {
                const student = students.find(s => s._id === studentId);
                return student ? (
                  <Chip 
                    key={studentId} 
                    label={student.StudentName}
                    onDelete={() => {
                      const newSelected = formData.selectedStudents.filter(id => id !== studentId);
                      setFormData(prev => ({
                        ...prev,
                        selectedStudents: newSelected
                      }));
                    }}
                  />
                ) : null;
              })}
            </Box>
          )}
        >
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <MenuItem key={student._id} value={student._id}>
                <Checkbox checked={formData.selectedStudents.includes(student._id)} />
                <ListItemText 
                  primary={student.StudentName}
                  secondary={`Email: ${student.Email}`}
                />
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No students enrolled in this course</MenuItem>
          )}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Batch Time"
        name="batchTime"
        value={formData.batchTime}
        onChange={handleChange}
        required
      />

      <TextField
        fullWidth
        margin="normal"
        label="Duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        required
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button 
        onClick={handleSubmit} 
        variant="contained" 
        color="primary"
        disabled={!formData.batchName || !formData.selectedCourse || !formData.batchTime || !formData.duration}
      >
        {formData._id ? 'Update Batch' : 'Create Batch'}
      </Button>
    </DialogActions>
  </Dialog>

      
      <CommanTable
  tableHeaders={[
    "Batch Name",
    "Course",
    "Students",
    "Time",
    "Duration",
    "Action",
  ]}
  tabledata={tableData.map((item) => ({
    batchName: item.batchName,
    courses: item.selectedCourse?.Course_Name || '',
    students: Array.isArray(item.selectedStudents) 
      ? item.selectedStudents
          .map(s => s.StudentName)
          .filter(Boolean)
          .join(", ") 
      : '',
    time: item.batchTime,
    duration: item.duration,
    action: (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleEdit(item)}
          style={{ marginRight: '8px' }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(item)}
        >
          Delete
        </Button>
      </>
    ),
  }))}
/>
    </div>
  );
};

export default BatchManagement;
// import React, { useState, useEffect } from "react";
// import {
//   Paper, InputBase, Divider, IconButton, Button, Grid,
//   Select, MenuItem, FormControl, InputLabel, Dialog,
//   DialogTitle, DialogContent, DialogActions, TextField,
//   Box, Chip, Checkbox, ListItemText
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import CommanTable from "../../Components/CommanTable";
// import axios from "axios";

// const BatchManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     batchName: "",
//     selectedCourses: [], // Allow multiple courses
//     selectedStudents: [],
//     batchTime: "",
//     duration: "",
//   });
//   const [courses, setCourses] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
//     try {
//       const coursesRes = await axios.get("http://localhost:9000/institute/getInstitute_Course");
//       setCourses(coursesRes.data.data);

//       const studentsRes = await axios.get("http://localhost:9000/institute/getStudent");
//       setStudents(studentsRes.data.data);

//       const batchesRes = await axios.get("http://localhost:9000/institute/getBatches");
//       setTableData(batchesRes.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleEdit = (item) => {
//     setFormData({
//       _id: item._id,
//       batchName: item.batchName,
//       selectedCourses: item.selectedCourses.map((c) => c._id || c),
//       selectedStudents: item.selectedStudents.map((s) => s._id || s),
//       batchTime: item.batchTime,
//       duration: item.duration,
//     });
//     setOpen(true);
//   };

//   const handleDelete = async (item) => {
//     if (!window.confirm("Are you sure you want to delete this batch?")) return;

//     try {
//       const response = await axios.delete(`http://localhost:9000/institute/deleteBatch/${item._id}`);
//       if (response.data.success) {
//         fetchInitialData();
//         alert("Batch deleted successfully");
//       } else {
//         throw new Error(response.data.message || "Failed to delete batch");
//       }
//     } catch (error) {
//       console.error("Error deleting batch:", error);
//       alert(`Error deleting batch: ${error.message}`);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === "selectedCourses" ? { selectedStudents: [] } : {}),
//     }));
//   };

//   const filteredStudents = React.useMemo(() => {
//     if (!formData.selectedCourses.length) return [];
//     return students.filter((student) =>
//       formData.selectedCourses.includes(student.Course?._id || student.Course)
//     );
//   }, [students, formData.selectedCourses]);

//   const handleSubmit = async () => {
//     try {
//       const url = formData._id
//         ? `http://localhost:9000/institute/updateBatch/${formData._id}`
//         : "http://localhost:9000/institute/createBatch";
//       const method = formData._id ? "put" : "post";

//       const response = await axios[method](url, formData);

//       if (response.data.success) {
//         fetchInitialData();
//         setOpen(false);
//         setFormData({
//           batchName: "",
//           selectedCourses: [],
//           selectedStudents: [],
//           batchTime: "",
//           duration: "",
//         });
//         alert("Batch saved successfully!");
//       } else {
//         throw new Error(response.data.message || "Failed to save batch");
//       }
//     } catch (error) {
//       console.error("Error saving batch:", error);
//       alert(`Error saving batch: ${error.message}`);
//     }
//   };

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<AddCircleIcon />}
//               onClick={() => setOpen(true)}
//             >
//               Add Batch
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1>Batch Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper
//               component="form"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 width: 400,
//                 p: "2px 4px",
//               }}
//             >
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search Batch"
//                 value={formData.searchQuery || ""}
//                 onChange={(e) =>
//                   handleChange({
//                     target: { name: "searchQuery", value: e.target.value },
//                   })
//                 }
//               />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>

//       <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
//         <DialogTitle>{formData._id ? "Edit Batch" : "Create New Batch"}</DialogTitle>
//         <DialogContent>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Batch Name"
//             name="batchName"
//             value={formData.batchName}
//             onChange={handleChange}
//           />
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Select Courses</InputLabel>
//             <Select
//               name="selectedCourses"
//               multiple
//               value={formData.selectedCourses}
//               onChange={handleChange}
//               renderValue={(selected) =>
//                 courses
//                   .filter((course) => selected.includes(course._id))
//                   .map((c) => c.Course_Name)
//                   .join(", ")
//               }
//             >
//               {courses.map((course) => (
//                 <MenuItem key={course._id} value={course._id}>
//                   <Checkbox checked={formData.selectedCourses.includes(course._id)} />
//                   <ListItemText primary={course.Course_Name} />
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           {filteredStudents.length > 0 && (
//             <FormControl fullWidth margin="normal">
//               <InputLabel>Select Students</InputLabel>
//               <Select
//                 multiple
//                 value={formData.selectedStudents}
//                 onChange={(e) =>
//                   handleChange({
//                     target: { name: "selectedStudents", value: e.target.value },
//                   })
//                 }
//                 renderValue={(selected) => (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                     {selected.map((id) => {
//                       const student = filteredStudents.find((s) => s._id === id);
//                       return <Chip key={id} label={student?.StudentName} />;
//                     })}
//                   </Box>
//                 )}
//               >
//                 {filteredStudents.map((student) => (
//                   <MenuItem key={student._id} value={student._id}>
//                     <Checkbox checked={formData.selectedStudents.includes(student._id)} />
//                     <ListItemText
//                       primary={student.StudentName}
//                       secondary={student.Email}
//                     />
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Batch Time"
//             name="batchTime"
//             value={formData.batchTime}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Duration"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button
//             onClick={handleSubmit}
//             variant="contained"
//             color="primary"
//             disabled={!formData.batchName || !formData.selectedCourses.length || !formData.batchTime || !formData.duration}
//           >
//             {formData._id ? "Update" : "Create"} Batch
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <CommanTable
//         tableHeaders={[
//           "Batch Name",
//           "Courses",
//           "Students",
//           "Time",
//           "Duration",
//           "Action",
//         ]}
//         tabledata={tableData.map((item) => ({
//           batchName: item.batchName,
//           courses: item.selectedCourses
//             ?.map((c) => c.Course_Name)
//             .join(", "),
//           students: item.selectedStudents
//             ?.map((s) => s.StudentName)
//             .join(", "),
//           time: item.batchTime,
//           duration: item.duration,
//           action: (
//             <>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleEdit(item)}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleDelete(item)}
//               >
//                 Delete
//               </Button>
//             </>
//           ),
//         }))}
//       />
//     </div>
//   );
// };

// export default BatchManagement;
