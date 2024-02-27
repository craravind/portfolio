import * as yup from'yup';

export const FormVAlidation = yup.object().shape({
    Name: yup.string().required("Name is Required"),
    Email: yup.string().email("Email Id is Required").required('Email is Required'),
    Message: yup.string().required('Drop Some Thing about Page & some Tips/Ideas where to improve'),
})