import styled from "styled-components";
import { Image } from "antd";
import ProfileImage from "../../assets/img/profile.png";
import LinesEllipsis from "react-lines-ellipsis";
import Order from "../Orders/Order";
import errorImage from "../utils/errorImage";
import Transaction from "../Transactions/Transaction";

const Profile = () => {
  return (
    <Container className="">
      <div className="profile">
        <Image
          width={65}
          height={65}
          style={{ borderRadius: "100%", overflow: "hidden" }}
          src={ProfileImage}
          fallback={errorImage}
        />
        <div className="details">
          <div className="name">mohammad ali</div>
          <div className="phone">+989365634315</div>
        </div>
      </div>

      <div className="account">
        <div className="title">یوزر آیدی</div>
        <div className="content">124323553</div>
      </div>
      <div className="account">
        <div className="title">موجودی حساب (تومان)</div>
        <div className="content">{Number(1000000).toLocaleString("fa-IR")}</div>
      </div>

      <div className="subcategory">
        <div className="">
          <div className="title">زیرمجموعه ها</div>
          <div className="content">{Number(30).toLocaleString("fa-IR")}</div>
        </div>
        <div className="subcat-user">
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "100%", overflow: "hidden" }}
            src={ProfileImage}
            fallback={errorImage}
          />
        </div>
      </div>
      <div className="">
        <div className="bots">
          <div className="title">تعداد ربات های فعال</div>
          <div className="content">21</div>
        </div>
        <div className="bots">
          <div className="title">تعداد قابل ایجاد</div>
          <div className="content">100</div>
        </div>
      </div>

      <div className="last-messages">
        <div className="title">آخرین پیام ها</div>
        <div className="messages">
          <div className="message">
            <div className="dot"></div>
            <LinesEllipsis
              text="خرید شما لغو شد"
              maxLine="2"
              ellipsis="..."
              trimRight
              className="title"
              basedOn="letters"
            />
            <div className="see-more">بیشتر...</div>
          </div>
          <div className="message">
            <div className="title">
              کاربر محمدلی به زیرمجموعه های شما اضاف شد حالا شما 10 زیرمجموعه
              دارید fsdflp s lfsdpfl sfp ewlfpsl fsed
            </div>
            <div className="see-more">بیشتر...</div>
          </div>
        </div>
      </div>

      <div className="recent-lists">
        <div className="title">سفارش اخیر</div>
        <Order />
      </div>

      <div className="recent-lists" style={{ marginTop: 20 }}>
        <div className="title">آخرین تراکنش ها</div>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  .subcategory {
    margin-bottom: 15px;

    & > div:first-of-type {
      display: flex;
      justify-content: space-between;
      margin: 10px 5px;
    }

    & > div:last-of-type {
      direction: ltr;
      & > div {
        width: 25px;
        height: 25px;
        margin: 0 4px;
      }
    }
  }

  .account {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin: 15px 5px;
  }

  .recent-lists {
    & > .title {
      font-size: 1.1rem;
      margin-bottom: 6px;
    }
  }

  .bots {
    font-size: 0.8rem;
    /* box-shadow: 0 5px 10px 1px #0b0e12; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin: 5px 0px;
    background: #0b0f14;
    padding: 5px 10px;
    border-radius: 6px;

    .content {
      padding-top: 3px;
      width: 25px;
      text-align: center;
      background: #2424247d;
      border-radius: 100px;
    }
  }

  > .profile {
    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background: #11161e70;
      /* box-shadow: 0 5px 15px 1px #0000006e; */
      -webkit-backdrop-filter: blur(6px);
      backdrop-filter: blur(6px);
    }

    z-index: 9;

    display: flex;
    margin: 10px 0px;
    padding: 10px 0px;
    margin-top: 0;
    position: sticky;
    top: 0;
    background: #11161e;
  }

  .last-messages {
    margin: 20px 0px;
    > .title {
      font-size: 1.1rem;
    }

    .messages > .message {
      padding: 9px 11px;
      margin: 5px 0px;
      background: #00000054;
      border-radius: 6px;
      justify-content: space-between;
      align-items: self-start;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr auto;
      position: relative;

      .dot {
        position: absolute;
        width: 15px;
        height: 15px;
        background: #e54545;
        border-radius: 100%;
        border: 4px solid #0b0f14;
        top: -2px;
        right: -2px;
      }

      > .title {
        font-size: 0.8rem;
        white-space: nowrap;
        overflow: hidden;
      }

      .see-more {
        font-size: 0.7rem;
        color: #2196f3;
        white-space: nowrap;
        box-shadow: 5px 0px 11px 9px #0b0f14;
      }
    }
  }

  .details {
    padding: 0 10px;
    padding-top: 5px;
    box-sizing: border-box;
    text-align: right;
    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .phone {
      direction: ltr;
      font-size: 0.9rem;
    }

    .userid {
      direction: ltr;
      font-size: 0.8rem;
    }
  }
`;

export default Profile;
