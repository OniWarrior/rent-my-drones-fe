import Password from 'antd/lib/input/Password'
import * as yup from 'yup'


const LoginFormSchema = yup.object().shape({
    username:yup.string()
     .trim()
     .required("Username/Password is required. Please fill out field"),
    password:yup.string()
     .trim()
     .required("Username/Password is required. Please fill out field")
})

export default LoginFormSchema