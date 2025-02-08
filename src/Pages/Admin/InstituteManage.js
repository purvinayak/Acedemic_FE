import React, { useState } from "react";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  Fab,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import "../../Styles/InstituteManage.css";
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";

const tableHeaders = [
  "Name",
  "Mobile No",
  "isActive",
  "Date",
  "Email",
  "Address",
  "Action",
];
const tableData = [
  {
    Name: "John",
    MobileNo: "1234567890",
    isActive: true,
    Date: "2022-01-01",
    Email: "john@example.com",
    Address: "123, ABC Street, XYZ City",
  },
];

const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Mobile No", name: "mobileNo", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Address", name: "address", type: "text" },
  { label: "Active Status", name: "isActive", type: "checkbox" },
];

const InstituteManage = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    address: "",
    isActive: false,
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose();
  };

  const handleEdit = (rowData) => {
    console.log("Edit action for:", rowData);
    setFormData(rowData);
    setOpen(true);
  };

  const handleDelete = (rowData) => {
    console.log("Delete action for:", rowData);
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
        </Grid>3
      </div>

      <div className="institute-table-container" style={{ marginTop: "20px" }}>
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
    </>
  );
};

export default InstituteManage;
