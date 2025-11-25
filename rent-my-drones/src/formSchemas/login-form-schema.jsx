
import * as yup from 'yup'


const LoginFormSchema = yup.object().shape({
    email: yup.string()
        .trim()
        .required("Email/Password is required. Please fill out field"),
    password: yup.string()
        .trim()
        .required("Email/Password is required. Please fill out field")
})

export default LoginFormSchema