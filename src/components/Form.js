import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import axios from 'axios'; // Import Axios for making HTTP requests
import { ToastContainer, toast } from 'react-toastify';

const initialValues = {
    // firstName: "",
    // lastName: "",
    email: "",
    password:"",
    // contact: "",
    // address1: "",
};

//Validate phone number with string that matches Regex
//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
    // firstName: yup.string().required('required'),
    // lastName: yup.string().required('required'),
    email: yup
        .string()
        .email('Invalid Email')
        .required('required'),
    password:yup.string().required('required'),
    // contact: yup
    //     .string()
    //     .matches(phoneRegExp, 'Phone number is not valid')
    //     .required('required'),
    // address1: yup.string().required('required'),

});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    // Function to handle form submission
    const handleFormSubmit = async (values,{ resetForm }) => {
        try {
            // Make POST request to your API endpoint with form data
            const response = await axios.post('http://localhost:3000/login', values);
            console.log('Form data sent successfully:', response.data);
            toast.success('Form submitted successfully!');
        } catch (error) {
            console.error('Error sending form data:', error);
            toast.error('Error submitting form. Please try again later.');
        }
    };

    return (
        <Box m='20px'>
           
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0,1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                            }}
                        >
                            {/* <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='First Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name='firstName'
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Last Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name='lastName'
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: 'span 2' }}
                            /> */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name='email'
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name='password'
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            {/* <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Contact Number'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name='contact'
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Adress 1'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name='address1'
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: 'span 4' }}
                            /> */}

                        </Box>
                        <Box display='flex' justifyContent='center' mt='20px'>
                            <Button type='submit' color='secondary' variant='contained'>
                                Submit
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
            <ToastContainer autoClose={1000} hideProgressBar={true} />
        </Box>
    );
};

export default Form