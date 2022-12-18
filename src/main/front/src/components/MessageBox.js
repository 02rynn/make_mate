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
          익명
        </h4>
        <time style={{fontSize: "12px", float: "right"}}>20/12/11 21:42</time>
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
        {props.name}
      </p>
    </div>
  );
}
export default MessageBox;
