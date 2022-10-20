import React, { FormHTMLAttributes } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'

import * as S from './styles';

const FormSignUp: React.FC<FormHTMLAttributes<HTMLFormElement>> = (props) => {

  return (
    <S.Container {...props} >
      <h1>Create Account</h1>

      <S.SignUpWithSocialNetworks>
        <button><FaFacebookF color="#151515" /></button>
        <button><FaGooglePlusG color="#151515" size={20} /></button>
        <button><FaLinkedinIn color="#151515" /></button>
      </S.SignUpWithSocialNetworks>

      <p>or use your email for registration:</p>

      <div className="inputs">
        <input placeholder="Company Name" />
        <input placeholder="E-mail" />
        <input placeholder="Password" type="password" />
        <input placeholder="Password Confirmation" type="password" />
      </div>

      <button>Sign Up</button>

    </S.Container>
  )
}

export default FormSignUp;
