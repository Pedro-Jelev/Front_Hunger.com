import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  padding: 14.8rem 12.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.7rem;

  @media only screen and (max-width: 1024px) {
    padding: 14.8rem 5rem 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 14.8rem 1.6rem 0;
  }
`;

export const Advertising = styled.div`
  img {
    position: absolute;
    width: 100%;
    max-height: 40.6rem;
    left: -6.8rem;
    bottom: -1.2rem;
    padding-right: 43%;
  }

  .content {
    h2,
    p {
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      max-width: max-content;
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
    }
  }

  position: relative;
  width: 100%;
  height: 100%;
  max-width: 112rem;
  max-height: 26rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 14.4rem;
  padding: 10rem 10rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  @media only screen and (max-width: 1024px) {
    padding-right: 2rem;
  }

  @media only screen and (max-width: 768px) {
    img {
      bottom: -0.4rem;
      left: -2rem;
      max-width: 191px;
      max-height: 149px;
      padding-right: 0;
    }

    .content {
      h2,
      p {
        max-width: 18rem;
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    max-width: 37.6rem;
    max-height: 120px;
    align-items: end;
    padding-right: 2.1rem;
    padding-bottom: 2.2rem;
    margin: 0;
  }
`;
