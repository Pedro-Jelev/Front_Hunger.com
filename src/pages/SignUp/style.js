import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 3.7243rem;
    }

    h2 {
      display: none;
    }

    img {
      width: 4.3315rem;
      height: 4.3315rem;
    }

    form {
      background: none;
    }

    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 420px) {
    > div {
      display: block;
      text-align: center;
    }
  }
`;

export const Brand = styled.div`
  img {
    width: 4.943rem;
    height: 4.943rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 4.2rem;
    font-weight: 700;
  }

  display: flex;
  gap: 2rem;
`;

export const Form = styled.form`
  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 3.2rem;
    font-weight: 500;
  }

  .box-wrapper label {
    display: block;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > * + * {
    margin-top: 3.4rem;
  }

  a {
    display: block;
  }

  h2,
  a {
    text-align: center;
  }

  max-width: 47.6rem;
  width: 100%;
  height: 100%;
  max-height: 62.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6.4rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;
