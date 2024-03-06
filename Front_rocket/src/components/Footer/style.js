import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.3rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media only screen and (max-width: 768px) {
    padding: 0 2.776rem;
    gap: 8px;
    font-size: 1.2rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
