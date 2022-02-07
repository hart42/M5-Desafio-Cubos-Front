import * as React from 'react';
import './login.css';
import InitialPage from '../../components/layout/initialPage';
import InputAdornments from '../../components/formLogin';
import CustomButton from '../../components/button';

export const left = (
  <div className="telaLogin">
    <h1 className="textLogin">
      Gerencie todos os pagamentos da sua empresa em um só lugar.
    </h1>
  </div>
);
export const title = (
  <div className="divtitlePageLogin">
    <h1 className="titlePageLogin">Faça seu login!</h1>
  </div>
);

export const right = (
  <div className="form-right-login">
    <InputAdornments />
  </div>
);

export const actions = (
  <div className="customButtonDivLogin">{CustomButton('Login')}</div>
);

export const textWithLink = (
  <span className="spanLinkTextLogin">
    Ainda não possui uma conta? <a href="#"> Cadastre-se</a>
  </span>
);

function Login() {
  return InitialPage(left, right, title, actions, textWithLink);
}

export default Login;
