import { NavLink } from "react-router-dom";
import { Container } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Container className="">
      <NavLink to="dashboard">داشبورد</NavLink>
      <NavLink to="login">ورود/عضویت</NavLink>
      <NavLink to="order">سفارش</NavLink>
      <NavLink to="blog">بلاگ</NavLink>
    </Container>
  );
};

export default Navbar;
