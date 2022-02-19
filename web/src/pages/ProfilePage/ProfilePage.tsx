import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import TabMenu from 'src/components/Elements/TabMenu'

const ProfilePage = () => {
  const { currentUser, hasRole } = useAuth()

  if (hasRole(['admin', 'employee'])) {
    return (
      <Redirect
        to={routes.employee({
          id:
            typeof currentUser.id === 'string'
              ? currentUser.id
              : currentUser.id.toString(),
        })}
      />
    )
  }

  return (
    <>
      <PageTitle title="Profile" />
      <TabMenu
        tabs={[
          { label: 'Profile', slug: 'profile' },
          { label: 'New Tab', slug: 'new', count: 23 },
        ]}
      >
        <div>Main content</div>
        <div>New tab content</div>
      </TabMenu>
    </>
  )
}

export default ProfilePage
