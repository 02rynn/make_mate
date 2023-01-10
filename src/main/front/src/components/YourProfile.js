
import css from '../css/MyPage.css';
import css2 from '../css/Section.css';
import logo from '../images/logoSimple.jpg';
import {useState,useEffect} from 'react';
import { useParams , useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
function YourProfile () {

    /*세션으로 정보확인해서 본인이 아니면 여기로 이동
        클릭하는 사람의 정보를 가져와서 여기다가 넣어줘야할듯 
    */
        const navigate = useNavigate();
        const {id} = useParams();
        const dispatch = useDispatch();

        useEffect(()=>{
            if(sessionStorage.getItem("loginId")==null){
                alert("로그인이 필요한 서비스 입니다.")
                navigate("/mypage")
            }},[])

        // useEffect(()=>{ //본인이면마이페이지
        //         if(sessionStorage.getItem("loginId")==dispatch(loginId)){
        //             navigate("/mypage")
        //         }},[])
    

    return(
        <>
        <div className='container' style={{width:'60%'}}>
            <div className="section_container" style={{  marginTop:'50px'}}>
            <section >
                <div className='myInfo section' style={{display:"flex",flexDirection:'row' ,width:'100%'}}>
                <h3 style={{width:'80%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold'}}> {id}님의 정보</h3>
                
                </div>
                <div className='profile' >
                    <div className='profileImg'>
                        <img src={logo} style={{marginLeft:'10px'}}/>
                    </div>
                    <div className='userInfo'>
                    <h6 style={{fontWeight:'bold'}}> {id}</h6>
                    <p style={{marginLeft:'5px'}}>정혜린/나이?</p>
                    </div>
                </div>
            </section>

            </div>
                <div className='section_container'>
                    <p className='section_title'> 커뮤니티</p>
                    <a className='section_menu' href={"/yourpage/yourarticle/"+id}> {id}님이 쓴 글</a><br/>
                    <a className='section_menu' href={"/yourpage/yourcomment/"+id}> {id}님이 댓글 단 글</a><br/>
                    <a className='section_menu' href="">메이트 후기</a><br/>
                </div>
                
        </div>
        </>
    )
}



export default YourProfile;