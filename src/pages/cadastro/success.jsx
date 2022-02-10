import * as React from 'react';
import InitialPage from '../../components/Layout/initialPage';
import { Link } from 'react-router-dom';

import './cadastro.css';
export const left = (
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
              <circle cx="3.9998" cy="3.50005" r="3.2" fill="#F0F0F5" />
            </svg>
          </div>
          <div className="bradText">
            <span className="spanCad">Cadastro realizado com sucesso</span>
            <span className="spanText">
              E-mail e senha cadastrados com sucesso
            </span>
          </div>
        </li>
      </div>
    </ul>
  </div>
);

export const actions = (
  <div className="customButtonDivCadastro">
    <Link to="/Login">
      <button>Ir para Login</button>
    </Link>
  </div>
);

export const right = (
  <div className="pagesuccess">
    <svg
      width="600"
      height="513"
      viewBox="0 0 600 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="600" height="512" rx="30" fill="#F0F0F5" />
    </svg>
  </div>
);

export const title = (
  <div className="divtitlePageSuccess">
    <h1 className="titlePageSuccess">Cadastro realizado com sucesso!</h1>
  </div>
);

function Success() {
  return InitialPage(left, right, title, actions);
}

export default Success;
