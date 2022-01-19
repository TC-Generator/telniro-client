/* eslint-disable no-unused-vars */
import styled from "styled-components";
import {
  BiQuestionMark,
  BiLineChart,
  BiUser,
  BiMoney,
  BiBasket,
  BiSitemap,
  BiBell,
  BiArrowBack,
} from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import { FaMoneyCheck } from "react-icons/fa";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { state } = useLocation();

  const handleGoPage = (page = "", name = "") => {
    navigate(`${page}`, {
      state: {
        name: name ?? "dashboard",
      },
    });
  };

  return (
    <Container className="">
      <div onClick={() => handleGoPage("/")}>
        <BiArrowBack style={{ transform: "rotate(180deg)" }} />
      </div>
      <div
        onClick={() => handleGoPage("/dashboard", "dashboard")}
        className={`${
          pathname.split("/").join("").trim() === "dashboard" ? "active" : ""
        }`}
      >
        <BiUser />
      </div>
      <div
        onClick={() => handleGoPage("notifications", "notifications")}
        className={`${pathname.includes("notifications") ? "active" : ""}`}
      >
        <div className="dot"></div>
        <BiBell />
      </div>
      <div
        onClick={() => handleGoPage("statistics", "statistics")}
        className={`${state?.name === "statistics" ? "active" : ""}`}
      >
        <BiLineChart />
      </div>
      <div onClick={() => handleGoPage("/orders")}>
        <BiBasket />
      </div>
      {/* <div
        onClick={() => handleGoPage("subcategories", "subcategories")}
        className={`${state?.name === "subcategories" ? "active" : ""}`}
      >
        <BiSitemap />
      </div> */}
      <div
        onClick={() => handleGoPage("/dashboard/transactions")}
        className={`${pathname.includes("transactions") ? "active" : ""}`}
      >
        <FaMoneyCheck />
      </div>
      <div
        onClick={() => handleGoPage("/dashboard/charge")}
        className={`${pathname.includes("charge") ? "active" : ""}`}
      >
        <BiMoney />
      </div>
      <div
        onClick={() => handleGoPage("questions", "questions")}
        className={`${pathname.includes("questions") ? "active" : ""}`}
      >
        <BiQuestionMark />
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.5rem;
  /* padding: 10px 5px; */
  min-width: 45px;
  display: flex;
  padding: 0 3px;
  flex-direction: column;
  align-items: center;
  background: #00000061;
  /* position: fixed; */
  height: 100%;
  box-shadow: 2px 0px 12px 1px #00000061;
  padding-top: 10px;
  position: sticky;
  top: 0;
  .active {
    background: #262626;
    border-radius: 10px;
    overflow: hidden;
  }

  > div:hover,
  > div:active {
    background: #262626;
    border-radius: 10px;
    overflow: hidden;
  }

  .dot {
    background: #e54545;
    border-radius: 100px;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 8px;
    left: 9px;
  }

  > div {
    display: flex;
    width: 100%;
    position: relative;
    height: 40px;
    align-items: center;
    padding-right: 1px;
    justify-content: center;
    color: #b3b3b3;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export default DashboardNavbar;
