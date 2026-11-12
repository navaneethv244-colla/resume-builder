import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Container from '@mui/material/Container';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
const Resume = () => {
  return (
    <div>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 ,mt: 5}}>
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <Stack direction="row" spacing={50}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height:300,
        },
      }}
    >
      <Paper elevation={3}>
        <Container style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'40px'}}>
          <SummarizeIcon sx={{color:'blue'}}/>
          <Typography variant='h5'>
            Add your details
          </Typography>
          <Typography variant='body1'>
              Our Ai will generate Skills & summary
          </Typography>
          <Typography variant='body1' sx={{fontSize:'15px',fontWeight:'bold'}}>
              step 1
          </Typography>
        </Container>
      </Paper>
    </Box>
     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height:300,
        },
      }}
    >
      <Paper elevation={3}>
         <Container style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'40px'}}>
          <SimCardDownloadIcon sx={{color:'red'}}/>
           <Typography variant='h5'>
            Download your Resume
          </Typography>
          <Typography variant='body1'>
             Download CV as PDF and start applying
          </Typography>
          <Typography variant='body1' sx={{fontSize:'15px',fontWeight:'bold'}}>
              step 2
          </Typography>
         </Container>
      </Paper>
    </Box>
      </Stack>
     <Box sx={{display:'flex',justifyContent:'center'}}>
        <Link to={'/resume-details'}>
             <Button variant="contained" sx={{background:'brown'}}>Let`s start</Button>
        </Link>
     </Box>
    </div>
  )
}

export default Resume