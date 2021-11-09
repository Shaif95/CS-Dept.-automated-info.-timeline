import Meta from '../../components/Meta'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Academic = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const redirect = '/forbidden'

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else if (!userInfo.isAdmin) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  return (
    <>
      <Meta title='Academic' />
      <h1 className='text text-center'>Academic Page</h1>
    </>
  )
}

export default Academic
