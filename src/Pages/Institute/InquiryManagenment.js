
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
import "../../Styles/InquiryManagenment.css";
import CommanTable from "../../Components/CommanTable";
import CommanFormdialog from "../../Components/CommanFormdialog";

const InquiryManagenment = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const tableHeaders = ["ID", "Studentname", "mo", "email", "Course_name"];
    const tableData = [
        { ID: 1, Studentname: "purvi", mo: "9876543245", email: 'purvinayak1999@gmail.com', Course_name: "React" },
    ];
    const fields = [
        { label: "ID", name: "id", type: "number", required: true },
        { label: "Studentname", name: "Studentname", type: "text", required: true },
        { label: "mo", name: "mo", type: "number", required: true },
        { label: "email", name: "email", required: true },
        { label: "Course_name", name: "Course_name", required: true },
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
                        <h1>InquiryManagement</h1>
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
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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

export default InquiryManagenment;