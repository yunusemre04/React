import * as yup from 'yup'

export const formikScheme = yup.object().shape({
    email: yup.string().email('Email is not correct type').required('Please do not leave blank'),
    password: yup.string().required('Please do not leave blank'),
    age: yup.number().positive('Age must be positive number').integer().required('Please do not leave blank'),
    rePassword: yup.string().required('Please do not leave blank').oneOf([yup.ref('password'), 'Passwords are not match ']),
    term: yup.boolean().oneOf([true], 'Please accept the terms'),
})