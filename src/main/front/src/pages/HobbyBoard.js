import { Router, Route, Routes} from 'react-router-dom';
import ListBoardComponent from '../components/ListBoardComponent'; 
import CreateBoardComponent from '../components/CreateBoardComponent' ;
import ReadBoardComponent  from '../components/ReadBoardComponent'



function HobbyBoard() {
  return (

   
          <div className="container">
		     <Routes>
              <Route path = "/" exact component = {ListBoardComponent}></Route>
              <Route path = "/board" component = {ListBoardComponent}></Route>
              <Route path = "/create-board/:no" component = {CreateBoardComponent}></Route>
              <Route path = "/read-board/:no" component = {ReadBoardComponent}></Route>
			
			
			  </Routes>

			 
			  
          </div>

          
   
     
  );
}

export default HobbyBoard;
