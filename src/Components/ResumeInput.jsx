import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const steps = ['Basic Information', 'Contact details', 'Education Details','Review & submit'];

const ResumeInput = () => {
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
            <h1>basic informations</h1>
           <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch',display:'flex', flexDirection:'column' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="FullName" variant="standard" />
      <TextField id="standard-basic" label="Location" variant="standard" />
      <TextField id="standard-basic" label="Choose Job Title" variant="standard" />


      </Box>

          </div>
        )
        case 1: return(
          <div>
            <h1>Contact details</h1>
             <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch',display:'flex', flexDirection:'column' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Contact Number" variant="standard" />
      <TextField id="standard-basic" label="Github Link" variant="standard" />


      </Box>

          </div>
        )
        case 2: return(
          <div>
            <h1>Education Details</h1>
             <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch',display:'flex', flexDirection:'column' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Bachelors Degree" variant="standard" />
      <TextField id="standard-basic" label="College/University Name" variant="standard" />
      <TextField id="standard-basic" label="Year of Graduation" variant="standard" />


      </Box>

          </div>
        )
        case 3: return(
          <div>
            <p>Our Ai will generate skills & summary according to 
              your job role.Once the form get submitted,user won`t get the 
              Chance to update resume details. If you want to proceed please click 
              the <Typography component="span" sx={{ fontWeight: 'bold' }}>
              Generate AI Skill & Summary
              </Typography> button to submit.
            </p>
          </div>
        )
        default: return(
          null
        )
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
            <Button onClick={handleReset} ref={resetButtonRef}>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
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
            <Box  >
              {activeStep === steps.length - 1 ?
              <Button>
               GENERATE AI SKILLS AND SUMMARY
              </Button>
             :  <Button onClick={handleNext} ref={nextButtonRef}>
                Next
              </Button>}
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default ResumeInput;
