import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from '@mui/material';

const CommanFormdialog = ({ open, onClose, onSubmit, fields,  onChange }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Batch Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ padding: '20px' }}>
          {fields.map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                label={field.label}
                name={field.name}
                type={field.type }
                onChange={onChange}
                fullWidth
                required={field.required || false}
                sx={{ backgroundColor: '#fff' }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommanFormdialog;