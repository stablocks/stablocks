import { google } from 'googleapis'
import fetch from 'node-fetch'

const checkCredentials = () => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_SECRET) {
    return false
  }

  return true
}

export const googleUsers = async () => {
  if (!checkCredentials()) return

  const jwt = await context?.event?.headers?.authorization?.replace(
    'Bearer ',
    ''
  )

  const client = new google.auth.JWT({ key: jwt })

  // const response = await fetch(
  //   `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${access_token}`
  // )

  // console.log(await response.json())

  const { token } = await client.getAccessToken()

  console.log(token)

  client.setCredentials({ access_token: token })

  const service = google.admin({
    version: 'directory_v1',
    auth: client,
  })

  service.users.list(
    {
      customer: 'my_customer',
      maxResults: 100,
      orderBy: 'email',
    },
    (err, res) => {
      if (err) return console.error('The API returned an error:', err.message)

      const users = res.data.users
      if (users.length) {
        console.log('Users:')
        users.forEach((user) => {
          console.log(`${user.primaryEmail} (${user.name.fullName})`)
        })
      } else {
        console.log('No users found.')
      }
    }
  )
}
export const googleUser = ({ email }) => {
  // TODO: implement
}
export const createGoogleUser = ({ input }) => {
  // TODO: implement
}
export const updateGoogleUser = ({ email, input }) => {
  // TODO: implement
}

export const syncGoogleUsers = () => {
  // TODO: implement
}
