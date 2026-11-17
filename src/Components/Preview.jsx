import React from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';

const Preview = ({resumeDetails}) => {
  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Paper elevation={3} sx={{padding:'10px'}}>
                <h2>{resumeDetails.name}</h2>

      <p className='fs-6 lh-1'>Phone:{resumeDetails.phone}</p>
      <p className='fs-6 lh-1'>Email:{resumeDetails.email}</p>
      <p className='fs-6 lh-1'>Linkedin:{resumeDetails.linkedIn}</p>
      <p className='fs-6 lh-1'>Github:{resumeDetails.github}</p>
      <p className='fs-6 lh-1'>Location:{resumeDetails.location}</p>

      <Divider sx={{ bgcolor: 'black', my: 3 }} />

      <h4>Professional Summary</h4>
      <p>Create fraphic designer with expertise in visual communication
        ,branding,and digital design.skilled in using modern design tools
        to create compelling visual content.
      </p>

      <Divider sx={{ bgcolor: 'black', my: 3 }} />

      <h4>Technical Skills</h4>
      <p>ADOBE PHOTPSHOP ADOBE ILLUSRATOR</p>

      <Divider sx={{ bgcolor: 'black', my: 3 }} />

      <h4>Education</h4>
      <p className='fs-6 lh-1'>{resumeDetails.degree}</p>
      <p className='fs-6 lh-1'>{resumeDetails.college}</p>
      <p className='fs-6 lh-1'>{resumeDetails.year}</p>
      </Paper>

    </Box>
  )
}

export default Preview