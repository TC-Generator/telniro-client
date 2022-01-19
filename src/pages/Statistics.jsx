import { useState } from "react";
import styled from "styled-components";

const Statistics = () => {
  const [bots] = useState([
    {
      bot_name: "morteza",
      user_id: 231243247,
    },
  ]);

  return (
    <Container className="dashboard-layout">
      <div className="header">
        <div className="title">آمارها</div>
      </div>

      <div className="container">
          charts
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default Statistics;
