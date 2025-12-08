import * as yup from 'yup'


const AddDroneFormSchema = yup.object().shape({
    drone_name: yup.string()
        .trim()
        .required("Please enter the name of the drone"),
    drone_description: yup.string()
        .required("Please enter description of drone"),
    drone_cost: yup.number()
        .typeError("Please enter a drone cost") // This message covers the "" -> NaN error
        .required("Please enter a drone cost")
        .positive('please enter a positive cost'),
    drone_url: yup.string()
        .url('Invalid url format')
        .required("Please enter a url of your drone image that is online: 'https://example.com'")

})
export default AddDroneFormSchema