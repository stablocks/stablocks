import { AppContext } from 'src/components/AppCells/AppProviderCell'
import config from 'src/../package.json'

const Footer = () => {
  const { organization } = React.useContext(AppContext)

  return (
    <footer className="py-1">
      <p className="text-center text-xs text-gray-600">
        Powered by{' '}
        <a
          href="https://stablocks.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          Stablocks
        </a>{' '}
        for {organization.name} | v{config.version}
      </p>
    </footer>
  )
}

export default Footer
