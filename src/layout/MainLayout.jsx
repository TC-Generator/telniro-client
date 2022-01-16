import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "./MainLayout.styled";

const MainLayout = () => {
  return (
    <Container className="">
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
