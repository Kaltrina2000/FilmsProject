import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SignUpForm } from "../components/SignUp/SignUpForm/SignUpForm";



export const SignUp = () => {
  return (
    <Box
    sx={{
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    }}
 >
    
    <Box  
    sx={{
      border: 2,
      borderColor: "secondary.main",
      borderRadius: 1, 
      padding: "10px",
      minWidth:500,
    }}>
      
        <h1>Sign Up </h1>
      
    
      <SignUpForm/>
      
      <Box sx={{
        marginTop:2,
        display:"flex",
        justifyContent:"space-between",
        }}>
      <NavLink to="/Login">Already have an account?</NavLink>
      </Box>
    </Box> 
   </Box>
   
  );
};
