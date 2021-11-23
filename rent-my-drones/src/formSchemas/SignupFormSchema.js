import * as yup from 'yup'


const SignUpFormSchema= yup.object().shape({
    username:yup.string()
     .trim()
     .required("Username is required. Please fill out field")
     .min(12,'A minimum of 12 characters is required'),
    password:yup.string()
     .trim()
     .required("Password is required. Please fill out field")
     .min(12,'A minimum of 12 characters is required for password')

})

export default SignUpFormSchema