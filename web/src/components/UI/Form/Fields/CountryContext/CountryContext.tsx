import { createContext, useContext, useState } from 'react'

type ContextProps = {
  country: string
  setCountry: React.Dispatch<React.SetStateAction<string>>
}

const Context = createContext<ContextProps>({
  country: 'Unites States',
  setCountry: () => {},
})

type CountryContextProps = {
  children: React.ReactNode
}

const CountryContext = ({ children }: CountryContextProps) => {
  const [country, setCountry] = useState()

  const value = {
    country,
    setCountry,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useCountry = () => {
  return useContext(Context)
}

export default CountryContext
