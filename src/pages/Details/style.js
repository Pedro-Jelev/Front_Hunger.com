import styled from "styled-components";

export const Container = styled.div`
  .back {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 12.2rem;
    margin-bottom: 4.2rem;
    font-size: 2.4rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }

  width: 100%;
  padding-top: 13.8rem;

  @media only screen and (max-width: 768px) {
    .back {
      margin-left: 5.6rem;
    }
  }
`;

export const Main = styled.div`
  &,
  div,
  div.tags,
  div div.trade {
    display: flex;
  }

  > img {
    max-width: 39rem;
  }

  > div {
    flex-direction: column;
    gap: 2.4rem;
  }

  h3.name {
    font-size: 4rem;
  }

  p.description {
    font-size: 2.4rem;
  }

  div.tags {
    justify-content: flex-start;
    gap: 1.2rem;
  }

  div.tags span {
    text-align: center;
    padding: 6px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  div.trade {
    > button {
      margin-left: 1.9rem;
    }

    > img {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }

    align-items: center;
    gap: 1.4rem;
  }

  div button {
    max-width: max-content;
  }

  display: flex;
  align-items: center;
  gap: 4.783rem;
  margin-left: 12.2rem;
  padding-bottom: 10rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};

  @media only screen and (max-width: 768px) {
    > img {
      max-width: 26.4rem;
    }

    > div {
      align-items: center;
      gap: 2.4rem;
    }

    h3.name {
      font-size: 2.7041rem;
    }

    p.description {
      font-size: 1.6225rem;
    }

    div.tags {
      gap: 2.4rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    div button {
      max-width: none;
    }

    flex-direction: column;
    margin: 0 5.6rem;
  }
`;
