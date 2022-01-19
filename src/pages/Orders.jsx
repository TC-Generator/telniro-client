import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Order from "../components/Orders/Order";

const Orders = () => {
  // const [chargeInventory] = useState(1000);
  const [accountInventory] = useState(100);
  return (
    <Container className="">
      <div className="topnav">
        <div className="links">
          <Link to="new">سفارش جدید</Link>
          <Link to="/dashboard/charge">شارژ حساب</Link>
        </div>
        <div className="status">
          <div className="title">وضعیت ها</div>
          <div className="">
            <div className="">
              <span className="order-status cancel">99</span>
              <div className="">لغو شده</div>
            </div>
            <div className="">
              <span className="order-status wait">2</span>
              <div className="">درحال بررسی</div>
            </div>
            <div className="">
              <span className="order-status success">3</span>
              <div className="">انجام شده</div>
            </div>
          </div>
        </div>
        <div className="inventory">
          موجودی شارژ (تومان) <span>{accountInventory}</span>
        </div>
      </div>

      {/* <div className="status">
        <div className="title">وضعیت ها</div>
        <div className="">
          <div className="">
            <span className="order-status cancel"></span>
            <div className="">لغو شده</div>
          </div>
          <div className="">
            <span className="order-status wait"></span>
            <div className="">درحال انجام</div>
          </div>
          <div className="">
            <span className="order-status success"></span>
            <div className="">انجام شده</div>
          </div>
        </div>
      </div> */}
      <div className="orders">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .orders {
    direction: rtl;
    padding: 0 15px;
    margin-top: 17px;
  }

  .order {
    padding: 10px 15px;
    background: #090b10;
    border-radius: 10px;
    box-shadow: 0 5px 10px #05070c;
    margin-bottom: 15px;

    > .title {
      font-size: 1.2rem;
    }

    > .group {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      padding: 0px 5px;
      margin: 10px 0px;
    }
  }
  .order-status {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    color: black;
    font-weight: bold;
    &.cancel {
      background: #f94646;
    }

    &.wait {
      background: #ff9800;
    }

    &.success {
      background: #4caf50;
    }
  }

  .status {
    display: flex;
    direction: rtl;
    /* padding: 5px 10px; */
    align-items: baseline;
    flex-direction: column;
    margin: 11px 13px auto;
    background: #090b10;
    box-shadow: 0 5px 10px #05070c;
    border-radius: 10px;
    margin: 0px;
    box-shadow: unset;
    padding-top: 10px;

    .title {
      padding: 0 10px;
      font-size: 1rem;
    }

    > div:not(.title) {
      display: grid;
      grid-auto-flow: column;
      width: 100%;
      height: 40px;
      align-items: center;
      direction: ltr;
      margin: 10px 0px;
      > div {
        display: flex;
        font-size: 0.8rem;
        padding: 0 8px;
        flex-direction: column;
        align-items: center;
        > div {
          margin: 0 4px;
          margin-top: 5px;
        }
      }
    }
  }

  .inventory {
    direction: rtl;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
  }

  .topnav {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    font-size: 0.9rem;
    /* height: 55px; */
    background: #0000007a;
    margin: 0 10px auto;
    padding: 12px 7px;
    border-radius: 15px;
    box-shadow: 0 5px 10px #05070c;

    .status {
      margin: 0px;
      box-shadow: unset;
    }

    > .links {
      display: flex;
      justify-content: end;
      flex-direction: row-reverse;

      > a {
        display: flex;
        justify-content: end;
        margin: 0 5px;
        padding: 4px 5px;
      }
    }
  }
`;

export default Orders;
