import React from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';

const Preview = () => {
  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Paper elevation={3} sx={{padding:'10px'}}>
                <h2>Nadhil</h2>

      <p className='fs-6 lh-1'>Phone:3456789012</p>
      <p className='fs-6 lh-1'>Email:nadhil@gmail.com</p>
      <p className='fs-6 lh-1'>Linkedin:http</p>
      <p className='fs-6 lh-1'>Github:http</p>
      <p className='fs-6 lh-1'>Location:http</p>

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
      <p className='fs-6 lh-1'>Bachelor's Degree in MCA</p>
      <p className='fs-6 lh-1'>University/College Name:KANNUR</p>
      <p className='fs-6 lh-1'>Year of Graduation:2021</p>
      </Paper>

    </Box>
  )
}

export default Preview