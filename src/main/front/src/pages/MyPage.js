
import css from '../css/MyPage.css';
import css2 from '../css/Section.css';
import logo from '../images/logoSimple.jpg';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function MyPage () {

    let navigate = useNavigate();
    let loginId = useSelector((state)=>{return state.loginId});
   const[urlParam, setUrlParam] = useState("");

   //로그인이 안되어있다면 이용불가
    useEffect(()=>{
   //alert(loginId);
    if(sessionStorage.getItem("loginId")==null){
        alert("로그인이 필요한 서비스 입니다.")
        navigate("/login")
    }},[])



    return(
        <>
            
        <div className='container' style={{width:'60%'}}>

            <div className="section_container" style={{  marginTop:'50px'}}>
            <section >
                <div className='myInfo section' style={{display:"flex",flexDirection:'row' ,width:'100%'}}>
                <h3 style={{width:'85%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold'}}>{sessionStorage.getItem("loginId")}님의<br/> 페이지</h3>
                <button className="logout" onClick={()=>{
                    sessionStorage.clear();
                    navigate("/");
                }} >로그아웃</button>
                </div>
                <div className='profile' >
                    <div className='profileImg'>
                        <img src={logo} style={{marginLeft:'10px'}}/>
                    </div>
                    <div className='userInfo' style={{marginLeft:'5px'}}>
                   <p style={{marginBottom:'0px'}}>안녕하세요!</p>
                    <h6 style={{fontWeight:'bold'}}>{sessionStorage.getItem("loginId")}님</h6>
                    </div>
                </div>
            </section>

            </div>


                <div className='section_container'>
                    <p className='section_title'> 계정</p>
                    <a className='section_menu' href="/mypage/password">비밀번호 변경</a><br/>
                    <a className='section_menu' href="/mypage/email">이메일 변경</a><br/>
                    <a className='section_menu' href="/mypage/profile">프로필 사진 변경</a><br/>
                </div>

                <div className='section_container'>
                    <p className='section_title'> 커뮤니티</p>
                    <a className='section_menu' href="/mypage/myarticle">내가 쓴 글</a><br/>
                    <a className='section_menu' href="/mypage/mycomment">내가 댓글 단 글</a><br/>
                    <a className='section_menu' href="">메이트 후기</a><br/>
                </div>

                <div className='section_container'>
                    <p className='section_title'> 기타</p>
                    <a className='section_menu' href="/mypage/withdrawal">회원탈퇴</a>
                    <a id='id' onClick={(e)=>{
                        console.log(document.getElementById('id').innerText);
                       setUrlParam(document.getElementById('id').innerText);
                    }} href={'/yourpage/'+urlParam}>qweqwe123</a>
                </div>
        </div>
        </>
    )
}



export default MyPage;