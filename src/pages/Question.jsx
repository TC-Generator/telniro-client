import styled from "styled-components";
import IssueForm from "../components/IssueForm/IssueForm";
import { useState } from "react";

const Question = () => {
  const [message, setMessage] = useState("");
  const [questionMessages, setQuestionMessages] = useState([
    {
      message:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را ",
      date: "1399/1/12",
      from: "mmdzov",
    },
  ]);

  const handleSendMessage = () => {
    const msg = {
      message: message,
      date: "1399/1/6",
      from: "mmdzov",
    };

    setQuestionMessages((prev) => [...prev, msg]);
    setMessage("");
  };

  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">سوال/مشکل</div>
      </div>

      <div className="title">
        چرا نمیتونم رباتامو فعال کنم ؟ ازتون شکایت میکنم حکم اعدام صادر کنن
        براتون نامردا
      </div>
      <div className="list">
        {questionMessages.map((item) => (
          <div className="question">
            <div className="from">از طرف {item?.from}</div>
            <div className="message">{item?.message}</div>
            <div className="date">{item?.date}</div>
          </div>
        ))}
      </div>

      <div className="send-question">
        <div className="title">پاسخ</div>
        <IssueForm
          message={message}
          onChangeMessage={({ target }) => setMessage(target.value)}
          onSendMessage={handleSendMessage}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  > .title {
    font-size: 1rem;
    padding: 0 10px;
    font-weight: bold;
  }

  .question {
    .from {
      padding: 0 15px;
      margin: 10px 0px;
    }

    .message {
      padding: 0 10px;
      font-size: 0.9rem;
    }

    .date {
      padding: 0 10px;
      margin: 10px 0px;
    }
  }

  .send-question {
    padding: 0 10px;

    .title {
      font-size: 1.1rem;
    }
  }
`;

export default Question;
