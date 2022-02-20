import { useEffect, useState } from 'react'

import type { FindPlaidLinkQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

import { usePlaidLink, PlaidLinkOptions } from 'react-plaid-link'
import PlaidTokenExchangeCell from 'src/components/Cells/Plaid/PlaidTokenExchangeCell'

export const QUERY = gql`
  query GetPlaidLinkTokenQuery {
    plaidLinkToken
  }
`

export const Loading = () => <></>

export const Empty = () => <></>

export const Success = ({
  plaidLinkToken,
  setIsOpen,
}: CellSuccessProps<FindPlaidLinkQuery>) => {
  const [publicToken, setPublicToken] = useState('')

  const config: PlaidLinkOptions = {
    onSuccess: (public_token, _metadata) => {
      setPublicToken(public_token)
    },
    onExit: (_err, _metadata) => {
      setIsOpen(false)
    },
    onEvent: (eventName, metadata) => {
      console.log(eventName, metadata)
    },
    token: plaidLinkToken,
    //required for OAuth; if not using OAuth, set to null or omit:
    receivedRedirectUri: null,
  }

  const { open, ready } = usePlaidLink(config)

  useEffect(() => {
    if (ready) open()
  }, [ready, open])

  return (
    <>{publicToken && <PlaidTokenExchangeCell publicToken={publicToken} />}</>
  )
}
