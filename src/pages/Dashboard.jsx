import styled from "styled-components";
import Profile from "../components/Dashboard/Profile";

const Dashboard = () => {
  return (
    <Container className="">
      <Profile />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  /* &::webkitt */
`;

export default Dashboard;
