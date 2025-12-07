import * as yup from 'yup'


const AddDroneFormSchema = yup.object().shape({
    drone_name: yup.string()
        .trim()
        .required("Please enter the name of the drone"),
    drone_description: yup.string()
        .required("Please enter description of drone"),
    drone_cost: yup.number()
        .required("please enter cost of drone"),
    drone_url: yup.string()
        .url('Invalid url format')
        .required("Please enter a url of your drone image that is online: 'https://example.com'")

})
export default AddDroneFormSchema