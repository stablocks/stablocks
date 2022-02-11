import { useEffect, useState } from 'react'

import type { FindPlaidLinkQuery } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

import { usePlaidLink, PlaidLinkOptions } from 'react-plaid-link'

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
  const config: PlaidLinkOptions = {
    onSuccess: (public_token, metadata) => {
      console.log(public_token, metadata)
    },
    onExit: (err, metadata) => {
      console.log(err, metadata)
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

  return <></>
}
