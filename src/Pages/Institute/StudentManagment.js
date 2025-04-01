// import React, { useState, useEffect } from "react";
// import { Paper, InputBase, Divider, IconButton, Button, Grid } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import CommanTable from "../../Components/CommanTable";
// import CommanFormdialog from "../../Components/CommanFormdialog";
// import axios from "axios";

// const tableHeaders = [ "Batch", "Student Name", "Mobile No", "Email", "Course", "Duration", "Decided Fees", "Action"];

// const fields = [
//   // { label: "Student ID", name: "StudentID", type: "text" },
//   { label: "Batch", name: "Batch", type: "text" },
//   { label: "Student Name", name: "StudentName", type: "text" },
//   { label: "Mobile No", name: "MobileNo", type: "text" },
//   { label: "Email", name: "Email", type: "email" },
//   { label: "Course", name: "Course", type: "text" },
//   { label: "Duration", name: "Duration", type: "text" },
//   { label: "Decided Fees", name: "DecidedFees", type: "number" },
// ];

// const StudentManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     // StudentID: "",
//     Batch: "",
//     StudentName: "",
//     MobileNo: "",
//     Email: "",
//     Course: "",
//     Duration: "",
//     DecidedFees: "",
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/institute/getStudent");
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({ StudentID: "", Batch: "", StudentName: "", MobileNo: "", Email: "", Course: "", Duration: "", DecidedFees: "" });
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/institute/updateStudent?id=${editingId}`, formData);
//       } else {
//         await axios.post("http://localhost:9000/institute/postStudent", formData);
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
//       await axios.delete(`http://localhost:9000/institute/deleteStudent?id=${rowData._id}`);
//       fetchTableData();
//     } catch (err) {
//       console.error("Error deleting data:", err);
//     }
//   };

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleClickOpen}>
//               Add Student
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
//             <h1>Student Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 400 }}>
//               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: "10px" }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>

//       <CommanTable
//         tableHeaders={tableHeaders}
//         tabledata={tableData.map((item) => ({
//           // ID: item._id,
//           // studentID: item.StudentID,
//           batch: item.Batch,
//           studentName: item.StudentName,
//           mobileNo: item.MobileNo,
//           email: item.Email,
//           course: item.Course,
//           duration: item.DecidedFeesuration,
//           decidedFees: item.DecidedFees,
//           action: (
//             <>
//               <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Edit</Button>
//               <Button variant="contained" color="secondary" onClick={() => handleDelete(item)}>Delete</Button>
//             </>
//           ),
//         }))}
//       />

//       <CommanFormdialog
//         open={open}
//         onClose={handleClose}
//         onSubmit={handleSubmit}
//         fields={fields}
//         onChange={handleChange}
//         formData={formData}
//         editMode={editMode}
//       />
//     </div>
//   );
// };

// export default StudentManagement;




import React, { useState, useEffect } from "react";
import { Paper, InputBase, Divider, IconButton, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";
import axios from "axios";

const tableHeaders = [
  "Batch",
  "Student Name",
  "Mobile No",
  "Email",
  "Course",
  "Duration",
  "Decided Fees",
  "Recieved Fees",
  "Remaining Fees",
  "Recieved Payment Date", 
  "Action",
];

const fields = [
  { label: "Batch", name: "Batch", type: "text" },
  { label: "Student Name", name: "StudentName", type: "text" },
  { label: "Mobile No", name: "MobileNo", type: "text" },
  { label: "Email", name: "Email", type: "email" },
  { label: "Course", name: "Course", type: "text" },
  { label: "Duration", name: "Duration", type: "text" },
  { label: "Decided Fees", name: "DecidedFees", type: "number" },
  { label: "Recieved Fees", name: "RecievedFees", type: "number" },
  { label: "Remaining Fees", name: "RemainingFees", type: "number", disabled: true },
  { label: "Recieved Payment Date", name: "RecievedPaymentDate", type: "date" },

];

const StudentManagement = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    Batch: "",
    StudentName: "",
    MobileNo: "",
    Email: "",
    Course: "",
    Duration: "",
    DecidedFees: "",
    RecievedFees: "",
    RemainingFees: "",
    RecievedPaymentDate: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/institute/getStudent");
      setTableData(response.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      Batch: "",
      StudentName: "",
      MobileNo: "",
      Email: "",
      Course: "",
      Duration: "",
      DecidedFees: "",
      RecievedFees: "",
      RemainingFees: "",
      RecievedPaymentDate: "",
    });
    setEditMode(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };

      if (name === "DecidedFees" || name === "RecievedFees") {
        const decidedFees = parseFloat(updatedFormData.DecidedFees) || 0;
        const recievedFees = parseFloat(updatedFormData.RecievedFees) || 0;
        updatedFormData.RemainingFees = decidedFees - recievedFees;
      }

      return updatedFormData;
    });
  };
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:9000/institute/updateStudent?id=${editingId}`, formData);
      } else {
        await axios.post("http://localhost:9000/institute/postStudent", formData);
      }
      fetchTableData();
      handleClose();
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };
 // const handleChange = (e) => {
  //   const { name, value } = e.target;
  
  //   if (!name) {
  //     console.error("Field name is undefined");
  //     return;
  //   }
  
  //   setFormData((prev) => {
  //     const updatedFormData = { ...prev, [name]: value };
  
  //     if (name === "DecidedFees" || name === "RecievedFees") {
  //       const decidedFees = parseFloat(updatedFormData.DecidedFees) || 0;
  //       const recievedFees = parseFloat(updatedFormData.RecievedFees) || 0;
  //       updatedFormData.RemainingFees = decidedFees - recievedFees;
  //     }
  
  //     return updatedFormData;
  //   });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (editMode) {
  //       await axios.put(`http://localhost:9000/institute/updateStudent?id=${editingId}`, formData);
  //     } else {
  //       await axios.post("http://localhost:9000/institute/postStudent", formData);
  //     }
  //     fetchTableData();
  //     handleClose();
  //   } catch (err) {
  //     console.error("Error saving data:", err);
  //   }
  // };

  const handleEdit = (rowData) => {
    setFormData(rowData);
    setEditingId(rowData._id);
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://localhost:9000/institute/deleteStudent?id=${rowData._id}`);
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
              Add Student
            </Button>
          </Grid>
          <Grid item xs={7} style={{ display: "flex", justifyContent: "center" }}>
            <h1>Student Management</h1>
          </Grid>
          <Grid item xs={3}>
            <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 400 }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
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
          batch: item.Batch,
          studentName: item.StudentName,
          mobileNo: item.MobileNo,
          email: item.Email,
          course: item.Course,
          duration: item.Duration,
          decidedFees: item.DecidedFees,
          recievedFees: item.RecievedFees,
          remainingFees: item.RemainingFees,
          recievedPaymentDate: item.RecievedPaymentDate,
          
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

export default StudentManagement;