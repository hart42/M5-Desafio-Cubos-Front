import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import useGlobal from '../../hooks/useGlobal';
import { Link, useHistory } from 'react-router-dom';
import './escolherSenha.css';

function EscolherSenha() {
  const [values, setValues] = React.useState({
    password: '',
    cofirmPassword: '',
    showPassword: false
  });
  const history = useHistory();
  const { nomeEmail } = useGlobal();
  async function cadastraUsuario(event) {
    event.preventDefault();
    const body = {
      email: nomeEmail.email,
      nome: nomeEmail.nome,
      senha: values.password
    };
    try {
      const response = await fetch(
        'https://desafio-modulo-5.herokuapp.com/usuarios',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );
      if (response.status === 201) history.push('/Success');
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="body">
      <div className="form-div">
        <form className="form">
          <div className="form-group-left">
            <div className="bradcrumbsUL">
              <ul>
                <div className="brandMenu">
                  <li className="li-breadcrums">
                    <div className="customIcon">
                      <svg
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="16"
                          cy="16.5"
                          r="15.5"
                          fill="#F0F0F5"
                          stroke="#0E8750"
                        />
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svgPoint"
                      >
                        <circle
                          cx="3.9998"
                          cy="3.50005"
                          r="2.7"
                          fill="#0E8750"
                          stroke="#0E8750"
                        />
                      </svg>
                    </div>
                    <div className="bradText">
                      <span className="spanCad">Escolha uma senha</span>
                      <span className="spanText">Escolha uma senha segura</span>
                    </div>
                  </li>
                  <svg
                    width="3"
                    height="41"
                    viewBox="0 0 3 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgLine2"
                  >
                    <line
                      x1="1.5"
                      y1="0.5"
                      x2="1.5"
                      y2="40.5"
                      stroke="#0E8750"
                      stroke-width="3"
                    />
                  </svg>
                  <li className="li2-breadcrums">
                    <div className="customIcon">
                      <svg
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16.5" r="16" fill="#0E8750" />
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svgPoint"
                      >
                        <circle
                          cx="3.9998"
                          cy="3.50005"
                          r="3.2"
                          fill="#F0F0F5"
                        />
                      </svg>
                    </div>
                    <div className="bradText">
                      <span className="spanCad">Cadastre-se</span>
                      <span className="spanText">
                        Por favor, escreva seu nome e e-mail
                      </span>
                    </div>
                  </li>
                  <svg
                    width="3"
                    height="41"
                    viewBox="0 0 3 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgLine"
                  >
                    <line
                      x1="1.5"
                      y1="0.5"
                      x2="1.5"
                      y2="40.5"
                      stroke="#0E8750"
                      stroke-width="3"
                    />
                  </svg>
                  <li className="li2-breadcrums">
                    <div className="customIcon">
                      <svg
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="16"
                          cy="16.5"
                          r="15.5"
                          fill="#F0F0F5"
                          stroke="#0E8750"
                        />
                      </svg>
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svgPoint"
                      >
                        <circle
                          cx="3.9998"
                          cy="3.50005"
                          r="2.7"
                          fill="#0E8750"
                          stroke="#0E8750"
                        />
                      </svg>
                    </div>
                    <div className="bradText">
                      <span className="spanCad">
                        Cadastro realizado com sucesso
                      </span>
                      <span className="spanText">
                        E-mail e senha cadastrados com sucesso
                      </span>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="form-group-right">
            <div className="form-group-right-title">
              <div className="divtitlePageCadastro">
                <h1 className="titlePageCadastro">Confirme sua Senha</h1>
              </div>
            </div>
            <div className="form-group-right-content">
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Senha
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={(event) =>
                        setValues({ ...values, password: event.target.value })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-confirmpassword">
                      Confirmar Senha
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showconfirmPassword ? 'text' : 'password'}
                      value={values.confirmPassword}
                      onChange={(event) =>
                        setValues({
                          ...values,
                          cofirmPassword: event.target.value
                        })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showconfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
              </Box>
            </div>
            <div className="form-group-actions">
              <div className="customButtonDivSenha">
                {values.password === values.cofirmPassword && (
                  <button
                    className="ButtonCadastroSenha"
                    onClick={(event) => cadastraUsuario(event)}
                  >
                    Cadastrar
                  </button>
                )}
              </div>
            </div>
            <div className="sing-in">
              <div>
                <span className="spanLinkTextCadastro">
                  Já possui uma conta? Faça seu{' '}
                  <Link to="/Login">
                    <a> Login</a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EscolherSenha;
