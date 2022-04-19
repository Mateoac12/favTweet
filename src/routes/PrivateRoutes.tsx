import { Redirect, Route, Switch } from 'wouter'
import TweetsProvider from '../context/TweetsContext'
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <TweetsProvider>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </TweetsProvider>
    </Switch>
  )
}
