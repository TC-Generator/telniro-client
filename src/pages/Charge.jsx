import styled from "styled-components";
import { Input, Button } from "antd";
import { useState } from "react";
import Transaction from "../components/Transactions/Transaction";

const Charge = () => {
  const [amount, setAmount] = useState("");

  const handleGoNextStep = () => {
    console.log(amount);
  };
  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">شارژ حساب</div>
      </div>

      <div className="content">
        <div className="current-balance">
          <div className="title">موجودی فعلی</div>
          <div className="credit">{Number(100000).toLocaleString("fa-IR")}</div>
        </div>
        <form>
          <div className="group">
            <div className="title">مقدار شارژ</div>
            <Input
              placeholder="مقدار شارژ را به تومان وارد کنید"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />

            <Button type="primary" onClick={handleGoNextStep}>
              قدم بعدی
            </Button>
          </div>
        </form>

        <div className="recent-transactions">
          <div className="title">تراکنش های اخیر</div>
          <div className="transactions">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    padding: 0 10px;
  }

  .recent-transactions {
    > .title {
      font-size: 1.1rem;
    }
  }

  .group {
    > .title {
      font-size: 1.1rem;
    }
  }

  form {
    margin: 16px 0px;
  }

  .current-balance {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background: #0b0e13;
    padding: 0 8px;
    box-shadow: 0 5px 10px 1px #040406;
    border-radius: 7px;

    .credit {
      font-size: 0.8rem;
    }
  }
`;

export default Charge;
