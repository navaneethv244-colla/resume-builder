import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Directions } from '@mui/icons-material';

const Home = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2026/04/10/10/30/erwinbosman-commercial-10219078_1280.jpg')",
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
          height: "100vh",
          display:'flex',
          justifyContent:"center",
          alignItems:"center"
        }}
      >
       <div
  style={{
    width: "600px",
    height: "250px",
    padding: "30px",
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius:'20px'
  }}
>
  <p style={{ fontSize: "35px", fontWeight: "bold" }}>
    Designed To Get Hired.
    Your Skills, Your Story,
    Your Next Job - All in One
   <Link to={'/resume'}  style={{textDecoration:'none',color:'white'}}>
         <Button variant="" sty sx={{backgroundColor:'brown'}}>Make your resume with AI</Button>
   </Link>
  </p>
</div>
      </section>
      <section style={{padding:'40px'}}>
        <Stack  direction="row"
          spacing={4}
          alignItems="center">
              <div style={{width:'50%'}}>
                <Typography variant='body1'>
                    An AI Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required by modern recruitment systems.
                </Typography>
                <Typography variant='body1'>
                    The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS Applicant Tracking System friendly.
                </Typography>
                <Typography variant='body1'>
                      The main goal of the AI Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.
                </Typography>
                <Typography variant='body1'>
                      This type of system is especially useful for students and fresh graduates who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.
                </Typography>
              </div>
               <div
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2026/04/16/17/41/17-41-09-816_1280.jpg')",
        width: '50%',
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px'
      }}
    >
      </div>
        </Stack>
      </section>
      <section style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",width:'100%',height:'400px',backgroundSize:'cover',backgroundPosition:'center'}}>

      </section>
      <section style={{padding:'40px'}}>
        <Typography variant='h5' sx={{textAlign:'center',fontWeight:'bold'}}>
            Testimony
        </Typography>
        <Stack direction="row" spacing={20} alignItems="center">
              <div style={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                          Trusted by professionals worldwide.
                    </Typography>
                    <Typography variant='body1' sx={{textAlign:'justify'}}>
                          At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
                    </Typography>
                    <Typography variant='body1'sx={{textAlign:'justify'}}>
                          In fact, users who used rBuilder reported getting hired an average of 48 days faster.
                    </Typography>
                    <Typography variant='body1' sx={{textAlign:'justify'}}>
                      Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.
                    </Typography>
              </div>
              <div style={{width:'30%'}}>
                 <Box sx={{ width: '100%' }}>
  <Grid container rowSpacing={2} columnSpacing={3}>

    <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCFlTKJVh1otOTJKGKUiyOIYtzY5VUcZmF1GD_7p6kQ&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>

   <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpiLwwR4kmaQ4xVDx24BWPvXDm9BS9jmokchS7suRgg&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
 <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjk39SYfrN4IeneaSOuYd0dTuQLUtkjngct6_IcUg07w&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
   <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxS4Wig0GydZxKpbR8BpScW4NTBHPAqJP0_dCva82pA&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
    <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CVtuCotE6_3qdMOH-uc-0Kit5hOlMlcC2LOQR1_yBw&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
    <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2-MOc9GEX9Xm0b-_i82ANHouYvvy4hrZRwjg_L6W5w&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
    <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnFVYxZmhNDkAcE9NyEdyAA8cvyfpbswLENF4luQXxg&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
    <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfCNEXzvbJo_JIq0ztx4gAEBbjEZRImtzEX3jwe2Yxw&s=10"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
    <Grid size={4}>
      <Paper sx={{ overflow: 'hidden', height:'100%' }}>
        <img
          src="https://t3.ftcdn.net/jpg/19/43/61/78/360_F_1943617882_OtI32xAnfk7LmKkX6I24Rltm54eYJIKs.jpg"
          alt="User"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Paper>
    </Grid>
  </Grid>
  
</Box>
              </div>
        </Stack>
      </section>
    </div>
  )
}

export default Home