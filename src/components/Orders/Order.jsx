import styled from "styled-components";

const Order = () => {
  return (
    <Container className="order">
      <div className="title">ربات تلگرام</div>
      <div className="group">
        <div className="title">تاریخ ثبت</div>
        <div className="description">1399/1/24</div>
      </div>
      <div className="group">
        <div className="title">اعتبار</div>
        <div className="description">5 ماه پس از استفاده</div>
      </div>
      <div className="group">
        <div className="title">تعداد</div>
        <div className="description">32</div>
      </div>
      <div className="group">
        <div className="title">کد</div>
        <div className="description">43SD5drV46IX</div>
      </div>
      <div className="group">
        <div className="title">پرداخت شده (تومان)</div>
        <div className="description">
          {Number(3000000).toLocaleString("fa-IR")}
        </div>
      </div>
      <div className="group">
        <div className="title">وضعیت سفارش</div>
        <div className="description">
          <span className="order-status success"></span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
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
`;

export default Order;
