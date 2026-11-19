import React from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Preview = ({resumeDetails}) => {
  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <h2>{resumeDetails?.name || 'Your Name'}</h2>
        {resumeDetails?.jobTitle && (
          <h4 style={{ color: '#555', marginTop: '-5px', marginBottom: '15px' }}>
            {resumeDetails.jobTitle}
          </h4>
        )}

        <p className='fs-6 lh-1'>Phone: {resumeDetails?.contactNumber || resumeDetails?.phone || ''}</p>
        <p className='fs-6 lh-1'>Email: {resumeDetails?.email || ''}</p>
        <p className='fs-6 lh-1'>Linkedin: {resumeDetails?.linkedIn || ''}</p>
        <p className='fs-6 lh-1'>Github: {resumeDetails?.github || ''}</p>
        <p className='fs-6 lh-1'>Location: {resumeDetails?.location || ''}</p>

        <Divider sx={{ bgcolor: 'black', my: 3 }} />

        <h4>Professional Summary</h4>
        {Array.isArray(resumeDetails?.summary) ? (
          resumeDetails.summary.map((items, index) => (
            <p key={index}>{items}</p>
          ))
        ) : (
          <p>{resumeDetails?.summary || ''}</p>
        )}

        <Divider sx={{ bgcolor: 'black', my: 3 }} />

        <h4>Technical Skills</h4>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {Array.isArray(resumeDetails?.skills) && resumeDetails.skills.length > 0 ? (
            resumeDetails.skills.map((items, index) => (
              <Button key={index} variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                {items}
              </Button>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">No skills added yet</Typography>
          )}
        </Box>

        <Divider sx={{ bgcolor: 'black', my: 3 }} />

        <h4>Education</h4>
        <p className='fs-6 lh-1'>Degree: {resumeDetails?.degree || ''}</p>
        <p className='fs-6 lh-1'>College/University: {resumeDetails?.college || ''}</p>
        <p className='fs-6 lh-1'>Year: {resumeDetails?.year || ''}</p>
      </Paper>
    </Box>
  )
}

export default Preview