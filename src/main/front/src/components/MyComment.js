import css2 from '../css/Section.css';
import Article from "./Article";
import HRBoard from "../pages/HRBoard"


function MyComment(){

    return(
    <>
        <div className="section_container">
            <h3 style={{width:'85%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold',
        marginBottom:'30px'}}>내가 댓글 단 글</h3>
               <HRBoard></HRBoard>

        </div>
    </>
    )

}

export default MyComment;