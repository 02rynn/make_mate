import BoardList from "../components/Board/BoardList";
import Write from "../components/Board/writh";

function Board() {
    return (
      <div className="App">
        <BoardList></BoardList>
        <Write></Write>
      </div>
    );
  }
export default Board;