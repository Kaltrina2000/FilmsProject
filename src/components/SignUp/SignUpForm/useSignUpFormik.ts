import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
  .min(3, 'Too Short!')
  .max(50, 'Too Long!')
  .required("Username is required!"),
  
  email: Yup.string()
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email")
  .required("Email is required!"),

  password: Yup.string()
  .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
  .min(8, "Password is too short - should be 8 chars minimum")
  .required("Password is required!"),

  confirmpassword: Yup.string()
  .oneOf([Yup.ref('password')], 'Passwords does not match')
  .required("Confirm Password is required!"),

  age: Yup.number()
  .min(16,'You must be at least 16 years old')
  .required("Age is required!"),

 
});

interface SignUpFields {
  username: string;
  email:string;
  password: string;
  confirmpassword:string;
  age:string;
 
  
}

interface UseSignUpFormOptions {
  onSubmit: (
    values: SignUpFields,
    formikHelpers: FormikHelpers<SignUpFields>
  ) => void;
}

export const useSignUpFormik = ({ onSubmit }: UseSignUpFormOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      email:"",
      password: "",
      confirmpassword:"",
      age:"",
    
      
      
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: SignUpSchema,
    onSubmit,
  });
};
