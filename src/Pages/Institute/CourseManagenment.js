
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
//this is a final ccode for testting

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
// import "../../Styles/CourseManagenment.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";

// const CourseManagenment = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});                           
//   const tableHeaders = ["ID", "Course_Name", "Duration", "Fees", "Action"];
//   const tableData = [
//     { ID: 1, CourseName: "Course1", Duration: "1 Year", Fees: "10000" },
//   ];
//   const fields = [
//     { label: "ID", name: "id", type: "number" },
//     { label: "Course_Name", name: "courseName", type: "text" },
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
//     <div className="mainContain">
//       <div className="add-icon-container">
//       <Grid container spacing={2} style={{ marginBottom: "20px" }}>
//         <Grid item xs={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddCircleIcon />}
//             onClick={handleClickOpen}
//           >
            
//           </Button>
//         </Grid>
//         <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//           <h1>CourseManagement</h1>
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
//             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
//             <IconButton type="submit" sx={{ p: "10px" }}>
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </Grid>
//       </Grid>
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

// export default CourseManagenment;
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
// import "../../Styles/CourseManagenment.css";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = ["ID", "Course Name", "Duration", "Fees", "Action"];
// const fields = [
//   { label: "ID", name: "id", type: "number" },
//   { label: "Course Name", name: "Course_Name", type: "text" },
//   { label: "Duration", name: "duration", type: "text" },
//   { label: "Fees", name: "fees", type: "number" },
// ];

// const CourseManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     id: "",
//     Course_Name: "",
//     duration: "",
//     fees: "",
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getInstitute_Course");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({
//       id: "",
//       courseName: "",
//       duration: "",
//       fees: "",
//     });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/institute/updateInstitute_Course?id=${editingId}`, formData);
//         alert("Data Updated Successfully");
//       } else {
//         await axios.post("http://localhost:9000/institute/postInstitute_Course", formData);
//         alert("Data Added Successfully");
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error("Error saving data:", err);
//       alert("Error saving data: " + err.message);
//     }
//   };

//   const handleEdit = async (rowData) => {
//     try {
//       const response = await axios.get(`http://localhost:9000/institute/getInstituteCourse_ByID?id=${rowData._id}`);
//       const courseData = response.data.data;
//       setFormData({
//         id: courseData.id,
//         courseName: courseData.courseName,
//         duration: courseData.duration,
//         fees: courseData.fees,
//       });
//       setEditingId(courseData._id);
//       setEditMode(true);
//       setOpen(true);
//     } catch (err) {
//       console.error("Error fetching course data:", err);
//       alert("Error fetching course data: " + err.message);
//     }
//   };

//   const handleDelete = async (rowData) => {
//     try {
//       await axios.delete(`http://localhost:9000/institute/deleteInstitute_Course?id=${rowData._id}`);
//       fetchTableData();
//       alert("Data Deleted Successfully");
//     } catch (err) {
//       console.error("Error deleting data:", err);
//       alert("Error deleting data: " + err.message);
//     }
//   };

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
//               <AddIcon />
//             </Fab>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1 className="course-manage-title">Course Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <div className="course-manage-search">
//               <Paper
//                 component="form"
//                 sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//               >
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="Search Course Name"
//                   inputProps={{ "aria-label": "search Courses" }}
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

//       <div className="course-table-container" style={{ marginTop: "20px" }}>
//         <CommanTable
//           tableHeaders={tableHeaders}
//           tabledata={tableData.map((item) => ({
//             id: item.id,
//             courseName: item.courseName,
//             duration: item.duration,
//             fees: item.fees,
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
//           editMode={editMode}
//         />
//       </div>
//     </div>
//   );
// };

// export default CourseManagement;

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
import '../../Styles/CourseManagenment.css';
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";
import axios from "axios";

const tableHeaders = ["ID", "Course Name", "Duration", "Fees", "Action"];
const fields = [
  { label: "ID", name: "id", type: "number" },
  { label: "Course Name", name: "Course_Name", type: "text" },
  { label: "Duration", name: "duration", type: "text" },
  { label: "Fees", name: "fees", type: "number" },
];

const CourseManagement = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    courseName: "",
    duration: "",
    fees: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/institute/getInstitute_Course");
      setTableData(response.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      id: "",
      Course_Name: "",
      duration: "",
      fees: "",
    });
    setEditMode(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:9000/institute/updateInstitute_Course?id=${editingId}`, formData);
        alert("Data Updated Successfully");
      } else {
        await axios.post("http://localhost:9000/institute/postInstitute_Course", formData);
        alert("Data Added Successfully");
      }
      fetchTableData();
      handleClose();
    } catch (err) {
      console.error("Error saving data:", err);
      alert("Error saving data: " + err.message);
    }
  };

  const handleEdit = (rowData) => {
    setFormData({
      id: rowData.id,
      courseName: rowData.courseName,
      duration: rowData.duration,
      fees: rowData.fees,
    });
    setEditingId(rowData._id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://localhost:9000/institute/deleteInstitute_Course?id=${rowData._id}`);
      fetchTableData();
      alert("Data Deleted Successfully");
    } catch (err) {
      console.error("Error deleting data:", err);
      alert("Error deleting data: " + err.message);
    }
  };

  return (
    <div className="mainContain">
      <div className="add-icon-container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="course-manage-title">Course Management</h1>
          </Grid>
          <Grid item xs={3}>
            <div className="course-manage-search">
              <Paper
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Course Name"
                  inputProps={{ "aria-label": "search Courses" }}
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

      <div className="course-table-container" style={{ marginTop: "20px" }}>
        <CommanTable
          tableHeaders={tableHeaders}
          tabledata={tableData.map((item) => ({
            id: item.id,
            courseName: item.courseName,
            duration: item.duration,
            fees: item.fees,
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
    </div>
  );
};

export default CourseManagement;