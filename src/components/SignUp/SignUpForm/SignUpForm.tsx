import { Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField} from '@mui/material';
import React from 'react';
import { useSignUpFormik } from './useSignUpFormik';


export const SignUpForm = () => {
  const [checked, setChecked] = React.useState(true);
  const [preferences, setPreferences] = React.useState('');

  
  const handleChange = (event: SelectChangeEvent) => {
    setPreferences(event.target.value);
  };
    const formik=useSignUpFormik({
        onSubmit(values, formikHelpers){
          console.log("formik values",values);
          alert("This is a success alert! ");
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
       
        <Grid>
        <TextField 
         id="username"
         label="Username"
         variant="outlined"
         name="username"
         value={formik.values.username}
         onChange={formik.handleChange} 
         sx={{marginBottom:2,padding:1}}
         error={!!formik.errors.username && formik.touched.username}
         helperText={formik.errors.username}
        />

        <TextField 
         id="email"
         label="Email"
         variant="outlined"
         name="email"
         value={formik.values.email}
         onChange={formik.handleChange} 
         sx={{marginBottom:2,padding:1}}
         error={!!formik.errors.email && formik.touched.email}
         helperText={formik.errors.email}
        />
        </Grid>

        <Grid>
        <TextField
         id="password" 
         label="Password"
         type="password"
         variant="outlined"
         name="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         sx={{marginBottom:2,padding:1}}
         error={!!formik.errors.password && formik.touched.password}
         helperText={formik.errors.password}
        />

         <TextField
         id="confirmpassword" 
         label="Confirm Password"
         type="password"
         variant="outlined"
         name="confirmpassword"
         value={formik.values.confirmpassword}
         onChange={formik.handleChange}
         sx={{marginBottom:2,padding:1}}
         error={!!formik.errors.confirmpassword && formik.touched.confirmpassword}
         helperText={formik.errors.confirmpassword}
        />
        </Grid>
        <Grid sx={{padding:1}}>
        
        <TextField 
          id="age"
          label="Age"
          type="number"name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          sx={{marginBottom:2,padding:3}}
          error={!!formik.errors.age && formik.touched.age}
          helperText={formik.errors.age}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
   </FormControl>
    </Grid>

    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Preferences</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={preferences}
        onChange={handleChange}
        label="Preferences"
       
      >
        <MenuItem value="">
          
        </MenuItem>
        <MenuItem value={10}>Action</MenuItem>
        <MenuItem value={20}>Comedy</MenuItem>
        <MenuItem value={30}>Thriller</MenuItem>
        <MenuItem value={30}>Fantasy</MenuItem>
      </Select>
    </FormControl>

    <FormControlLabel 
     control={<Checkbox defaultChecked />} 
     name="checkbox"
     label="I Accept All Terms and Conditions" />
      <Button type="submit"variant="contained">
        Sign Up
      </Button>
      </Box>
  )
}
