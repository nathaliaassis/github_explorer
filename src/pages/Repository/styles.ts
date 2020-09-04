import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.5s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;
export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        text-transform: capitalize;
      }
    }
  }
`;
export const Issues = styled.section`
  margin-top: 80px;

  & + section {
    margin-top: 16px;
  }

  a {
    display: flex;
    align-items: center;

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    transition: all 0.5s;

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
