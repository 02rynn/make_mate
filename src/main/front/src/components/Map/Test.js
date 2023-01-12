// import MapShow from "./MapShow";
// import MapSearch from "./MapSearch";
// import TestComponent from "./TestComponent";

// function test () {
//     return(
//         <div>
//             <MapSearch/>
//             <br/>
//             <MapShow/>
//             <br/>
//             <TestComponent/>
//         </div>
//     )
// }
// export default test;

import React from "react";
import SingleTweet from "./SingleTweet";
import css from "../../css/Section.css";
import css12 from "../../css/comment.css";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {useEffect} from "react";
const loginId_session = sessionStorage.getItem("loginId");

class Test extends React.Component {
  constructor(props) {
    console.log(props.comment);
    super(props);

    this.state = {
      tweets: props.comment,
    };
    this.addTweet = this.addTweet.bind(this);
    // this.no = props.comment.no;//
  }

  addTweet() {
    const userId = sessionStorage.getItem("loginId");
    let value = document.querySelector("#new-tweet-content").value;
    this.setState({
      tweets: [
        ...this.state.tweets,
        {
          writer: userId,
          date: new Date().toISOString().slice(0, 10),
          content: value,
        },
      ],
    });
    axios
      .post(
        "http://localhost:8080/comment/" +
          this.state.tweets[0].no +
          "/" +
          value +
          "/" +
          userId
      )
      .then((response) => {})
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div id="root">
        <div>
          <div
            id="writing-area"
            style={{
              marginLeft: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <textarea
              className="text_comment"
              id="new-tweet-content"></textarea>
            <button
              id="submit"
              className="logout"
              onClick={this.addTweet}
              style={{width: "100px"}}>
              {" "}
              댓글입력
            </button>
          </div>
          <ul id="tweets">
            {this.state.tweets?.map((tweet) => {
              return <SingleTweet tweet={tweet} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Test;
