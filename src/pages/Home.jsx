import styled from "styled-components";
import BriefExplantion from "../components/Home/BriefExplanation";
import SummeryIntro from "../components/Home/SummeryIntro";
import BlogPreview from "../components/blog/blogPreview";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <Container className="">
      <BriefExplantion />
      <SummeryIntro />
      <BlogPreview />
      <Contact />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
