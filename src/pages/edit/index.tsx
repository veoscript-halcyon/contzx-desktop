import React from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../../layouts/Default'

const EditIndex = () => {

  const navigate = useNavigate()

  React.useEffect(() => {
    navigate('/', { replace: true })
  })
  return (
    <DefaultLayout>
      <h1 className="font-bold text-xl">Loading...</h1>
    </DefaultLayout>
  )
}

export default EditIndex