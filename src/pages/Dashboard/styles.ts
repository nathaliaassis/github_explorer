import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a4a4a;
  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    border: 1px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.5s all;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    transition: all 0.5s;

    & + a {
      margin-top: 16px;
    }

    img {
      width: 60px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d3d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
