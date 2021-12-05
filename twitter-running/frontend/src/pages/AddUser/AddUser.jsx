import React from 'react'
import { Container, Table, Row, Col, Form, Button } from 'react-bootstrap'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './AddUser.scss'

const AddUser = ({ history }) => {
  const [users, setUsers] = useState('')
  const [whitelistUser, setWhitelistUser] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.role === 'ADMIN') {
      axios
        .get('https://baylor-board.herokuapp.com//whitelist-users')
        .then((res) => {
          setUsers(res.data)
        })
    } else {
      if (userInfo) {
        history.push('/forbidden')
      } else {
        history.push('/login')
      }
    }
  }, [users, userInfo, history])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://baylor-board.herokuapp.com//whitelist-users', {
        user: whitelistUser,
      })
      .then((res) => {})
    setWhitelistUser('')
  }

  const delHandler = (id) => {
    axios.delete(`https://baylor-board.herokuapp.com//whitelist-users/${id}`)
  }

  return (
    <>
      <Container fluid className='table-container'>
        <Row className='justify-content-center mb-4'>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className='mb-3'
                controlId='formHorizontalUser'
              >
                <Form.Label column sm={4}>
                  New Whitelist User
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type='text'
                    name='whitelistUser'
                    value={whitelistUser}
                    placeholder='User Name'
                    onChange={(event) => setWhitelistUser(event.target.value)}
                  />
                </Col>
              </Form.Group>
              <Row className='justify-content-end mr-1'>
                <Button type='submit'>Add</Button>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <h1 class='display-4'>Whitelisted Users</h1>
        </Row>

        <Row className='justify-content-center'>
          <Col md={8}>
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.user}</td>
                      <td>
                        <DeleteOutlineIcon
                          className='delUser'
                          onClick={() => delHandler(user.id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddUser
