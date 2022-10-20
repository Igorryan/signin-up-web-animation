import React, { FormHTMLAttributes } from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'

import * as S from './styles';

const FormSignIn: React.FC<FormHTMLAttributes<HTMLFormElement>> = (props) => {
  return (
    <S.Container {...props}>
      <h1>Login Account</h1>

      <S.LoginWithSocialNetworks>
        <button><FaFacebookF color="#151515" /></button>
        <button><FaGooglePlusG color="#151515" size={20} /></button>
        <button><FaLinkedinIn color="#151515" /></button>
      </S.LoginWithSocialNetworks>

      <p>or use your email account:</p>

      <div className="inputs">
        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />
      </div>

      <a href="forgot">Forgot your password?</a>

      <button>Sign In</button>

    </S.Container>
  )
}

export default FormSignIn;
