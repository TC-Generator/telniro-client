import styled from "styled-components";
import { HiReply } from "react-icons/hi";
import { useNavigate } from "react-router";

const Notifications = () => {
  const navigate = useNavigate();

  const handleGoMessage = (message_id) => {
    navigate(message_id);
  };

  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">اعلان ها</div>
      </div>
      <div className="message">
        <div className="dot"></div>
        <div className="title" onClick={() => handleGoMessage("Dsr2Hvs")}>
          لغو سفارش
        </div>
        <div className="message" onClick={() => handleGoMessage("Dsr2Hvs")}>
          سفارش شما با موفقیت لغو شد و هزینه به شما بازگشت
        </div>
        <div className="message-btm">
          <div className="reply">
            <HiReply />
            <span>12</span>
          </div>
          <div className="date">1399/1/4</div>
        </div>
      </div>
      <div className="message">
        <div className="title" onClick={() => handleGoMessage("DDXgr2Hvs")}>
          لغو سفارش
        </div>
        <div className="message" onClick={() => handleGoMessage("DDXgr2Hvs")}>
          سفارش شما با موفقیت لغو شد و هزینه به شما بازگشت
        </div>
        <div className="message-btm">
          <div className="reply">
            <HiReply />
            <span>12</span>
          </div>
          <div className="date">1399/1/4</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & > .message {
    margin: 0 10px auto;
    padding: 10px 10px;
    border-radius: 10px;
    background: #0b0e13;
    margin-bottom: 15px;
    box-shadow: 0 5px 10px 1px #0b0e13;
    position: relative;

    & > .dot {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 10px;
      height: 10px;
      background: #e54545;
      border-radius: 100px;
    }

    & > .title {
      font-size: 1rem;
      cursor: pointer;
    }
    & > .message {
      font-size: 0.8rem;
      padding: 0 4px;
      cursor: pointer;
    }

    & > .message-btm {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      height: 30px;
      align-items: end;
    }

    .reply {
      /* direction: ltr; */
      display: flex;
      align-items: center;
      svg {
        transform: rotate(181deg);
        font-size: 0.8rem;
        margin-left: 5px;
      }
      span {
        font-size: 0.8rem;
      }

      .date {
        font-size: 0.8rem;
      }
    }
  }
`;

export default Notifications;
