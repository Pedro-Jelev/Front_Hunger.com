import styled from "styled-components";

export const Container = styled.div`
  &,
  div.trade,
  div.trade div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  img {
    max-width: 17.6rem;
  }

  h3.name {
    font-size: 2.4rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p.description {
    max-width: 18.9rem;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  span.price {
    font-size: 3.2rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .trade {
    gap: 1.6rem;
  }

  .trade div {
    gap: 1.4rem;
  }

  .trade button {
    padding: 1.2rem 2.4rem;
  }

  .trade img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  span.count {
    font-size: 2rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  position: relative;
  width: 304px;
  height: 462px;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  @media only screen and (max-width: 768px) {
    img {
      max-width: 8.8rem;
    }

    h3.name {
      font-size: 1.4rem;
      font-weight: 500;
    }

    p.description {
      display: none;
    }

    span.price {
      font-size: 1.6rem;
      font-weight: 400;
    }

    .trade {
      width: 100%;
      flex-direction: column;
    }

    span.count {
      font-size: 1.6rem;
      font-weight: 400;
    }

    min-width: 16.2rem;
    min-height: 24.4rem;
    max-width: 19.44rem; //162*1.2 */
    max-height: 29.28rem; //244*1.2 */
    padding: 2.4rem;
    gap: 1.2rem;
  }
`;

export const Token = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.8rem;
  width: 2.4rem;
  cursor: pointer;
`;
