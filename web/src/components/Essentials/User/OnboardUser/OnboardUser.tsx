import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, Redirect, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const ONBOARDING_CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const { currentUser } = useAuth()

  const [createUser, { loading, error }] = useMutation(
    ONBOARDING_CREATE_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Account updated')
        navigate(routes.home())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.email = currentUser.email
    createUser({ variables: { input } })
  }

  if (currentUser.firstName && currentUser.lastName) {
    return <Redirect to={routes.home()} />
  }

  return (
    <main className="flex h-full justify-center py-12 px-4 md:py-16 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5 border-b border-gray-200 pb-5">
          <h3 className="text-3xl font-bold leading-6 text-gray-900">
            Update Account Information
          </h3>
        </div>

        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden rounded-md border border-gray-300">
                <Form onSubmit={onSave} error={error}>
                  <FormError
                    error={error}
                    wrapperClassName="rw-form-error-wrapper"
                    titleClassName="rw-form-error-title"
                    listClassName="rw-form-error-list"
                  />
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <Label name="firstName">First name</Label>
                        <TextField
                          name="firstName"
                          validation={{ required: true }}
                        />
                        <FieldError
                          name="firstName"
                          className="rw-field-error"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Label name="lastName">Last name</Label>
                        <TextField
                          name="lastName"
                          validation={{ required: true }}
                        />
                        <FieldError
                          name="lastName"
                          className="rw-field-error"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <Submit
                      disabled={loading}
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewUser
