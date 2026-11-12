import React from 'react'
import Preview from '../Components/Preview'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Edit from '../Components/Edit';


const View = () => {
  return (
    
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      p: 2,
      overflowX: 'hidden'
    }}>

      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: '800px',
          minWidth: 0,
          p:4,
          overflowWrap: 'break-word',
          boxSizing: 'border-box'
        }}
      >
       <Stack spacing={2} direction="row" sx={{display:'flex',justifyContent:'center'}}>
      <Button variant="text"><SimCardDownloadIcon/> Dowmload CV</Button>
      <Button variant="text"><EditIcon/><Edit/></Button>
      <Button variant="text"><HomeIcon/>Home</Button>
    </Stack>
    <Preview />
      </Paper>

    </Box>
  )
}

export default View