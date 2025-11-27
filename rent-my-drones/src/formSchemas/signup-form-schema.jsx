import * as yup from 'yup'


const SignupFormSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .required("First Name is required. Please fill out field")
        .min(3, 'A minimum of 3 characters is required'),
    last_name: yup.string()
        .trim()
        .required("Last Name is required. Please fill out field")
        .min(3, 'A minimum of 3 characters is required'),
    email: yup.string()
        .trim()
        .required("Email is required. Please fill out field"),
    password: yup.string()
        .trim()
        .required("Password is required. Please fill out field")
        .min(12, 'A minimum of 12 characters is required for password')

})

export default SignupFormSchema