import styled from "styled-components";
import Transaction from "../components/Transactions/Transaction";

const Transactions = () => {
  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">تراکنش ها</div>
      </div>

      <div className="container">
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .container {
    padding: 0 10px;
  }
`;

export default Transactions;
