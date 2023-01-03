import { Box, Button, TextField} from '@mui/material';
import { useLoginFormik } from './useLoginFormik';

export const LoginForm = () => {
    const formik=useLoginFormik({
        onSubmit(values, formikHelpers){
          console.log("formik values",values);
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
         id="username"
         label="username"
         variant="outlined"
         name="username"
         value={formik.values.username}
         onChange={formik.handleChange} 
         sx={{marginBottom:2}}
         error={!!formik.errors.username && formik.touched.username}
         helperText={formik.errors.username}
        />
        <TextField
         id="password" 
         label="Password"
         type="password"
         variant="outlined"
         name="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         sx={{marginBottom:2}}
         error={!!formik.errors.password && formik.touched.password}
         helperText={formik.errors.password}
        />

      <Button type="submit"variant="contained">
        Login 
      </Button>
      </Box>
  )
}
