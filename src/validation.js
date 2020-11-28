import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})

export const SignUpSchema = Yup.object({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().email('Invalid email format').required('Email required'),
    phone: Yup.number().required('Phone number required'),
    password: Yup.string().required('Password required'),
    confirmPassword: Yup.string()
    .oneOf([ Yup.ref('password'), null ], 'Passwords must match')
})