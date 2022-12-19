import "../App.css";
import axios from "axios";
import {useState} from "react";

function MsgModal(props) {
  let [message, setMsgStr] = useState("");

  return (
    <div className="msgModal">
      <form
        className="msgModalBox"
        action="/msg"
        method="post"
        name="msgModalBox">
        <p>쪽지 보내기</p>
        <a
          style={{float: "right", cursor: "pointer"}}
          onClick={() => {
            props.setModal(false);
          }}>
          닫기
        </a>
        <textarea
          name="message"
          className="message"
          placeholder="내용을 입력해주세요."
          id="msgbox"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              axios
                .post("/msg", {message})
                .then(() => {
                  console.log("success");
                })
                .catch(() => {
                  console.log("fail");
                });

              props.setModal(false);
            }
            setMsgStr(e.target.value);
            console.log(e.target.value);
            console.log(e);
          }}></textarea>
        <input
          value="전송"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            //전송
            axios
              .post("/msg", {message})
              .then(() => {
                console.log("success");
              })
              .catch(() => {
                console.log("fail");
              });

            props.setModal(false);
            // document.form.msgModalBox.submit();
          }}
        />
      </form>
    </div>
  );
}
export default MsgModal;
