import { useState } from "react";
import styled from "styled-components";
import IssueForm from "../components/IssueForm/IssueForm";
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router";

const Questions = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [questionlist] = useState([
    {
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
      message: "رباتام کار نمیدن چیکار کنم درست شن",
      from: "mmdzov",
      id: "42dsFSD53red",
      date: "1399/1/3",
    },
  ]);

  const handleSendMessage = () => {
    console.log("test");
  };

  const handleGoQuestion = (question_id) => {
    navigate(question_id);
  };

  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">سوالات و مشکلات</div>
      </div>
      <div className="last-questions">
        <div className="title">اخیر</div>

        {questionlist.map((item) => (
          <div className="question" onClick={() => handleGoQuestion(item?.id)}>
            <div className="question-header">
              <LinesEllipsis
                text={item?.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                className="title"
                basedOn="letters"
              />
            </div>

            <div className="seeMore">نمایش</div>
          </div>
        ))}
      </div>

      <div className="add-question">
        <div className="title">ایجاد تیکت</div>
        <IssueForm
          TitleEnabled
          title={title}
          message={message}
          submitTitle="ارسال سوال"
          onChangeMessage={({ target }) => setMessage(target.value)}
          onChangeTitle={({ target }) => setTitle(target.value)}
          onSendMessage={handleSendMessage}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .add-question {
    padding: 0 10px;
    margin: 20px 0px;

    & > .title {
      font-size: 1.1rem;
    }
  }

  .last-questions {
    padding: 0 15px;
    & > .title {
      font-size: 1rem;
    }

    .seeMore {
      font-size: 0.7rem;
      color: #2196f3;
      white-space: nowrap;
    }
    & > .question {
      cursor: pointer;
      margin: 10px 0px;
      padding: 10px 9px;
      background: #0b0e13;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;

      .question-header {
        display: flex;
        align-items: center;
        .title {
          font-size: 0.8rem;
        }
      }

      .message {
        padding: 5px 10px;
        font-size: 0.8rem;
        margin: 7px 0px;
      }

      .date {
        font-size: 0.7rem;
        direction: ltr;
      }
    }
  }
`;

export default Questions;
