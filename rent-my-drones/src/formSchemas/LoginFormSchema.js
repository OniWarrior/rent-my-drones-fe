import * as yup from 'yup'


const LoginFormSchema = yup.object().shape({
    username:yup.string()
     .trim()
     .required("Username is required. Please fill out field")

})