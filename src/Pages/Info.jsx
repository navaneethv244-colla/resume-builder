import React from 'react'
import ResumeInput from '../Components/ResumeInput'
import Preview from '../Components/Preview'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
const Info = () => {
  return (
     <Stack
  direction="row"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  }}
>
  <Box sx={{width:'40%',padding:'10px'}}>
    <ResumeInput />
  </Box>

  <Box sx={{width:'40%'}}>
    <Preview />
  </Box>
</Stack>
  )
}

export default Info
