
import React from 'react'

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

const Downloads = () => {
  return (
    <Box sx={{ p: 2 }}>

      {/* Heading */}

      <Stack
        direction="row" spacing={80}
      >
        <Typography variant="h5">
          All Downloaded Resume Details
        </Typography>

        <Button
          variant="contained"
          sx={{ background: 'brown', fontSize: '10px' }}
        >
          View in chart
        </Button>
      </Stack>

      {/* Total Downloads */}

      <Typography sx={{ fontSize: '14px', mb: 2 }}>
        Total downloaded resumes from our site
        <Box component="span" sx={{ color: 'red', fontWeight: 'bold', ml: 1 }}>
          10
        </Box>
      </Typography>

      {/* Resume Cards */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: 2,
          width: '100%',
          overflowX: 'auto',
          alignItems: 'stretch'
        }}
      >

        {/* Resume 1 */}

        <Paper elevation={3} sx={{
          flex: '1 1 0',
          minWidth: 0,
          p: 1.5,
          overflowWrap: 'anywhere'
        }}>

          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            Arav Sharma
          </Typography>

          <Typography sx={{ fontSize: '10px' }}>
            Phone: 345643790
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Email: arav@gmail.com
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            LinkedIn: Arav
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Location: Pune, India
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Professional Summary
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js developer experienced in building scalable backend
            services and REST APIs. Skilled in server-side development,
            database integration, and performance optimization.
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js | Express.js | REST APIs | MongoDB |
            Authentication | Middleware | Server Side Logic |
            API Security | Database Integration | Git
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Bachelor's Degree in B.Tech in Computer Science
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            SRM Institute of Science and Technology
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Year of Graduation: 2021
          </Typography>

        </Paper>


        {/* Resume 2 */}

        <Paper elevation={3} sx={{
          flex: '1 1 0',
          minWidth: 0,
          p: 1.5,
          overflowWrap: 'anywhere'
        }}>

          <Typography sx={{ fontSize: '10px' }}>
            Review at: 8/14/2026, 11:22:34 AM
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            Karthik Rajan
          </Typography>

          <Typography sx={{ fontSize: '10px' }}>
            Phone: Not clearly readable
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Email: karthik@gmail.com
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            LinkedIn: LinkedIn profile link
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            GitHub: GitHub profile link
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Location: Estonia
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Professional Summary
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Data scientist with experience in machine learning,
            statistical analysis, and predictive modeling.
            Skilled in transforming large datasets into
            actionable insights.
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Python | Machine Learning | Statistics |
            Data Visualization | Pandas | NumPy |
            Deep Learning | Model Evaluation |
            Data Analysis | SQL
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Bachelor's Degree in MCA
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Boston University
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Year of Graduation: 2004
          </Typography>

        </Paper>


        {/* Resume 3 */}

        <Paper elevation={3} sx={{
          flex: '1 1 0',
          minWidth: 0,
          p: 1.5,
          overflowWrap: 'anywhere'
        }}>

          <Typography sx={{ fontSize: '10px' }}>
            Review at: 8/14/2026, 11:22:48 AM
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            Alexia Monte
          </Typography>

          <Typography sx={{ fontSize: '10px' }}>
            Phone: Not clearly readable
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Email: Not clearly readable
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            LinkedIn: LinkedIn profile link
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            GitHub: GitHub profile link
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Location: County Tipperary, Italy
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Professional Summary
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Data scientist with experience in machine learning,
            statistical analysis, and predictive modeling.
            Skilled in transforming large datasets into
            actionable insights.
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Python | Machine Learning | Statistics |
            Data Visualization | Pandas | NumPy |
            Deep Learning | Model Evaluation |
            Data Analysis | SQL
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Bachelor's Degree in MCA
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Boston University
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Year of Graduation: 2008
          </Typography>

        </Paper>

      </Box>

    </Box>
  )
}

export default Downloads
