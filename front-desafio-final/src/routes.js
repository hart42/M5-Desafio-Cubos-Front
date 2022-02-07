import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Clients from './pages/clients/Clients';
import Home from './pages/home/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Route path='/Clientes' exact component={Clients} />
          <Route path={['/', '/Home']} exact component={Home} />
        </ GlobalProvider>
      </Switch>
    </Router >
  );
}

export default Routes;