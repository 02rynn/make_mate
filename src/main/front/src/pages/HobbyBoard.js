

import React from "react";
import AddBoard from "../components/AddBoard";
import Board from "../components/Board";
import  {call} from "../service/ApiService";
import { Paper, List, Container } from "@material-ui/core";



class HobbyBoard extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		items: [],
	  };
	}
  
	componentDidMount() {
	  call("/board", "GET", null).then((response) =>
		this.setState({ items: response.data })
	  );
	}
  
	add = (item) => {
	  call("/board", "POST", item).then((response) =>
		this.setState({ items: response.data })
	  );
	};
  
	delete = (item) => {
	  call("/board", "DELETE", item).then((response) =>
		this.setState({ items: response.data })
	  );
	};
  
	update = (item) => {
	  call("/board", "PUT", item).then((response) =>
		this.setState({ items: response.data })
	  );
	};
  
	render() {
	  var boardItems = this.state.items.length > 0 && (
		<Paper style={{ margin: 16 }}>
		  <List>
			{this.state.items.map((item, idx) => (
			  <Board
				item={item}
				key={item.id}
				delete={this.delete}
				update={this.update}
			  />
			))}
		  </List>
		</Paper>
	  );
  
	  // 3. props로 넘겨주기
	  return (
		<div className="App">
		  <Container maxWidth="md">
			<AddBoard add={this.add} />
			<div className="BoardList">{boardItems}</div>
		  </Container>
		</div>
	  );
	}
  }
  
  export default HobbyBoard;
  