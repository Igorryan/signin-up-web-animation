import React, { useCallback, useState } from 'react';
import { motion } from "framer-motion";
import $ from 'jquery';

// import LogoImg from '../../assets/logo.svg';

import FormSignIn from '../../components/FormSignIn'
import FormSignUp from '../../components/FormSignUp'
import * as S from './styles';

const SignIn: React.FC = () => {

  const [signIn, setSignIn] = useState(true);
  const [sectionClasses, setSectionClasses] = useState('');
  const [asideClasses, setAsideClasses] = useState('');
  const [descriptionClasses, setDescriptionClasses] = useState('');
  const [buttonClasses, setButtonClasses] = useState('');
  const [descriptionTitle, setDescriptionTitle] = useState('Hello, Friend!')
  const [description, setDescription] = useState('Enter your personal details and start journey with us')

  const handleToggleSign = useCallback(() => {
    setButtonClasses('animation');

    if (signIn) {
      setSectionClasses('animation')
      setAsideClasses('animation');
      $('#aside').css('left', '65%')
      $('#section').css('right', '35%')

      $('.signInSpan').addClass('animate__fadeInLeft');
      $('.signInSpan').show();
      $('.signUpSpan').addClass('animate__fadeOutRight');
      $('.signInSpan').removeClass('animate__fadeOutLeft');
      setDescriptionClasses('animate__animated animate__fadeOutRight');

      setTimeout(() => {
        $('.formSignIn').hide();
        $('.formSignUp').css('display', 'flex');
        setDescriptionClasses('animate__animated animate__fadeInLeft');
        setDescriptionTitle('Welcome Back!');
        setDescription('To keep connected with us please login with your personal info');
      }, 500)
    } else {
      setSectionClasses('animationBack')
      setAsideClasses('animationBack');
      $('#aside').css('left', '0')
      $('#section').css('right', '0')

      $('.signInSpan').addClass('animate__fadeOutLeft');
      $('.signUpSpan').addClass('animate__fadeInRight');
      $('.signUpSpan').removeClass('animate__fadeOutRight');
      setDescriptionClasses('animate__animated animate__fadeOutLeft');

      setTimeout(() => {
        $('.formSignIn').show();
        $('.formSignUp').css('display', 'none');
        setDescriptionClasses('animate__animated animate__fadeInRight');
        setDescriptionTitle('Hello, Friend!');
        setDescription('Enter your personal details and start journey with us');
      }, 500)
    }

    setSignIn(!signIn);

    setTimeout(() => {
      setButtonClasses('')
      setDescriptionClasses('')
    }, 1300);

  }, [signIn])

  return (
    <S.Container>

      <S.Section id="section" className={sectionClasses}>
        <FormSignIn className="formSignIn" />
        <FormSignUp className="formSignUp" />
      </S.Section>
      {/* <img src={LogoImg} alt="Logomarca da Shaay"/> */}


      <S.Aside id="aside" className={asideClasses}>

        <div id="description" className={descriptionClasses}>
          <h1>
            {descriptionTitle}
          </h1>

          <p>
            {description}
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{
            scale: 1,
          }}
        >
          <button id="buttonSubmit" onClick={handleToggleSign} className={buttonClasses}>
            <span className="animate__animated signInSpan">Sign In</span>
            <span className="animate__animated signUpSpan">Sign Up</span>
          </button>
        </motion.div>
      </S.Aside>
    </S.Container>
  )
}

export default SignIn;
