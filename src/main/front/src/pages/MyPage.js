
import css from '../css/MyPage.css';
import css2 from '../css/Section.css';
import logo from '../images/logoSimple.jpg';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function MyPage () {

    let navigate = useNavigate();

    // 로그인 해야 이동가능한 페이지
   // const sessionId = sessionStorage.getItem("loginId");

    return(
      <>
        <div className='container' style={{width:'60%'}}>

            {/* if(sessionId == null){
                alert("로그인 사용자만 접근 가능합니다.")
            } */}
            
            <div className="section_container" style={{  marginTop:'50px'}}>
            <section >
                <div className='myInfo section' style={{display:"flex",flexDirection:'row' ,width:'100%'}}>
                <h3 style={{width:'85%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold'}}>내 정보</h3>
                <button className="logout" onClick={()=>{
                    sessionStorage.clear();
                    navigate("/");
                }} >로그아웃</button>
                </div>
                <div className='profile' >
                    <div className='profileImg'>
                        <img src={logo} style={{marginLeft:'10px'}}/>
                    </div>
                    <div className='userInfo'>
                    <h6 style={{fontWeight:'bold'}}>flsgp123</h6>
                    <p style={{marginLeft:'5px'}}>정혜린/닉네임</p>
                    </div>
                </div>
            </section>

            </div>


                <div className='section_container'>
                    <p className='section_title'> 계정</p>
                    <a className='section_menu' href="/mypage/password">비밀번호 변경</a><br/>
                    <a className='section_menu' href="/mypage/email">이메일 변경</a><br/>
                    <a className='section_menu' href="/mypage/nickname">닉네임 변경</a><br/>
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
                </div>
        </div>
        </>
    )
}



export default MyPage;