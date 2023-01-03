import { Alert, Box, Button, Stack, TextField} from '@mui/material';
import { NavLink } from 'react-router-dom';



import { usePasswordFormik } from './usePasswordFormik';

export const PasswordForm = () => {
    const formik=usePasswordFormik({
        onSubmit(values, formikHelpers){
          console.log("formik values",values);
          alert("Check your email!")
        },
      });
    
  return (
    <Box component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop:4,
        
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      >
        <TextField 
        id="email" 
        label="email" 
        variant="filled"
        name="email"
         value={formik.values.email}
         onChange={formik.handleChange} 
         sx={{marginBottom:2}}
         error={!!formik.errors.email&& formik.touched.email}
         helperText={formik.errors.email} 
         />
      
     <Button type="submit"variant="contained">
        Reset Password
      </Button>
      </Box>
      
  )
}