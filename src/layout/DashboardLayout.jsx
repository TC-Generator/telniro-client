import { Outlet } from "react-router";
import styled from "styled-components";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <Container className="">
      <DashboardNavbar />
      <div className="content-structure">
        <Outlet />
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* direction: rtl; */
  display: flex;
  flex-direction: row-reverse;

  /* grid-template-columns: auto 1fr; */
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .content-structure {
    direction: rtl;
    width: 100%;
  }
`;

export default DashboardLayout;
