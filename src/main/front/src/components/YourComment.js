import HRBoard from"../pages/HRBoard";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
function YourComment(){

    const {id} = useParams();
    const[comment , setComment] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (sessionStorage.getItem("loginId") == null) {
    //         alert("로그인이 필요한 서비스 입니다.");
    //         navigate("/mypage");
    //     }
    // }, []);

       useEffect(()=>{
        axios
        .get("http://localhost:8080/yourcomment/"+ id)
        .then((response)=> {
            console.log("댓글 요청 보내기");
            console.log(response.data);
            setComment(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])  
    
    return(
        <>
        <div className="section_container">
            <h3 style={{width:'85%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold',
              marginBottom:'30px'}}>{id}님이 단 댓글 </h3>
                  {
                comment.map((data,i) => {
                    return(
                        <>
                        <p>
                            {data.content}
                            
                        </p>
                        </>
                    )
                })
            }

        </div>
        </>
    )

}

export default YourComment;