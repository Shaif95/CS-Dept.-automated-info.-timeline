import React from 'react'
import './Login.scss'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../actions/userActions'
import { useEffect } from 'react'
import Meta from '../../components/Meta'
import { toast } from 'react-toastify'
import { options } from '../../constants/toastConstant'

const Login = ({ history }) => {
  const validationSchema = yup.object().shape({
    emailAddress: yup.string().required('*Email Address is required'),
    password: yup.string().required('*Password is required'),
  })

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error } = userLogin

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

  return (
    <>
      <Meta title='User Login' />
      <Container fluid className='loginuser-container'>
        <Row className='justify-content-center'>
          <Col lg={6} md={7} sm={8} xs={10} className='form-wrapper'>
            <Formik
              initialValues={{ emailAddress: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true)
                dispatch(login(values))
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
                      Login
                    </Button>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <span className='login-register'>
            Not a member? Register from{' '}
            <Link className='link-style' to='/registration'>
              Here
            </Link>
          </span>
        </Row>
      </Container>
    </>
  )
}

export default Login
