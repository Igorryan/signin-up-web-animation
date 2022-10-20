import styled from 'styled-components';

export const Container = styled.form`
  display: none;
  flex-direction: column;
  align-items: center;

  width: 25rem;

  h1 {
    color: #534F9C;
    letter-spacing: 1.5px;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 14px;
  }

  div.inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;

    input {
      margin-top: 0.6rem;
      padding: 0.9rem;

      background: #F4F8F7;
      border: none;
      font-size: 0.9rem;
      font-weight: 500;

      &::placeholder {
        color: #A5A9A8;
      }
    }

  }

  a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #151515;

    border-bottom: 0.13rem solid #E5E5E5;
    padding-bottom: 0.3rem;
    margin-bottom: 3rem;
  }

  > button {
    background: #534F9C;
    color: #fff;

    width: 11rem;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.08rem;

    padding: 1rem 0;
    border-radius: 10rem;
    border: none;

  }
`
export const SignUpWithSocialNetworks = styled.div`
  display: flex;
  justify-content: space-between;

  width: 8rem;
  margin-bottom: 3.4rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.3rem;
    height: 2.3rem;

    border: 0.1rem solid #E5E5E5;
    background: none;
    border-radius: 50%;
  }
`

