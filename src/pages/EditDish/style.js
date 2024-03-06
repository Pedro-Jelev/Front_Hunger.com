import styled from "styled-components";

export const Container = styled.div`
  .back {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 12.2rem;
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }

  width: 100%;
  padding-top: 18.4rem;

  @media only screen and (max-width: 768px) {
    .back {
      margin-left: 3.2rem;
    }
  }
`;

export const Main = styled.div`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .box-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  > input,
  .box-wrapper div:last-child {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  label {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .upload {
    position: absolute;
    bottom: 1.2rem;
    left: 3.2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    z-index: 10;
  }

  h2 {
    font-size: 3.2rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;
  }

  .row.first .box-wrapper:nth-child(1) {
    max-width: 22.9rem;
  }

  .row.first .box-wrapper:nth-child(3) {
    max-width: 36.4rem;
  }

  .row.second .box-wrapper:nth-child(1) {
    max-width: 100%;
  }

  .row.second .box-wrapper:nth-child(2) {
    max-width: 25.1rem;
  }

  .box-wrapper select,
  .box-wrapper textarea,
  .box-wrapper .ingredients {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 14px;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .second .box-wrapper .ingredients {
    height: auto;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  .box-wrapper select {
    display: flex;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 16px top 50%;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .box-wrapper textarea {
    width: 100%;
    padding: 1.4rem;
    overflow: hidden;
    resize: none;
    height: 17.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .buttons {
    button.submit {
      max-width: fit-content;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    button.delete {
      max-width: fit-content;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    width: 100%;
    display: flex;
    gap: 3.2rem;
    justify-content: flex-end;
    margin-top: 3.2rem;
  }

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 12.2rem;
  padding-bottom: 10rem;

  @media only screen and (max-width: 768px) {
    .row {
      flex-direction: column;
    }
    .row.first .box-wrapper:nth-child(1) {
      max-width: 100%;
    }

    .row.first .box-wrapper:nth-child(3) {
      max-width: 100%;
    }

    .row.second .box-wrapper:nth-child(2) {
      max-width: 100%;
    }

    .buttons {
      button.submit {
        max-width: 100%;
      }

      button.delete {
        max-width: 100%;
      }
      justify-content: space-between;
    }

    margin: 0 3.2rem;
    gap: 2.4rem;
  }
`;
