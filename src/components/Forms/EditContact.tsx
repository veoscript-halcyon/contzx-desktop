import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useUpdateContact } from '../../lib/ReactQuery'

interface IProps {
  contactDetails: {
    id: string
    name: string
    phone: string
    gender: string
    status: string
    address: string
  }
}

interface FormData {
  name: string
  phone: string
  gender: string
  status: string
  address: string
}

const EditContact: React.FC<IProps> = ({ contactDetails }) => {

  const navigate = useNavigate()

  const updateContact = useUpdateContact()

  const defaultValues = {
    name: contactDetails.name,
    phone: contactDetails.phone,
    gender: contactDetails.gender,
    status: contactDetails.status,
    address: contactDetails.address
  }

  const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<FormData>({ defaultValues })

  const onEditContact = async (formData: FormData) => {
    await updateContact.mutateAsync({
      id: String(contactDetails.id),
      name: formData.name,
      phone: formData.phone,
      gender: formData.gender,
      status: formData.status,
      address: formData.address,
    },
    {
      onError: (error) => {
        console.error(error)
      },
      onSuccess: () => {
        navigate('/', { replace: true })
      }
    })
  }

  return (
    <form
      className="flex flex-col items-center w-full px-2 space-y-3"
      onSubmit={handleSubmit(onEditContact)}
    >
      <div className="flex flex-row items-start justify-center w-full space-x-3">
        <div className="flex flex-col w-full space-y-3">
          <div className="block w-full space-y-2">
            <label className="ml-2 text-neutral-400"htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="inline-flex w-full p-3 outline-none rounded-lg bg-transparent border border-custom-black-secondary focus:border-blue-500"
              {...register('name', { required: true })}
            />
          </div>
          <div className="block w-full space-y-2">
            <label className="ml-2 text-neutral-400"htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              className="inline-flex w-full p-3 outline-none rounded-lg bg-transparent border border-custom-black-secondary focus:border-blue-500"
              {...register('phone', { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div className="block w-full space-y-2">
            <label className="ml-2 text-neutral-400"htmlFor="gender">Gender</label>
            <select 
              id="gender"
              className="inline-flex w-full p-3 outline-none cursor-pointer rounded-lg bg-transparent border border-custom-black-secondary focus:border-blue-500"
              {...register('gender', { required: true })}
            >
              <option className="bg-custom-black" value=""></option>
              <option className="bg-custom-black" value="Male">Male</option>
              <option className="bg-custom-black" value="Female">Female</option>
            </select>
          </div>
          <div className="block w-full space-y-2">
            <label className="ml-2 text-neutral-400"htmlFor="status">Status</label>
            <select 
              id="status"
              className="inline-flex w-full p-3 outline-none cursor-pointer rounded-lg bg-transparent border border-custom-black-secondary focus:border-blue-500"
              {...register('status', { required: true })}
            >
              <option className="bg-custom-black" value=""></option>
              <option className="bg-custom-black" value="Single">Single</option>
              <option className="bg-custom-black" value="Married">Married</option>
              <option className="bg-custom-black" value="Widowed">Widowed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="block w-full space-y-2">
        <label className="ml-2 text-neutral-400"htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          className="inline-flex w-full p-3 outline-none rounded-lg bg-transparent border border-custom-black-secondary focus:border-blue-500"
          {...register('address', { required: true })}
        />
      </div>
      <div className="flex flex-row items-center w-full space-x-2">
        <button
          type="submit"
          className={`flex items-center justify-center w-full p-3 rounded-lg bg-green-600 hover:bg-opacity-60 ${isSubmitting ? 'cursor-wait' : 'cursor-pointer'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : 'Update'}
        </button>
        <button
          type="reset"
          className="flex items-center justify-center w-full p-3 rounded-lg bg-custom-black-secondary hover:bg-opacity-60"
          onClick={() => reset()}
        >
          Clear
        </button>
      </div>
    </form>
  )
}

export default EditContact