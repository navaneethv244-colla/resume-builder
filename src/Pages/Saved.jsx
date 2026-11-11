import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const Saved = () => {
  return (
    <div>
     <Typography variant='h3' sx={{textAlign:'center',mt:'10px'}}>
     All saved resumes
     </Typography>
    <Container>
         <Typography variant='p' sx={{textAlign:'center'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas, unde iste velit libero explicabo eius temporibus recusandae minima doloremque quis architecto nam dolor tempore tenetur delectus repellat fuga deleniti.
      </Typography>
      <TextField placeholder='Enter job title' sx={{width:'100%',my:'10px',position:'relative'}}/>
      <SearchIcon sx={{position:'absolute',right:'80px',top:'200px'}}/>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">Job role</TableCell>
            <TableCell align="right">...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
              <TableCell component="th" scope="row">
              3245
              </TableCell>
             <TableCell align="right"><Link>Navaneeth</Link></TableCell>
              <TableCell align="right">Full stack developer</TableCell>
              <TableCell align="right">delete</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    
    </div>
  )
}

export default Saved
