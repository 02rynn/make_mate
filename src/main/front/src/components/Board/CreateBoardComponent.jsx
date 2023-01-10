import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardService from '../../service/BoardService';
import axios from "axios";
const CreateBoardComponent = () => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/category/ss")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const changeCategoryHandler = (event) => {
    setInputTitle(event.target.value);
  }
  


  const changeTitleHandler = (event) => {
    setInputTitle(event.target.value);
  }
  const changeContentsHandler = (event) => {
    setInputContent(event.target.value);
  }
 

  
  const createBoard = (e) => {
    e.preventDefault();
    const board = {
      
      title: inputTitle,
      contents: inputContent,
      categoryCode : inputCategory
   
    }
    console.log("board=>" + JSON.stringify(board));
    BoardService.createBoard(board).then(res => {
      navigate('/board')
    });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">새글을 작성해주세요</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Type </label>
                  <select placeholder="type" name=" category" className="form-control">
                    {
                      category.map((data,i)=>{
                        return(
                          <option value={data.categoryCode}  >{data.categoryName}</option>
                        )
                       
                      
                      })
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label> Title </label>
                  <input type="text" placeholder="title" name="title" className="form-control"
                    value={inputTitle} onChange={changeTitleHandler} />
                </div>
                <div className="form-group">
                  <label> Contents  </label>
                  <textarea placeholder="contents" name="contents" className="form-control"
                    value={inputContent} onChange={changeContentsHandler} />
                </div>
              
                <button className="btn btn-success" onClick={createBoard}>Save</button>
                <button className="btn btn-danger" onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CreateBoardComponent;