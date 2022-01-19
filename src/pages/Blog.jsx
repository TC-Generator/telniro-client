import { Fragment } from "react";
import { AiFillHeart } from "react-icons/ai";
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Blog = () => {
  const navigate = useNavigate();

  const handleGoCategory = (category) => {
    navigate("/blog/category/" + category, { replace: true });
  };

  const handleGoBlogpost = (post) => {
    navigate("/blog/post/" + post);
  };

  return (
    <Fragment>
      <Container className="cont-dark">
        <div className="inside-container">
          <div className="title">دسته ها</div>
          <div className="categories">
            <div
              className="category"
              onClick={() => handleGoCategory("RTs4dfVC")}
            >
              <div className="cat-title">ترفندها</div>
              <div className="post-count">12</div>
            </div>
            <div
              className="category"
              onClick={() => handleGoCategory("RTs4dfVC")}
            >
              <div className="cat-title">آموزش ها</div>
              <div className="post-count">100</div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="cont-dark">
        <div className="blog-post">
          <div className="title" onClick={() => handleGoBlogpost("DS5df2rfC")}>
            ترفند تبلیغاتی جذب مخاطب
          </div>
          <LinesEllipsis
            onClick={() => handleGoBlogpost("DS5df2rfC")}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              doloremque fugiat praesentium dolorum, magnam reiciendis odio,
              ducimus enim exercitationem dolorem vel aperiam in quam, earum
              tempora ipsam voluptatum animi eaque?"
            maxLine="3"
            ellipsis="..."
            trimRight
            className="description"
            basedOn="letters"
          />
          <div className="tags">
            <div className="tag">ترفندها</div>
            <div className="tag">ترفندهای تبلیغاتی</div>
          </div>
          <div className="blow">
            <div className="likes">
              <AiFillHeart />
              <span>12</span>
            </div>
            <div className="date">2022/1/3</div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  direction: rtl;
  .inside-container > .title {
    font-size: 1.1rem;
    padding: 10px 5px;
  }

  .blog-post {
    padding: 10px 5px;
    .title {
      font-size: 1rem;
      color: #5398cf;
      cursor: pointer;
    }
    .description {
      font-size: 0.8rem;
      cursor: pointer;
    }

    .tags {
      display: flex;
      align-items: center;
      padding: 5px 0px;

      .tag {
        margin-left: 9px;
        font-size: 0.8rem;
        background: #ffffff0a;
        padding: 1px 10px;
        border-radius: 3px;
        cursor: pointer;
      }
    }
    .blow {
      display: flex;
      justify-content: space-between;
      direction: ltr;
      height: 30px;
      align-items: center;

      .likes {
        display: flex;
        align-items: center;
        font-size: 0.8rem;

        svg {
          font-size: 1.3rem;
          color: #d93939;
        }

        span {
          margin-top: 3px;
        }
      }
      .date {
        font-size: 0.8rem;
        margin-top: 5px;
      }
    }
  }
  .category {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    /* margin-bottom: 10px; */
    font-size: 0.8rem;
    padding: 0 10px;
    cursor: pointer;

    &:not(:last-of-type) {
      border-bottom: 1px solid #1c1c1c;
    }
  }
`;

export default Blog;
