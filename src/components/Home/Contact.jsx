import styled from "styled-components";

const Contact = () => {
  return (
    <Container className="">
      <div className="title">ارتباط و مشاوره</div>
      <div className="description">@mmdzov</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  direction: rtl;
  padding: 0 15px;
  height: 50px;
  align-items: center;
  background: #06080c;
  margin: 0 auto;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 0.9rem;

  .description {
    direction: ltr;
    color: #2196f3;
  }
`;

export default Contact;
