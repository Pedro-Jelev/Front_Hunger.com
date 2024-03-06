import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  .sidebar {
    > div > input:focus {
      border: none;
    }

    width: 100%;
    max-width: 58.1rem;
    border-radius: 5px;
    padding-left: 9.95rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  .mobileItem {
    display: none;
  }

  button {
    > img {
      width: 3.2rem;
      height: 3.2rem;
    }

    margin-left: 3.2rem;
  }

  a.receipt {
    > span {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
    }

    max-width: 21.6rem;
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    padding: 1.2rem 3.2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 11.4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 999;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media only screen and (max-width: 768px) {
    .hamburguer {
      display: flex;
    }

    button,
    a.receipt {
      display: none;
    }

    .sidebar {
      position: fixed;
      top: 11.4rem;
      left: -100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding: 2.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
      z-index: 999;
      transition: 0.3s;

      div {
        margin-bottom: 3.6rem;
      }

      > a {
        width: 100%;
        padding: 1rem;
        font-size: 2.4rem;
        font-weight: 300;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }
    }

    .sidebar.active {
      left: 0%;
    }

    a {
      > img {
        width: 3.2rem;
        height: 3.2rem;
      }

      > span {
        position: absolute;
        right: -25%;
        top: -25%;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 99px;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-size: 1.4rem;
        line-height: 24px;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }

      display: block;
      position: relative;
    }

    a.mobileItem {
      display: inline;
    }

    a.signOut {
      display: none;
    }
  }
`;

export const Brand = styled.div`
  img {
    width: 2.461rem;
    height: 2.461rem;
  }

  h1 {
    font-size: 2.116rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  min-width: 19.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0 2rem;
`;

export const Hamburguer = styled.div`
  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .bar {
    width: 2.4rem;
    height: 2px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: all 0.3s ease-in-out;
  }

  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
`;

export const Logout = styled(Link)`
  width: min-content;
  height: min-content;
  margin-right: 2rem;
  cursor: pointer;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 1.4rem;
  font-weight: 500;
`;
