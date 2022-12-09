import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'
import NotFound from './components/NotFound'

function App() {
  // your code here ...
  return (
  <Router>
    <Switch>
      <Route exact path={'/'} component={Movies} />
      <Route exact path={'/movies/:id'} component={MovieDetail} />
      <Route exact path={'*'} component={NotFound} />
    </Switch>
  </Router>
  )
}

export default App
