
import { Router, Route,Routes} from 'react-router-dom'; 
import ListBoardComponent from '../components/ListBoardComponent';
import Header from '../components/Header';



function HobbyBoard() {
  return (
    <div> 
      <Router>             
        <Header/> 
          <div className="container">
		  <Routes>      
              <Route path = "/" exact component = {ListBoardComponent}></Route>
              <Route path = "/board" component = {ListBoardComponent}></Route>
            </Routes>
          </div>
    
      </Router>
    </div>
  );
}

export default HobbyBoard;
