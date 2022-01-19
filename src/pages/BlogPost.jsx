import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import styled from "styled-components";

const BlogPost = () => {
  const navigate = useNavigate();

  const handleGoCategory = (category) => {
    navigate("/blog/category/" + category);
  };
  return (
    <Container className="">
      <div className="title">ترفند جدید جذب مخاطب برای تبلیغات</div>

      <div className="date">
        <span>1397/1/23</span>
        <div className="">تاریخ انتشار</div>
      </div>
      <div className="tags">
        <div className="tag" onClick={() => handleGoCategory("Tds5GFvx")}>
          ترفندها
        </div>
        <div className="tag" onClick={() => handleGoCategory("dss5GFvx")}>
          ترفندهای تبلیغاتی
        </div>
      </div>

      <div className="description">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
        و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
        دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
        مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </div>
      <div className="likes">
        <div className="">
          <AiFillHeart />
          <span>12</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  direction: rtl;
  padding: 0 15px;
  margin: 15px 0px;

  .title {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .date {
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-bottom: 20px;
  }

  .tags {
    display: flex;
    margin: 10px 0px;

    .tag {
      margin-left: 10px;
      padding: 1px 10px;
      background: #3f51b561;
      border-radius: 5px;
      font-size: 0.8rem;
      cursor: pointer;
    }
  }
  .description {
    padding: 0 5px;
  }

  .likes {
    display: flex;
    flex-direction: row-reverse;

    > div {
      direction: ltr;
      font-size: 1.2rem;
      display: flex;
    }

    svg {
      color: #e34848;
      font-size: 1.4rem;
    }

    span {
      font-size: 0.8rem;
      margin-top: 2px;
    }
  }
`;

export default BlogPost;
