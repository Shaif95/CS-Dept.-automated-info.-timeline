import React from 'react'
import './Register.scss'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { Formik } from 'formik'
import { register, logout } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Meta from '../../components/Meta'
import { toast } from 'react-toastify'
import { options } from '../../constants/toastConstant'

const Register = ({ history }) => {
  const dispatch = useDispatch()
  // const userRegister = useSelector((state) => state.userRegister)
  // const { userInfo: userRegInfo, error } = userRegister

  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo, error } = userRegister

  const redirect = '/'

  useEffect(() => {
    if (error) {
      dispatch(logout())
      toastHandler()
    }
    if (userInfo) {
      history.push(redirect)
    }
    // eslint-disable-next-line
  }, [history, userInfo, redirect, error])

  const toastHandler = () => {
    toast.info(error, options)
  }

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, '*First Name must have at least 3 characters')
      .max(10, "*First Name can't be longer than 10 characters")
      .required('*First Name is required'),
    lastName: yup
      .string()
      .min(3, '*Last Name must have at least 3 characters')
      .max(10, "*Last Name can't be longer than 10 characters")
      .required('*Last Name is required'),
    emailAddress: yup
      .string()
      .email('*Must be a valid email address')
      .required('*Email is required'),
    password: yup.string().required('*Password is required'),
  })

  return (
    <>
      <Meta title='User Registration' />
      <Container fluid className='adduser-container'>
        <Row className='justify-content-center'>
          <Col lg={6} md={7} sm={8} xs={10} className='form-wrapper'>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                emailAddress: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true)
                actions.setSubmitting(true)
                dispatch(register(values))
                actions.setSubmitting(false)
                actions.resetForm()
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form className='form-container' onSubmit={handleSubmit}>
                  <Form.Group className='mb-3' controlId='formGroupFirstName'>
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='First Name'
                      name='firstName'
                      autocomplete='off'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      className={
                        touched.firstName && errors.firstName ? 'error' : null
                      }
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className='error-message'>{errors.firstName}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formGroupLastName'>
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Last Name'
                      name='lastName'
                      autocomplete='off'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      className={
                        touched.lastName && errors.lastName ? 'error' : null
                      }
                    />
                    {touched.lastName && errors.lastName ? (
                      <div className='error-message'>{errors.lastName}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    className='mb-3'
                    controlId='formGroupEmailAddress'
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Email Address'
                      name='emailAddress'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.emailAddress}
                      className={
                        touched.emailAddress && errors.emailAddress
                          ? 'error'
                          : null
                      }
                    />
                    {touched.emailAddress && errors.emailAddress ? (
                      <div className='error-message'>{errors.emailAddress}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      name='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password ? 'error' : null
                      }
                    />
                    {touched.password && errors.password ? (
                      <div className='error-message'>{errors.password}</div>
                    ) : null}
                  </Form.Group>

                  <Row className='justify-content-end mr-1'>
                    <Button variant='primary btn-style' type='submit'>
                      Register
                    </Button>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <span className='login-register'>
            Already a member? Login from{' '}
            <Link className='link-style' to='/login'>
              Here
            </Link>
          </span>
        </Row>
      </Container>
    </>
  )
}

export default Register
