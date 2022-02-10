import * as React from 'react';
import { useLocalStorage } from 'react-use';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './cadastro.css';

function Cadastro() {
  const [nomeEmail, setNomeEmail] = useLocalStorage(
    'nomeEmail',
    { nome: '', email: '' }
  );
  const history = useHistory();
  return (
    <div className="body-cadastro">
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
                <h1 className="titlePageCadastro">Adicione seus dados</h1>
              </div>
            </div>
            <div className="form-group-right-content">
              <div className="telacastro">
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="form-inputs">
                    <label htmlFor="nome">Nome*</label>
                    <TextField
                      placeholder='Digite seu nome'
                      required
                      name='nome'
                      id="outlined-required-nome"
                      onChange={(e) =>
                        setNomeEmail({ ...nomeEmail, nome: e.target.value })
                      }
                    />
                    <label htmlFor="nome">E-mail*</label>
                    <TextField
                      required
                      id="outlined-required-email"
                      placeholder='Digite seu email'
                      onChange={(e) =>
                        setNomeEmail({ ...nomeEmail, email: e.target.value })
                      }
                    />
                  </div>
                </Box>
              </div>
            </div>
            <div className="form-group-actions">
              <div className="ButtonDivCadastro">
                <button
                  className="ButtonCadastro"
                  onClick={() => history.push('/Escolhasenha')}
                >
                  Cadastrar
                </button>
              </div>
            </div>
            <div className="sing-in">
              <div>
                <span className="spanLinkTextCadastro">
                  Já possui uma conta? Faça seu
                  <Link to="/Login">
                    Login
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

export default Cadastro;
