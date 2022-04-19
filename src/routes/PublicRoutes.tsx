import { Switch, Route, Redirect } from 'wouter'
import LandingPage from '../pages/LandingPage'

export const PublicRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}
