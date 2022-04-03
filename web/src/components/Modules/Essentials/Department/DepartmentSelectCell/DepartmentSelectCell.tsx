import type { FindDepartmentSelectQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindDepartmentSelectQuery {
    departments {
      id
      name
    }
  }
`

export const Loading = () => <></>

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  departments,
}: CellSuccessProps<FindDepartmentSelectQuery>) => {
  return departments.map((option) => (
    <option key={option.id} value={option.id}>
      {option.name}
    </option>
  ))
}
