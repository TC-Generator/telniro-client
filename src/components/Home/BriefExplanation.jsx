import { Link } from "react-router-dom";
import { Container } from "./BriefExplantion.styled";

const BriefExplantion = () => {
  return (
    <Container className="">
      <div className="description">
        <span> تل نیرو ,</span> اولین و بزرگترین ربات ساز تلگرام بر پایه MTProto
      </div>
      <Link to="trial">تست رایگان</Link>
    </Container>
  );
};

export default BriefExplantion;
