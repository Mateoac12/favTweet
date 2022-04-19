import { Switch, Route, Redirect } from 'wouter'
import LandingPage from '../pages/LandingPage'

export const PublicRoutes = () => {
  console.log('public page')
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}
