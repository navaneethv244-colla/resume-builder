import React, { useState } from 'react'
import ResumeInput from '../Components/ResumeInput'
import Preview from '../Components/Preview'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
const Info = () => {
   const [resumeDetails, setresumeDetails] = useState({
      name: "",
      location: "",
      jobTitle: "",
      email: "",
      contactNumber: "",
      linkedIn: "",
      github: "",
      degree: "",
      college: "",
      year: "",
      summary: "",
      skills: [],
    })
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
    <ResumeInput  resumeDetails={resumeDetails}
    setresumeDetails={setresumeDetails}/>
  </Box>
  <Box sx={{width:'40%'}}>
    <Preview  resumeDetails={resumeDetails}/>
  </Box>
</Stack>
  )
}
export default Info
