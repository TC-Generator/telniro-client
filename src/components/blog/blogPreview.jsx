import { Container } from "./BlogPreview.styled";
import Flicking from "@egjs/react-flicking";
import LinesEllipsis from "react-lines-ellipsis";
import { AiFillHeart } from "react-icons/ai";

const BlogPreview = () => {
  return (
    <Container>
      <h2 className="title">آخرین مقالات و ترفندها</h2>
      <Flicking
        align="prev"
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        <div className="panel">
          <div className="blog">
            <div className="title">ترفند جدید تبلیغاتی برای جذب</div>
            <div className="">
              <LinesEllipsis
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
            </div>
            <div className="blow">
              <div className="likes">
                <AiFillHeart />
                <span>12</span>
              </div>
              <div className="date">2022/1/3</div>
            </div>
          </div>
        </div>
      </Flicking>
    </Container>
  );
};

export default BlogPreview;
