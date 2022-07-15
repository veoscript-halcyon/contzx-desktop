import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetContact } from '../../lib/ReactQuery'
import DefaultLayout from '../../layouts/Default'
import EditContact from '../../components/Forms/EditContact'

const EditID = () => {

  const { id } = useParams()

  const { data: contact, isLoading, isError } = useGetContact(String(id))

  return (
    <DefaultLayout>
      {isLoading && (
        <div className="inline-flex justify-center w-full">
          <h2 className="font-bold text-xl text-neutral-400">Loading...</h2>
        </div>
      )}
      {isError && (
        <div className="inline-flex justify-center w-full">
          <h2 className="font-bold text-xl text-neutral-400">There is an error while fetching data...</h2>
        </div>
      )}
      {!isLoading && (
        <EditContact contactDetails={contact} />
      )}
    </DefaultLayout>
  )
}

export default EditID