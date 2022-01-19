import { useState } from "react";
// import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const [bot] = useState("tabchi_sazbot@");
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate("/", {
//       replace: true,
//     });
//   };

  return (
    <Container className="">
      {/* <div className="header">
        <div className="title">ورود و عضویت</div>
        <div
          className="back"
          onClick={handleGoBack}
          style={{ cursor: "pointer", fontSize: ".9rem" }}
        >
          بازگشت
        </div>
      </div> */}
      <div className="description">
        ورود یا عضویت در سایت می بایست از طریق تلگرام انجام شود.
      </div>
      <p className="description">
        ابتدا فیلترشکن خود را روشن کنید سپس بر روی دکمه زیر تاچ یا کلیک کنید تا
        وارد تلگرام شوید.
        <div className="login">ورود/عضویت</div>
      </p>

      <div
        className="description"
        style={{ textAlign: "right", lineHeight: "26px" }}
      >
        روش دیگری برای ورود یا عضویت هست که شما می توانید وارد ربات{" "}
        <span>{bot}</span>
        شوید و پس از start دستور <span>login/</span> را ارسال کنید
      </div>
    </Container>
  );
};

const Container = styled.div`
  direction: rtl;
  width: 90%;
  margin: 45px auto;
  padding: 10px 13px;
  border-radius: 5px;
  background: #050506;
  box-shadow: 0 5px 10px #010204;
  box-sizing: border-box;

  .login {
    width: max-content;
    padding: 0 10px;
    height: 35px;
    align-items: center;
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    background: #3f51b5;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 5px 10px -2px #3b4999;
    margin-bottom: 25px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #727272;
    margin-bottom: 10px;
  }

  .description {
    font-size: 0.9rem;
    padding: 0 10px;
    > span {
      color: #9b9b9b;
      background: #ffffff14;
      padding: 1px 10px;
      font-size: 0.8rem;
      border-radius: 10px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;

export default Login;
