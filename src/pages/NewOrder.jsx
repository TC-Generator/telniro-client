import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import { Button, Dropdown, Input, Menu, Slider } from "antd";
import { DownOutlined } from "@ant-design/icons";
const NewOrder = () => {
  const [groups, setGroups] = useState([]);
  const [creditDate] = useState([
    { key: 0, value: "1 ماه", date: "1mo" },
    { key: 1, value: "3 ماه", date: "3mo" },
    { key: 2, value: "6 ماه", date: "6mo" },
    { key: 3, value: "1 سال", date: "1ye" },
  ]);
  const [selectedDate, setSelectedDate] = useState("1 ماه");
  const handler = (callback = () => {}, callbackData = {}, group) =>
    callback(callbackData, group);

  const [price, setPrice] = useState(45000);
  const [discount, setDiscount] = useState(null);
  const handleChangeSlider = (value, group) => {
    const gp = groups;
    if (gp[group]?.bots_count) {
      gp[group].bots_count = value;
    } else {
      gp[group] = { ...gp[group], bots_count: value };
    }
    calculatePrice(group);
    setGroups(gp);
  };

  //! setup  discount
  //   useEffect(() => {
  //     const dc = 100;

  //     setDiscount({
  //       discount: price - (price * dc) / 100,
  //       remaining: (price * dc) / 100,
  //       precentage: dc,
  //     });
  //   }, [price]);

  const calculatePrice = (group) => {
    const gp = groups;
    let date = gp[group]?.date?.date || 1;
    if (date === "1mo") date = 1;
    if (date === "3mo") date = 3;
    if (date === "6mo") date = 6;
    if (date === "1ye") date = 12;

    let price = date * +(gp[group]?.bots_count || 1) * 45000;
    setPrice(price);
    return Number(price).toLocaleString("fa-IR");
  };

  const handleSelectCredit = (credit, group) => {
    const credit_date = creditDate[credit?.key];
    const gp = groups;
    if (gp[group]?.bots_count) {
      gp[group].date = credit_date;
    } else {
      gp[group] = { ...gp[group], date: credit_date };
    }
    setSelectedDate(credit_date.value);
    calculatePrice(group);
    setGroups(gp);
  };

  return (
    <Container className="cont-dark">
      <form action="">
        <div className="group" style={{ marginBottom: 0 }}>
          <div className="title-bot-count">
            <div className="title">تعداد ربات</div>
            <div className="count">{groups[0]?.bots_count || 1}</div>
          </div>
          <div className="">
            <Slider
              min={1}
              max={100}
              defaultValue={1}
              onChange={(...args) => handler(handleChangeSlider, ...args, 0)}
            />
          </div>
        </div>

        <div className="group row">
          <div className="title">مدت اعتبار</div>
          <div className="">
            <Dropdown
              overlay={
                <Menu>
                  {creditDate?.map((item) => (
                    <Menu.Item
                      key={item?.key}
                      onClick={(value) => handler(handleSelectCredit, value, 0)}
                    >
                      {item?.value}
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ cursor: "pointer" }}
              >
                {selectedDate || "انتخاب کنید"} <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>

        <div className="group row">
          <div className="title">کد تخفیف</div>
          <div className="">
            <Input placeholder="discount code" style={{ direction: "ltr" }} />
          </div>
        </div>
        <div className="discount-code">
          <div className="notfound">کد تخفیفی اعمال نشده</div>
        </div>

        <div className="price-calculate-title">محاسبه قیمت ها</div>

        <div className="price-calculate">
          <div className="title">قیمت کل (تومان)</div>
          <div className={discount?.precentage ? "hasDiscount" : ""}>
            {Number(price).toLocaleString("fa-IR")}
          </div>
        </div>
        {discount?.precentage ? (
          <Fragment>
            <div className="price-calculate">
              <div className="title">درصد تخفیف</div>
              <div className="discount">%{discount?.precentage}</div>
            </div>
            <div className="price-calculate">
              <div className="title">با تخفیف (تومان)</div>
              <div className="">
                {discount?.discount > 0
                  ? Number(discount?.discount).toLocaleString("fa-IR")
                  : "رایگان"}
              </div>
            </div>
          </Fragment>
        ) : null}

        <div className="order-submit">
          <Button type="primary">ثبت سفارش</Button>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  direction: rtl;

  .discount-code {
    .notfound {
      text-align: center;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f7f7f708;
      border-radius: 10px;
    }
  }

  .price-calculate-title {
    font-size: 1rem;
    padding: 0 5px;
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .title-bot-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .group {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    margin-bottom: 10px;
    /* border-bottom: 2px solid #11161e; */
    .title {
      white-space: pre;
      font-size: 1rem;
    }

    &.row {
      flex-direction: row !important;
      justify-content: space-between !important;
      align-items: center !important;
    }
  }

  .hasDiscount {
    text-decoration: line-through;
    color: #f36060;
  }

  .order-submit {
    display: flex;
    justify-content: end;
    margin-top: 20px;
    padding-bottom: 15px;
  }

  .discount {
    width: 60px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d73d3d;
    border-radius: 100px;
    padding: 0 5px;
    padding-top: 3px;
    padding-right: 9px;
  }
  .price-calculate {
    display: flex;
    justify-content: space-between;
    height: 35px;
    padding: 0 10px;
    align-items: center;
  }
`;

export default NewOrder;
