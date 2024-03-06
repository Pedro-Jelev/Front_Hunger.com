import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  cursor: pointer;
  padding: 1.2rem 2.4rem;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 1.4rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
`;
