import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Clients from './pages/clients/Clients';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/cadastro';
import Login from './pages/login/login';
import EscolherSenha from './pages/cadastro/escolherSenha';
import Success from './pages/cadastro/success';
import useGlobal from './hooks/useGlobal';

function Routes() {

  function RotasProtegidas(props) {
    const { token } = useGlobal();
    return (
      <Route
        render={() => token ? (props.children) : (<Redirect to="/login" />)}
      />
    )
  }

  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Route path="/Cadastro" exact component={Cadastro} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Escolhasenha" exact component={EscolherSenha} />
          <Route path="/Success" exact component={Success} />
          <RotasProtegidas>
            <Route path="/Clientes" exact component={Clients} />
            <Route path={['/', '/Home']} exact component={Home} />
          </RotasProtegidas>
        </GlobalProvider>
      </Switch>
    </Router>
  );
}

export default Routes;
