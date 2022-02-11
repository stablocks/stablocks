import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes, navigate } from '@redwoodjs/router'
import UserHeader from 'src/components/Layout/UserHeader'
import Popup from 'src/components/Elements/Popup'
import { MailIcon, PencilAltIcon, XCircleIcon } from '@heroicons/react/outline'
import EditUserCell from 'src/components/Essentials/User/EditUserCell'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const User = ({ user }) => {
  const [editUserOpen, setEditUserOpen] = useState(false)

  const fullName = `${user.firstName} ${user.lastName}`

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Employee deleted')
      navigate(routes.employees())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <UserHeader
        name={fullName}
        image={user.profileImage}
        position={user.position}
        breadcrumbs={[
          { title: 'Organization', to: routes.organization() },
          { title: 'Employees', to: routes.employees() },
        ]}
        currentCrumbLabel={fullName}
        buttons={[
          {
            label: 'Delete',
            icon: XCircleIcon,
            onClick: () => onDeleteClick(user.id),
          },
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editEmployee({ id: user.id })),
            roles: ['admin'],
          },
          {
            label: 'Email',
            icon: MailIcon,
            onClick: () => {
              if (typeof window !== 'undefined') {
                window.open(`mailto:${user.email}`, '_blank')
              }
            },
          },
        ]}
        search={{ label: 'employees', type: 'employee' }}
      />

      <Popup
        isOpen={editUserOpen}
        setIsOpen={setEditUserOpen}
        title={`Edit ${fullName}`}
      >
        <EditUserCell id={user.id} />
      </Popup>

      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
          <section aria-labelledby="applicant-information-title">
            <div className="rounded-lg border border-gray-300 bg-white">
              <div className="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Information
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section
          aria-labelledby="timeline-title"
          className="lg:col-span-1 lg:col-start-3"
        >
          <div className="rounded-lg border border-gray-300 bg-white px-4 py-5 sm:px-6">
            <h2
              id="timeline-title"
              className="text-lg font-medium text-gray-900"
            >
              Timeline
            </h2>

            {/* Activity Feed */}
            <div className="mt-6 flow-root">
              <ul className="-mb-8"></ul>
            </div>
            <div className="justify-stretch mt-6 flex flex-col">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Advance to offer
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            User {user.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <th>Middle name</th>
              <td>{user.middleName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Other emails</th>
              <td>{user.otherEmails}</td>
            </tr>
            <tr>
              <th>Profile image</th>
              <td>{user.profileImage}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{user.position}</td>
            </tr>
            <tr>
              <th>Supervisor id</th>
              <td>{user.supervisorId}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{user.type}</td>
            </tr>
            <tr>
              <th>Resume</th>
              <td>{user.resume}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(user.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(user.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default User
