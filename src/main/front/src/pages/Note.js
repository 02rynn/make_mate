import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import MsgContentBox from "../components/MsgContentBox";
import {useState} from "react";

function Note() {
  const [content, setContent] = useState();

  const handleClickButton = (index) => {
    setContent(index);
  };

  const selectComponent = {
    list: [
      {name1: "second"},
      {name1: "third"},
      {name1: "fourth"},
      {name1: "fifasdth1"},
      {name1: "fifasdasth2"},
      {name1: "fifthasd3"},
      {name1: "fiftdh4"},
      {name1: "fiftash5"},
      {name1: "fiftdasdh6"},
      {name1: "fifasdth7"},
      {name1: "fiftasdh8"},
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
                  key={data.name}
                  onClick={() => {
                    handleClickButton(index);
                  }}>
                  <MessageBox name={data.name}></MessageBox>
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
