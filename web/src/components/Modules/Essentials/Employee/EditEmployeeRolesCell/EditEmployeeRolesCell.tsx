import type { EditRoleByUserId } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query EditRole($employeeId: String!) {
    role(employeeId: $employeeId) {
      employeeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  editEmployeeRoles,
}: CellSuccessProps<EditEmployeeRolesQuery>) => {
  return (
    <ul>
      {editEmployeeRoles.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
