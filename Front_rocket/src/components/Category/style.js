import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;

  h5 {
    margin: 4.7rem 0 2.4rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media only screen and (max-width: 768px) {
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }

    .swiper-slide-active {
    }

    p {
      margin: 2.4rem 0;
      font-size: 1.8rem;
    }
  }
`;
