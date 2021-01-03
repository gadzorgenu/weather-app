import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})

export const SignUpSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email required'),
    password: Yup.string().required('Password required'),
    // confirmPassword: Yup.string()
    // .oneOf([ Yup.ref('password'), null ], 'Passwords must match')
})