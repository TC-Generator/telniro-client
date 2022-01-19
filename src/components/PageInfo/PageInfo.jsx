import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Container } from "./PageInfo.styled";

const PageInfo = () => {
  const [page, setPage] = useState("");
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/", {
      replace: true,
    });
  };

  useEffect(() => {
    if (pathname.split("/").join(" ").trim().length === 0) setPage("");
    if (pathname.includes("orders")) setPage("سفارشات");
    if (pathname.includes("login")) setPage("ورود/عضویت");
    if (pathname.includes("blog")) setPage("بلاگ");
    if (pathname.includes("orders") && pathname.includes("new"))
      setPage("سفارش جدید");
  }, [pathname]);

  if (page === "") return null;
  return (
    <Container className="">
      <div className="page">{page}</div>
      <div className="back" onClick={handleGoBack}>
        بازگشت
      </div>
    </Container>
  );
};

export default PageInfo;
