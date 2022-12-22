
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import css from '../css/Section.css';

function MyArticle(){

  

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

  

  console.log(selectComponent.list);
  
  
  
  return(
       <>
            <div className='section_container'>
            <p className='section_title' style={{marginBottom:'25px'}}> 내가 쓴 글</p>
            
            {

              selectComponent.list.map((data,i)=>{
                return(

                  <Article 
                  name={data.name1} time={data.time}>
                    
                  </Article>
                  
                )
              })
            }
            </div>
       </>
    )

}


function Article(props){

  const [review, setReview] = useState("메이트 모집완료로 변경");
  const [isDisabled ,setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finishMSG, setFinishMSG] = useState("");
  const click = ()=>{
    setIsDisabled(true);
    
  }

    return(
      //나중에 a태그로 바꾸고 해당 게시글로 이동할 수 있도록 변경 

  <div className="article_box">
  <p>{props.name}</p>
  <p>{props.time}</p>

      <div style={{display:'flex' , flexDirection:'row' ,justifyContent:'center'}}>
        <button className='withdrawal_check_btn' style={{margin:'8px 5px'}} disabled={isDisabled}
        onClick={()=>{
          setReview('메이트 후기 쓰기');
          setIsModalOpen(true);
          setFinishMSG("모집 완료로 변경하시겠습니까?");
         //버튼 누르면 -> 후기쓰기로 이름 바뀌고 -> 다시 클릭하면 모달창 띄우기

         //setReview의 값이 후기쓰기 -> 클릭 -> 후기 모달창 띄우기 
        }}
       
        >{review}</button>
        <Modal isOpen={isModalOpen}
         onRequestClose={()=>{setIsModalOpen(false)}}
         style={{ content:{width:"30%" , margin:'0 auto', height:'30%' ,marginTop:'20%', textAlign:'center'} ,
          overlay:{borderRadius:'15%',margin:'0 auto'}}}
        >
          <p>{finishMSG}</p>
          <button onClick={()=>{
            setIsModalOpen(false);
           
          }}> 확인</button>
        </Modal>
      </div>
  </div>  
    )
}

export default MyArticle;