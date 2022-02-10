import * as React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './login.css';
import InitialPage from '../../components/Layout/initialPage';
import InputAdornments from '../../components/Login/formLogin';
import CustomButton from '../../components/button';
import useGlobal from '../../hooks/useGlobal'

function Login() {
  const { setToken } = useGlobal()
  const history = useHistory()

  async function HandleLogin(email, senha) {

    const body = {
      email,
      senha
    };
    try {
      const response = await fetch(
        'https://desafio-modulo-5.herokuapp.com/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );

      const data = await response.json();

      setToken(data.token);
      history.push("/Home")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="body">
      <div className="form-div">
        <form className="form">
          <div className="form-group-left">
            <div className="telaLogin">
              <h1 className="textLogin">
                Gerencie todos os pagamentos da sua empresa em um só lugar.
              </h1>
            </div>
          </div>
          <div className="form-group-right">
            <div className="form-group-right-title">  <div className="divtitlePageLogin">
              <h1 className="titlePageLogin">Faça seu login!</h1>
            </div></div>
            <div className="form-group-right-content">
              <div className="form-right-login">
                <InputAdornments />
              </div></div>
            <div className="form-group-actions">
              <div className="customButtonDivLogin">{CustomButton('Login', HandleLogin)}</div>
            </div>
            <div className="sing-in">
              <div> <span className="spanLinkTextLogin">
                Ainda não possui uma conta?
                <Link to='/Cadastro'><a> Cadastre-se</a></Link>
              </span></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
