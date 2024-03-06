import styled from "styled-components";

export const Container = styled.div`
  > input {
    width: 100%;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      width: 0.8rem;
    }
  }

  .buttoon-add img {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-delete img {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  .box-wrapper div & {
    width: 130px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background-color: ${({ theme, isNew }) =>
      isNew ? "transparent" : theme.COLORS.LIGHT_600};
    border: ${({ theme, isNew }) =>
      isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    border-radius: 8px;
  }
`;
