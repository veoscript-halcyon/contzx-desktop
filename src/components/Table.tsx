import React from 'react'
import { Link } from 'react-router-dom'
import DeleteContact from './Dialogs/DeleteContact'
import { useGetContacts } from '../lib/ReactQuery'
import { RiEditLine } from 'react-icons/ri'

const Table = () => {

  const { data: contacts, isLoading, isError } = useGetContacts()

  return (
    <React.Fragment>
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
      {(!isLoading || isError) && (
        <React.Fragment>
          {contacts.length === 0 && (
            <div className="flex flex-col items-center w-full space-y-2">
              <h2 className="font-bold text-xl text-neutral-400">There is no public contacts right now.</h2>
              <Link
                to="/new"
                className="flex items-center justify-center w-full max-w-sm p-3 rounded-lg bg-blue-500 hover:bg-opacity-60"
              >
                Create First Contact
              </Link>
            </div>
          )}
          {contacts.length > 0 && (
            <table className="w-full select-none overflow-hidden rounded-xl border-collapse border border-slate-500 bg-custom-black-secondary">
              <thead>
                <tr>
                  <th className="border border-slate-600 p-3">Name</th>
                  <th className="border border-slate-600 p-3">Phone</th>
                  <th className="border border-slate-600 p-3">Address</th>
                  <th className="border border-slate-600 p-3">Gender</th>
                  <th className="border border-slate-600 p-3">Civil Status</th>
                  <th className="border border-slate-600 p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact: { id: number, name: string, phone: string, address: string, gender: string, status: string }) => (
                  <tr
                    key={contact.id}
                    className="cursor-pointer text-neutral-300 hover:bg-custom-black"
                  >
                    <td className="border border-slate-600 p-3">{ contact.name }</td>
                    <td className="border border-slate-600 p-3">{ contact.phone }</td>
                    <td className="border border-slate-600 p-3">{ contact.address }</td>
                    <td className="border border-slate-600 p-3">{ contact.gender }</td>
                    <td className="border border-slate-600 p-3">{ contact.status }</td>
                    <td className="border border-slate-600 p-3">
                      <div className="inline-flex items-center justify-center w-full space-x-5">
                        <Link
                          to={`/edit/${contact.id}`}
                          className="outline-none"
                        >
                          <RiEditLine className="w-6 h-6 text-green-400" />
                        </Link>
                        <DeleteContact contactDetails={contact} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Table