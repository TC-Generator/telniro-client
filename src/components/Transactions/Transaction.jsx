import styled from "styled-components";

const Transaction = () => {
  return (
    <Container className="transaction">
      <div className="">
        <div className="amount">
          <span> تومان </span>
          {Number(1000000).toLocaleString("fa-IR")}
        </div>
        <div className="status failed">ناموفق</div>
      </div>
      <div className="">
        <div className="">
          <span> کد رهگیری </span>{" "}
          <span className="tracking-code">5287652231956</span>
        </div>
        <div className="date">1397/2/13</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 10px;
  margin: 10px 0px;
  background: black;
  border-radius: 7px;
  font-size: 0.8rem;

  .amount {
    display: flex;
    flex-direction: row-reverse;
    & > span {
      margin-right: 6px;
    }
  }

  .status {
    &.success {
      color: #4caf50;
    }

    &.failed {
      color: #af4c4c;
    }
  }

  .tracking-code {
    margin: 0 5px;
  }

  & > div:first-of-type {
    flex-direction: row-reverse;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export default Transaction;
