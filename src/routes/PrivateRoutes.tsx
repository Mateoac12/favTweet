import { Redirect, Route, Switch } from 'wouter'
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/dashboard" />
    </Switch>
  )
}
