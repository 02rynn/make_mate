import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import MsgContentBox from "../components/MsgContentBox";
import {useState} from "react";

function Note() {
  const [content, setContent] = useState(null);

  const handleClickButton = (index) => {
    setContent(index);
  };

  const selectComponent = {
    list: [
      {name1: "second", time: "22/12/18 23:12"},
      {name1: "third", time: "22/12/18 18:12"},
      {name1: "fourth", time: "22/12/18 34:12"},
      {name1: "fifasdth1", time: "22/12/18 03:12"},
      {name1: "fifasdasth2", time: "22/12/18 04:12"},
      {name1: "fifthasd3", time: "22/12/18 05:12"},
      {name1: "fiftdh4", time: "22/12/18 14:12"},
      {name1: "fiftash5", time: "22/12/18 09:12"},
      {name1: "fiftdasdh6", time: "22/12/18 11:12"},
      {name1: "fifasdth7", time: "22/12/18 23:32"},
      {name1: "fiftasdh8", time: "22/12/18 22:12"},
    ],
  };

  selectComponent.list.map((data, index) => {
    console.log(data.name1);
  });
  return (
    <div style={{display: "flex"}}>
      <div
        className="messageBox"
        style={{height: "750px", overflowY: "scroll", position: "relative"}}>
        <div
          style={{
            padding: "0px 0px 0px 0px",
            position: "sticky",
            top: "0px",
          }}>
          <h3
            style={{
              fontWeight: "bolder",
              background: "white",
              padding: "22px 0px 10px 0px",
              position: "relative",
              top: "-12px",
              borderBottom: "1px solid #ededed",
            }}>
            쪽지함
          </h3>
        </div>
        <div className="msgItems">
          <ul>
            {selectComponent.list.map((data, index) => {
              return (
                <li
                  key={data.name1}
                  onClick={() => {
                    handleClickButton(index);
                  }}>
                  <MessageBox name={data.name1} time={data.time}></MessageBox>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <MsgContentBox content={content} selectComponent={selectComponent} />
    </div>
  );
}
export default Note;
