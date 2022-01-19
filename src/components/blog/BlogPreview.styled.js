import styled from "styled-components";

export const Container = styled.div`
  .blog {
    text-align: right;
    width: 230px;
    margin: 0 10px;
    background: black;
    padding: 10px 10px;
    border-radius: 15px;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  > .title {
    font-size: 1.3rem;
    color: #c1c1c1;
    margin-bottom: 10px;
    direction: rtl;
    padding: 0 20px;
  }

  .blow {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }

  .likes {
    text-align: left;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    padding: 0 5px;

    svg {
      font-size: 1.4rem;
      color: #c33535;
      margin-right: 3px;
    }
  }

  .description {
    font-size: 0.8rem;
    padding: 0 10px;
    margin: 10px 0px;
    text-align: justify;
  }
`;
