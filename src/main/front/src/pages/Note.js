import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import MsgContentBox from "../components/MsgContentBox";
import {useState} from "react";
import About from "./../about";
function Note() {
  const [content, setContent] = useState();

  const handleClickButton = (index) => {
    setContent(index);
  };

  const selectComponent = {
    list: [
      {name: "second"},
      {name: "third"},
      {name: "fourth"},
      {name: "fifasdth1"},
      {name: "fifasdasth2"},
      {name: "fifthasd3"},
      {name: "fiftdh4"},
      {name: "fiftash5"},
      {name: "fiftdasdh6"},
      {name: "fifasdth7"},
      {name: "fiftasdh8"},
    ],
  };

  // selectComponent.list.map((data, index) => {
  //   console.log(data.text);
  // });
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
