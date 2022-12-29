import "../App.css";

function MessageBox(props) {
  return (
    <div class="msgItem">
      <div>
        <h4
          style={{
            color: "#292929",
            fontSize: "14px",
            fontWeight: "bold",
            display: "inline-block",
            float: "left",
          }}>
          {props.sender_id}
        </h4>
        <time
          style={{
            fontSize: "12px",
            float: "right",
          }}>
          {props.time.split(".")[0].replace("T", "일")}
        </time>
      </div>
      <div
        style={{
          clear: "both",
        }}></div>
      <p
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          lineHeight: "20px",
        }}>
        {props.content}
      </p>
    </div>
  );
}
export default MessageBox;
