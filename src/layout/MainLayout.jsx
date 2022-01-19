import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import PageInfo from "../components/PageInfo/PageInfo";
import { Container } from "./MainLayout.styled";

const MainLayout = () => {
  return (
    <Container className="">
      <Navbar />
      <PageInfo />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
