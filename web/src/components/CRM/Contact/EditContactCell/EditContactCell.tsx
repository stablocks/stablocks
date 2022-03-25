import { useState } from 'react'
import type { FindEditContactQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import ContactForm from '../ContactForm'

export const QUERY = gql`
  query EditContact($id: String!) {
    contact(id: $id) {
      id
      firstName
      lastName
      email
      phone
      address {
        address
        addressTwo
        city
        state
        country
        zip
      }
    }
  }
`

const UPDATE_CONTACT_MUTATION = gql`
  mutation UpdateContactMutation($id: String!, $input: UpdateContactInput!) {
    updateContact(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      phone
      address {
        address
        addressTwo
        city
        state
        country
        zip
      }
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Contact`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Contacts', to: routes.contacts() },
        { title: 'Contact', to: '#' },
      ]}
      search={{ label: 'contacts', type: 'contact' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  contact,
}: CellSuccessProps<FindEditContactQuery>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateContact, { loading, error }] = useMutation(
    UPDATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Contact updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateContact({ variables: { id, input } })
  }

  const fullName = `${contact.firstName} ${contact.lastName}`

  return (
    <>
      <PageTitle
        title={`Edit Contact`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Contacts', to: routes.contacts() },
          { title: fullName, to: routes.contact({ id: contact.id }) },
        ]}
        search={{ label: 'contacts', type: 'contact' }}
      />
      <ContactForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        contact={contact}
      />
    </>
  )
}
