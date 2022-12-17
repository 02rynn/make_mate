
import React from 'react';
import Board from '../components/Board';




 class NoticeBoard extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      item : [{ id : 0, title : "Hello world 1",  done : true },
              { id : 1, title : "Hello world 2",  done : false },
            
            
            
            ],
  };
}
    render(){
      var boarditems = this.state.map((item , idx)  => (
         <Board item = {item} key = {item.id}/>
         ));
    
    
     return(
       <div className='NoticeBoard'>
       {boarditems}
       </div>
    


     );
    }
}
  


export default NoticeBoard;