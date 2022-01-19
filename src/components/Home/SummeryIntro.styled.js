import styled from "styled-components";

export const Container = styled.div`
  direction: rtl;
  padding: 0 20px;

  > div {
    margin-top: 10px;
  }

  p {
    font-size: 0.9rem;
  }

  .title {
    font-size: 1.3rem;
    color: #8bc34a;
    margin-bottom: 10px;
  }

  .description {
    font-size: 0.9rem;
    padding: 0 10px;
  }

  .features {
    padding: 0 10px;
    font-size: 0.8rem;
    text-align: justify;
  }
`;
