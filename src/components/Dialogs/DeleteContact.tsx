import { FC, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import { useDeleteContact } from '../../lib/ReactQuery'

interface IProps {
  contactDetails: {
    id: number
    name: string
    phone: string
    gender: string
    status: string
    address: string
  }
}


const DeleteContact: FC<IProps> = ({ contactDetails }) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const deleteContact = useDeleteContact()

  const { handleSubmit, formState: { isSubmitting } } = useForm()

  const onDeleteContact = async () => {
    await deleteContact.mutateAsync({
      id: String(contactDetails.id)
    })
  }

  return (
    <>
      <button
        type="button"
        className="outline-none"
        onClick={openModal}
      >
        <RiDeleteBin3Line className="w-6 h-6 text-red-600" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="font-poppins w-full max-w-md transform overflow-hidden rounded-2xl text-white bg-custom-black-secondary p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Delete Contact
                  </Dialog.Title>
                  <div className="mt-3">
                    <p className=" text-neutral-300">
                      Are you sure you want to permanently delete {contactDetails.name}.
                    </p>
                  </div>

                  <div className="flex flex-row items-center w-full mt-4 space-x-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-full p-3 rounded-lg bg-red-600 hover:bg-opacity-60"
                      onClick={handleSubmit(onDeleteContact)}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Deleting...' : 'Delete'}
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-full p-3 rounded-lg bg-custom-black hover:bg-opacity-60"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DeleteContact