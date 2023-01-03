import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  email: Yup.string()
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email")
  .required("Email is required!"),
 
});

interface EmailFields {
  email: string;
  
}

interface UseEmailFormOptions {
  onSubmit: (
    values: EmailFields,
    formikHelpers: FormikHelpers<EmailFields>
  ) => void;
}

export const usePasswordFormik = ({ onSubmit }: UseEmailFormOptions) => {
  return useFormik({
    initialValues: {
      email: "",
    
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: PasswordSchema,
    onSubmit,
  });
};
