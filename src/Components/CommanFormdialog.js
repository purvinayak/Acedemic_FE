// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from '@mui/material';

// const CommanFormdialog = ({ open, onClose, onSubmit, fields,  onChange,formData }) => {
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Batch Details</DialogTitle>
//       <DialogContent>
//         <Grid container spacing={2} sx={{ padding: '20px' }}>
//           {fields.map((field, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <TextField
//                 label={field.label}
//                 name={field.name}
//                 type={field.type }
//                 value={formData[field.name] || ''}
//                 onChange={onChange}
//                 fullWidth
//                 required={field.required || false}
//                 sx={{ backgroundColor: '#fff' }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="secondary">
//           Cancel
//         </Button>
//         <Button onClick={onSubmit} variant="contained" color="primary">
//           Save
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CommanFormdialog;

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from '@mui/material';

const CommanFormdialog = ({ open, onClose, onSubmit, fields, onChange, formData, editMode, disableFields = [], }) => {
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
                type={field.type}
                value={formData[field.name] || ''}
                onChange={onChange}
                fullWidth
                required={field.required || false}
                sx={{ backgroundColor: '#fff' }}
                disabled={disableFields.includes(field.name)} //
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
          {editMode ? 'Update' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommanFormdialog;