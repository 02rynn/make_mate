import "../App.css";

function MsgModal(props) {
  return (
    <div className="msgModal">
      <form className="msgModalBox">
        <p>쪽지 보내기</p>
        <a
          style={{float: "right", cursor: "pointer"}}
          onClick={() => {
            props.setModal(false);
          }}>
          닫기
        </a>
        <textarea
          className="message"
          placeholder="내용을 입력해주세요."></textarea>
        <input type="submit" value="전송" />
      </form>
    </div>
  );
}
export default MsgModal;
