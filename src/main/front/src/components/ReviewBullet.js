import css from "../css/MyPage.css";
import css2 from "../css/Section.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";

function ReviewBullet() {
  const loginId = sessionStorage.getItem("loginId");
  const [review, setReview] = useState([]);
  const [myreview, setMyReview] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/review/" + loginId)
      .then((response) => {
        console.log(response.data);
        setReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/myreview/" + loginId)
      .then((response) => {
        console.log(response.data);
        setMyReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="review_container">
        {/* <div className="section_container_small">
          <p className="section_title"> 전체후기</p>

          {review.map((data, i) => {
            return (
              <div className="article_box">
                {data.content}
                {data.reviewWriter}
                <p>평점: {data.rate}점</p>
              </div>
            );
          })}
        </div> */}

        <div className="section_container_small">
          <p className="section_title"> 작성한 후기</p>
          <div className="article_box">
            {review.map((data, i) => {
              return (
                <div className="article_box">
                  {data.content}
                  <p>평점: {data.rate}점</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section_container_small">
          <p className="section_title"> 받은 메이트 후기</p>
          <div className="article_box">
            {myreview.map((data, i) => {
              return (
                <div className="article_box">
                  {data.content}
                  {data.reviewWriter}
                  <p>평점: {data.rate}점</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewBullet;
