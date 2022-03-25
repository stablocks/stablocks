import type { FindSupervisorSelectQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSupervisorSelectQuery($userId: String) {
    availableSupervisors(userId: $userId) {
      id
      firstName
      lastName
    }
  }
`

export const Loading = () => <></>

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  availableSupervisors,
}: CellSuccessProps<FindSupervisorSelectQuery>) => {
  return (
    <>
      <option value="">-- Select --</option>
      {availableSupervisors.map((option) => (
        <option
          key={option.id}
          value={option.id}
        >{`${option.firstName} ${option.lastName} (${option.id})`}</option>
      ))}
    </>
  )
}
