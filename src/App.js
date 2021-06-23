import './tailwind.output.css';
import { Switch, Redirect, Route } from 'react-router-dom'
import { Home, Login } from './page'

function App() {
  return (
    <Switch>
       <Route exact path="/">
        {localStorage.access_token ? (
          <Redirect to="/home" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route
        path="/login"
        render={() => {
          return localStorage.access_token ? <Redirect to="/home" /> : <Login />
        }}
      />
      <Route
        path="/home"
        render={() => {
          return localStorage.access_token ? <Home /> : <Redirect to="/login" />
        }}
      />
    </Switch>

  );
}

export default App;
