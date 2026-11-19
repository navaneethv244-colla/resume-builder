import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import summaries from '../assets/summaries.json'
import jobSkills from '../assets/jobSkills.json'
import { addResumeAPI } from '../services/apiServices';
import { useNavigate } from 'react-router-dom'


const steps = ['Basic Information', 'Contact Details', 'Education Details','Review & Submit'];

export default function ResumeInput({resumeDetails,setresumeDetails}) {

  const navigate = useNavigate()
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = React.useCallback((step) => {
    return step === 1;
  }, []);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
   const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
      resetButtonRef.current.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
      nextButtonRef.current.focus();
      return;
    }
    if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
      // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
      nextButtonRef.current.focus();
    }
  }, [activeStep, isStepOptional]);

  const renderStepsContent=(stepsCount)=>{
   switch(stepsCount){
      case 0: return(
        <div>
          <h1>Basic Information</h1>
          
      <TextField value={resumeDetails.name} onChange={(e)=>setresumeDetails({...resumeDetails,name:e.target.value})} sx={{width:'750px'}} id="outlined-basic" label="FullName" variant="standard" width='200px' /> <br />
      <TextField value={resumeDetails.location} onChange={(e)=>setresumeDetails({...resumeDetails,location:e.target.value})} sx={{width:'750px'}} id="filled-basic" label="Location" variant="standard" /> <br />
      {/* <TextField value={resumeDetails.jobTitle} onChange={(e)=>setresumeDetails({...resumeDetails,jobTitle:e.target.value})} sx={{width:'750px'}}  id="standard-basic" label="Job-Title" variant="standard" /> */}

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Job Title</InputLabel>
        <Select
          sx={{width:'750px'}}
          value={resumeDetails.jobTitle}
          onChange={(e)=>setresumeDetails({...resumeDetails,jobTitle:e.target.value})}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={age}
          // onChange={handleChange}
        >
          {
            jobRole.jobRoles.map(item=>(
              <MenuItem value={item}>
                <em>{item}</em>
              </MenuItem>
          
            ))
          }
        </Select>
      </FormControl>
    
        </div>
      )

      case 1: return(
         <div>
          <h1>Contact Details</h1>
          <TextField value={resumeDetails.email} onChange={(e)=>setresumeDetails({...resumeDetails,email:e.target.value})} sx={{width:'750px'}} id="outlined-basic" label="Email" variant="standard" width='200px' /> <br />
        <TextField value={resumeDetails.contactNumber} onChange={(e)=>setresumeDetails({...resumeDetails,contactNumber:e.target.value})} sx={{width:'750px'}} id="filled-basic" label="Contact Number" variant="standard" /> <br />
        <TextField value={resumeDetails.linkedin} onChange={(e)=>setresumeDetails({...resumeDetails,linkedin:e.target.value})} sx={{width:'750px'}}  id="standard-basic" label="Linkedin Link" variant="standard" />
        <TextField value={resumeDetails.github} onChange={(e)=>setresumeDetails({...resumeDetails,github:e.target.value})} sx={{width:'750px'}}  id="standard-basic" label="Github Link" variant="standard" />
        </div>
      )

      case 2: return(
         <div>
          <h1>Education Details</h1>
          <TextField value={resumeDetails.degree} onChange={(e)=>setresumeDetails({...resumeDetails,degree:e.target.value})} sx={{width:'750px'}} id="outlined-basic" label="Bachelors Degree" variant="standard" width='200px' /> <br />
        <TextField value={resumeDetails.college} onChange={(e)=>setresumeDetails({...resumeDetails,college:e.target.value})} sx={{width:'750px'}} id="filled-basic" label="College/University Name" variant="standard" /> <br />
        <TextField value={resumeDetails.year} onChange={(e)=>setresumeDetails({...resumeDetails,year:e.target.value})} sx={{width:'750px'}}  id="standard-basic" label="Year Of Graduation" variant="standard" />
        </div>
      )

      case 3: return(
         <div>
          <p>Our AI will generate skills & summary according to your job role.</p>
        </div>
      )
      default:return(
        null
      )

   }

  }

  const handleSkillsAndSummay = ()=>{
      setresumeDetails({...resumeDetails,skills:jobSkills[resumeDetails.jobTitle],summary:summaries[resumeDetails.jobTitle]})
      handleNext()
  }

  const handleAddResume = async()=>{
    try {
      const response = await addResumeAPI(resumeDetails)
      console.log(response);
      if(response.status === 201)
      {
        alert('resume added successfully')
        const resumeId = response.data.id
        setTimeout(()=>{
            navigate(`/resume/${resumeId}`)
        },2000)
      }
      
    } 
    catch (err) 
    {
      console.log(err);
      
    }
  }


  return (
  <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleAddResume} ref={resetButtonRef}>
             Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step  {activeStep + 1}</Typography>
          <Box>
            {
              renderStepsContent(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Box>
              {activeStep === steps.length - 1 ?
              <Button onClick={handleSkillsAndSummay}>
                Generate AI Skills and Summary
              </Button>
               : <Button onClick={handleNext} ref={nextButtonRef}>
                Next
              </Button>}
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}