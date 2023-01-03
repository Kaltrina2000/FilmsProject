import { Box, Dialog, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { PasswordForm } from "../components/ForgotPassword/PasswordForm/PasswordForm";


export const ForgotPassword = () => {
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
      border: 1,
      borderColor: "secondary-main",
      borderRadius: 1, 
      padding: "10px",
      minWidth:400,

    }}>
      <h2>Forgot Password </h2><br></br>

      <Typography variant="caption" display="block" gutterBottom>
      Lost your password? Please enter your <br></br> email address.
         You will receive a link<br></br> to create a new password via email.
     </Typography>
   
    
      <PasswordForm/><br></br>
    

      <NavLink to="/login">Remember your password?</NavLink>
    </Box> 
  
   </Box>
  
  );
};
