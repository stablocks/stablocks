import { MetaTags } from '@redwoodjs/web'
import OnboardUser from 'src/components/Essentials/User/OnboardUser'

const OnboardingPage = () => {
  return (
    <>
      <MetaTags title="User Onboarding" />

      <OnboardUser />
    </>
  )
}

export default OnboardingPage
