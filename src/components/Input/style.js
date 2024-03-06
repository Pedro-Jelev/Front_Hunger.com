import styled from "styled-components";

export const Container = styled.div`
  label {
    > img {
      width: 2.4rem;
    }

    position: absolute;
    top: 25%;
    left: 1.4rem;
  }

  > input.icon {
    padding: 1.2rem 1.4rem 1.2rem 5.2rem;
  }

  input {
    width: inherit;
    height: inherit;
    padding: 1.2rem 1.4rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  input::placeholder {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  label.display-none {
    display: none;
  }

  position: relative;
  width: 100%;
  height: 4.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`;
