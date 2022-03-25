import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const ChatPage = () => {
  return (
    <>
      <PageTitle
        title="Chat"
        breadcrumbs={[{ title: 'Helpdesk', to: routes.helpdesk() }]}
        search={{ label: 'chats', type: 'chat' }}
      />

      <p>
        Find me in <code>./web/src/pages/ChatPage/ChatPage.tsx</code>
      </p>
      <p>
        My default route is named <code>chat</code>, link to me with `
        <Link to={routes.chat()}>Chat</Link>`
      </p>
    </>
  )
}

export default ChatPage
