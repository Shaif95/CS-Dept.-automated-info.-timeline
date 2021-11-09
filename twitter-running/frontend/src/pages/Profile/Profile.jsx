import React from 'react'
import Meta from '../../components/Meta'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Profile = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const redirect = '/login'

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  return (
    <>
      <Meta title='Profile Page' />
      <h1 className='text text-center'>Profile Page</h1>
    </>
  )
}

export default Profile
