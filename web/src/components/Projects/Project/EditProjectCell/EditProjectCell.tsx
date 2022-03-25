import { useState } from 'react'
import type { FindProjectQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'
import Loader from 'src/ui/Loader'
import PageTitle from 'src/ui/PageTitle'
import ProjectForm from '../ProjectForm'

export const QUERY = gql`
  query EditProject($id: String!) {
    project(id: $id) {
      id
      title
      description
    }
  }
`

const UPDATE_PROJECT_MUTATION = gql`
  mutation UpdateProjectMutation($id: String!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
      title
      description
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title={`Edit Project`}
      currentCrumbLabel="Edit"
      breadcrumbs={[
        { title: 'Projects', to: routes.projects() },
        { title: 'Project', to: '#' },
      ]}
      search={{ label: 'projects', type: 'project' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ project }: CellSuccessProps<FindProjectQuery>) => {
  const [isSaved, setIsSaved] = useState(false)
  const [updateProject, { loading, error }] = useMutation(
    UPDATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        setIsSaved(true)
        toast.success('Project updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProject({ variables: { id, input } })
  }

  return (
    <>
      <PageTitle
        title={`Edit Project`}
        currentCrumbLabel="Edit"
        breadcrumbs={[
          { title: 'Projects', to: routes.projects() },
          { title: project.title, to: routes.project({ id: project.id }) },
        ]}
        search={{ label: 'projects', type: 'project' }}
      />
      <ProjectForm
        onSave={onSave}
        loading={loading}
        error={error}
        isSaved={isSaved}
        project={project}
      />
    </>
  )
}
