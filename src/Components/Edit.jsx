import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  display:'flex',
  flexDirection:'column',
  boxShadow: 24,
  maxHeight: '90vh',
  overflowY: 'auto',
  p: 4,
};

const Edit = () => {
     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper elevation={3}>
               <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit resume
          </Typography>
          <Typography variant='h6'>
            basic informations
          </Typography>
            <TextField id="standard-basic" label="FullName" variant="standard" />
            <TextField id="standard-basic" label="Location" variant="standard" />
            <TextField id="standard-basic" label="Choose Job Title" variant="standard" />
          <Typography variant='h6'>
            Contact details
          </Typography>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Contact Number" variant="standard" />
          <TextField id="standard-basic" label="Github Link" variant="standard" />
          <Typography variant='h6'>
            Education Details
          </Typography>
          <TextField id="standard-basic" label="Bachelors Degree" variant="standard" />
          <TextField id="standard-basic" label="College/University Name" variant="standard" />
          <TextField id="standard-basic" label="Year of Graduation" variant="standard" />
          <Typography variant='h6'>
            Education Details
          </Typography>
          <TextField id="standard-basic" label="Bachelors Degree" variant="standard" />
          <TextField id="standard-basic" label="College/University Name" variant="standard" />
          <TextField id="standard-basic" label="Year of Graduation" variant="standard" />
          
          <Typography variant='h4' sx={{fontWeight:'bold'}}>
            Skills
          </Typography>
          <Stack direction="row" spacing={2} sx={{display:'flex',alignItems:'center'}}>
              <TextField id="outlined-basic" label="Add New Skill" variant="outlined"/>
              <Button variant="outlined" sx={{width:'10px',height:'40px',color:'brown'}}>Add</Button>

          </Stack>
        </Box>
        </Paper>
      </Modal>
    </div>
  )
}

export default Edit
