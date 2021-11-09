import { Route, Switch } from 'react-router';
import './App.css';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={RegisterPage}></Route>
    </Switch>
  )
}

export default App;
