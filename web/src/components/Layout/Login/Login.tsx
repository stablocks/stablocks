import { useContext, useEffect, useState } from 'react'
import { Link, Redirect, routes, RouteFocus, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, FieldError, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { RiGoogleFill, RiWindowsFill } from 'react-icons/ri'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import Logo from 'src/lib/logo.svg'

type LoginProps = {
  employee?: boolean
}

const Login = ({ employee }: LoginProps) => {
  const [linkSent, setLinkSent] = useState(false)
  const [email, setEmail] = useState('')
  const { logIn, currentUser } = useAuth()
  const { organization, userCount } = useContext(AppContext)

  const providers = [
    {
      name: 'Google',
      slug: 'google',
      icon: RiGoogleFill,
    },
    {
      name: 'Microsoft',
      slug: 'azure',
      icon: RiWindowsFill,
    },
  ]

  const onSubmit = () => {
    logIn({
      email,
    }).then(() => {
      setLinkSent(true)
    })
  }

  useEffect(() => {
    if (linkSent) {
      setTimeout(() => {
        setLinkSent(false)
      }, 10000)
    }
  }, [linkSent])

  useEffect(() => {
    if (currentUser) {
      navigate(routes.home())
    }
  }, [currentUser])

  if (organization && userCount && currentUser) {
    return <Redirect to={routes.home()} />
  }

  return (
    <main className="h-full">
      <MetaTags title="Login" description="Login page" />
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto h-10 w-auto fill-current text-indigo-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Stablocks
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg border border-gray-300 bg-white py-8 px-4 sm:px-10">
            {employee ? (
              <>
                <h3 className="text-center text-xl font-semibold">
                  Employee Login
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  {providers.map(
                    (provider, i) =>
                      process.env.THIRD_PARTY_AUTH === provider.slug && (
                        <div key={i}>
                          <RouteFocus>
                            <button
                              onClick={async () =>
                                await logIn({
                                  provider: provider.slug,
                                  redirectTo: `${
                                    process.env.URL
                                      ? process.env.URL
                                      : 'http://localhost:8910'
                                  }`,
                                  scopes:
                                    'https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/admin.directory.group',
                                })
                              }
                              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                              <provider.icon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Sign in with </span>
                              {provider.name}
                            </button>
                          </RouteFocus>
                        </div>
                      )
                  )}
                </div>
              </>
            ) : (
              <>
                {!linkSent ? (
                  <Form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                      <Label name="email">Email address</Label>
                      <div className="mt-1">
                        <RouteFocus>
                          <TextField
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            validation={{
                              required: true,
                              pattern: {
                                value: /[^@]+@[^\.]+\..+/,
                                message: 'Please enter a valid email address',
                              },
                            }}
                          />
                          <FieldError
                            name="email"
                            className="text-xs text-red-700"
                          />
                        </RouteFocus>
                      </div>
                    </div>

                    <div>
                      <Submit className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Send magic link
                      </Submit>
                    </div>
                  </Form>
                ) : (
                  <p className="text-center text-sm text-gray-700">
                    A login link has been sent to your inbox!
                  </p>
                )}
              </>
            )}

            {process.env.THIRD_PARTY_AUTH && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      {!employee ? 'Employee?' : 'Not an employee?'}
                    </span>
                  </div>
                </div>
                <Link
                  to={!employee ? routes.employeeLogin() : routes.login()}
                  className="mt-1 block text-center text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Login as {!employee ? 'an employee' : 'a user'}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
