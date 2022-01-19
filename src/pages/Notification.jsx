import styled from "styled-components";
import { Image } from "antd";
import ProfileImage from "../assets/img/profile.png";
import errorImage from "../components/utils/errorImage";
import { useState } from "react";
import IssueForm from "../components/IssueForm/IssueForm";

const Notification = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "mmdzov",
      image: ProfileImage,
      message: "سفارش شما با موفقیت لغو شد و هزینه به شما بازگشت",
      date: "1399/1/23",
    },
  ]);
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const msg = {
      from: "mohammad",
      message: message,
      image: ProfileImage,
      date: "1399/1/13",
    };

    setMessages((prev) => [...prev, msg]);
    setMessage("");
  };

  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">لغو سفارش</div>
      </div>
      {messages.map((item) => (
        <div className="message">
          <div className="from">
            <div className="from-who">از طرف {item.from}</div>
            <Image
              width={30}
              height={30}
              style={{ borderRadius: "100%", overflow: "hidden" }}
              src={item?.image}
              fallback={errorImage}
            />
          </div>

          <div className="description">{item?.message}</div>

          <div className="date">{item?.date}</div>
        </div>
      ))}

      <div className="" style={{ marginTop: "20px", padding: "0 10px" }}>
        <div className="title" style={{ fontSize: "1.1rem" }}>
          پاسخ
        </div>
        <IssueForm
          message={message}
          onChangeMessage={handleChangeMessage}
          onSendMessage={handleSendMessage}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .from {
    padding: 0 10px;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description {
    padding: 0 10px;
  }

  .date {
    font-size: 0.8rem;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;

export default Notification;
