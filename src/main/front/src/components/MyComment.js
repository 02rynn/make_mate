import css2 from '../css/Section.css';
import Article from "./Article";
import HRBoard from "../pages/HRBoard"
import axios from "axios";
import {useState, useEffect} from "react";


function MyComment(){
    const loginId = sessionStorage.getItem("loginId");
    const[comment , setComment] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:8080/mycomment/"+ loginId)
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
        marginBottom:'30px'}}>내가 단 댓글 </h3>
               {/* <HRBoard></HRBoard> */}
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

export default MyComment;