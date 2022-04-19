import { Redirect, Route, Switch } from 'wouter'
import TweetsProvider from '../context/TweetsContext'
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'
import NonTweets from '../pages/NonTweets'

export const PrivateRoutes = () => {
  console.log('private page')
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <TweetsProvider>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/test" component={NonTweets} />
        <Redirect to="/dashboard" />
      </TweetsProvider>
    </Switch>
  )
}
