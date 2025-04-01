// import React, { useState, useEffect } from 'react';
// import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CommanTable from '../../Components/CommanTable';
// import CommanFormdialog from '../../Components/CommanFormdialog';
// import axios from 'axios';
// import '../../Styles/BatchManagement.css';

// const PaymentManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get('http://localhost:9000/institute/getStudent');
//       console.log('Fetched Data:', response.data); 
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   };

//   const tableHeaders = [
//      'Student Name', 'Mobile No', 'Received Payment', 'Left Payment', 'Action'
//   ];

//   const fields = [
//     // { label: 'Student ID', name: 'student_id', type: 'text' },
//     { label: 'Student Name', name: 'StudentName', required: true },
//     { label: 'Mobile No', name: 'MobileNo', required: true },
//     { label: 'Received Payment', name: 'Recievepay', type: 'number', required: true },
//     { label: 'Left Payment', name: 'Leftpay', type: 'number', required: true }
//   ];

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({});
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/institute/updatePayment?id=${editingId}, formData`);
//       } 
//       else {
//         await axios.post('http://localhost:9000/institute/getStudent', formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error('Error saving data:', err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData(rowData);
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   // const handleDelete = async (rowData) => {
//   //   try {
//   //     await axios.delete(`http://localhost:9000/institute/deletePayment?id=${rowData._id}`);
//   //     fetchTableData();
//   //   } catch (err) {
//   //     console.error('Error deleting data:', err);
//   //   }
//   // };
//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleClickOpen}>
//               Add Payment
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
//             <h1 className="institute-manage-title">Payment Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
//               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: '10px' }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//       <CommanTable
//         tableHeaders={tableHeaders}
//         tabledata={tableData.map((item) => ({
//           // studentID: item.studentID,  
//           studentName: item.StudentName,  
//           mobileNo: item.MobileNo,
        
//           Recievepay: item.Recievepay,
//           Leftpay: item.Leftpay,
//           action: (
//             <>
//               <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Add Payment</Button>
       
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

// export default PaymentManagement;
// import React, { useState, useEffect } from 'react';
// import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CommanTable from '../../Components/CommanTable';
// import CommanFormdialog from '../../Components/CommanFormdialog';
// import axios from 'axios';
// import '../../Styles/BatchManagement.css';

// const PaymentManagement = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchTableData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get('http://localhost:9000/institute/getStudent');
//       console.log('Fetched Data:', response.data); 
//       setTableData(response.data.data);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   };

//   const tableHeaders = [
//     'Student Name', 'Mobile No', 'Received Payment', 'Left Payment', 'Action'
//   ];

//   const fields = [
//     { label: 'Student Name', name: 'StudentName', required: true },
//     { label: 'Mobile No', name: 'MobileNo', required: true },
//     { label: 'Received Payment', name: 'Recievepay', type: 'number', required: true },
//     { label: 'Left Payment', name: 'Leftpay', type: 'number', required: true }
//   ];

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setFormData({});
//     setEditMode(false);
//     setEditingId(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axios.put(`http://localhost:9000/institute/updatePayment?id=${editingId}`, formData);
//       } else {
//         await axios.post('http://localhost:9000/institute/postPayment', formData);
//       }
//       fetchTableData();
//       handleClose();
//     } catch (err) {
//       console.error('Error saving data:', err);
//     }
//   };

//   const handleEdit = (rowData) => {
//     setFormData(rowData);
//     setEditingId(rowData._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   return (
//     <div className="mainContain">
//       <div className="add-icon-container">
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleClickOpen}>
//               Add Payment
//             </Button>
//           </Grid>
//           <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
//             <h1 className="institute-manage-title">Payment Management</h1>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
//               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
//               <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//               <IconButton color="primary" sx={{ p: '10px' }}>
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//       <CommanTable
//         tableHeaders={tableHeaders}
//         tabledata={tableData.map((item) => ({
//           studentName: item.StudentName,  
//           mobileNo: item.MobileNo,
//           Recievepay: item.Recievepay,
//           Leftpay: item.Leftpay,
//           action: (
//             <>
//               <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>Add Payment</Button>
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

// export default PaymentManagement;
import React, { useState, useEffect } from 'react';
import { Paper, InputBase, Divider, IconButton, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CommanTable from '../../Components/CommanTable';
import CommanFormdialog from '../../Components/CommanFormdialog';
import axios from 'axios';
import '../../Styles/BatchManagement.css';

const PaymentManagement = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/institute/getStudent');
      console.log('Fetched Data:', response.data);
      setTableData(response.data.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const tableHeaders = [
    'Student Name', 'Mobile No', 'RecievedFees', 'RemainingFees','Current Fees', 'Action'
  ];

  const fields = [
    { label: 'Student Name', name: 'StudentName', required: true },
    { label: 'Mobile No', name: 'MobileNo', required: true },
    { label: 'RecievedFees', name: 'RecievedFees', type: 'number', required: true },
    { label: ' RemainingFees', name: 'RemainingFees', type: 'number', required: true },
    { label: 'Current Fees', name: 'CurrentFees', type: 'number', required: true }
  ];



  const handleClickOpen = (rowData) => {
    setFormData(rowData);
    setEditingId(rowData._id);
    setEditMode(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({});
    setEditMode(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (editMode) {
  //       await axios.put(`http://localhost:9000/institute/updatePayment?id=${editingId}`, formData);
  //       alert('Payment Updated Successfully');
  //     }
  //     fetchTableData();
  //     handleClose();
  //   } catch (err) {
  //     console.error('Error updating data:', err);
  //     alert('Error updating data: ' + err.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Update payment
        await axios.put(`http://localhost:9000/institute/updatePayment?id=${editingId}`, formData);
        alert('Payment Updated Successfully');
      
      } else {
        // Add new payment
        await axios.post("http://localhost:9000/institute/postPayment", {
          id: formData._id,
          CurrentFees: formData.CurrentFees,
        });
        alert('Payment Added Successfully');
      }
      fetchTableData();
      handleClose();
    } catch (err) {
      console.error('Error saving data:', err);
      alert('Error saving data: ' + err.message);
    }
  };
  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://localhost:9000/institute/deletePayment?id=${rowData._id}`);
      alert('Payment Deleted Successfully');
      fetchTableData();
    } catch (err) {
      console.error('Error deleting data:', err);
      alert('Error deleting data: ' + err.message);
    }
  };

  return (
    <div className="mainContain">
      <div className="add-icon-container">
        <Grid container spacing={2}>
          <Grid item xs={7} style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="institute-manage-title">Payment Management</h1>
          </Grid>
          <Grid item xs={3}>
            <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student Name" />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <CommanTable
        tableHeaders={tableHeaders}
        tabledata={tableData.map((item) => ({
          studentName: item.StudentName,
          mobileNo: item.MobileNo,
          RecievedFees: item.RecievedFees,
          RemainingFees: item.RemainingFees,
          CurrentFees: item.CurrentFees,
          action: (
            <>
              <Button variant="contained" color="primary" onClick={() => handleClickOpen(item)}>Add Payment</Button>
              
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
        disableFields={['StudentName', 'MobileNo', 'RecievedFees', 'RemainingFees']}
      />
    </div>
  );
};

export default PaymentManagement;