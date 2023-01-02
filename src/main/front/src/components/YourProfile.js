
import css from '../css/MyPage.css';
import css2 from '../css/Section.css';
import logo from '../images/logoSimple.jpg';
import {useState} from 'react';

function YourProfile () {

    /*세션으로 정보확인해서 본인이 아니면 여기로 이동
        클릭하는 사람의 정보를 가져와서 여기다가 넣어줘야할듯 
    */

    return(
      <>
        <div className='container' style={{width:'60%'}}>
            <div className="section_container" style={{  marginTop:'50px'}}>
            <section >
                <div className='myInfo section' style={{display:"flex",flexDirection:'row' ,width:'100%'}}>
                <h3 style={{width:'80%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold'}}>혜린님의 정보</h3>
                
                </div>
                <div className='profile' >
                    <div className='profileImg'>
                        <img src={logo} style={{marginLeft:'10px'}}/>
                    </div>
                    <div className='userInfo'>
                    <h6 style={{fontWeight:'bold'}}>flsgp123</h6>
                    <p style={{marginLeft:'5px'}}>정혜린/나이?</p>
                    </div>
                </div>
            </section>

            </div>
                <div className='section_container'>
                    <p className='section_title'> 커뮤니티</p>
                    <a className='section_menu' href="/mypage/myarticle">혜린님이 쓴 글</a><br/>
                    <a className='section_menu' href="/mypage/mycomment">혜린님이 댓글 단 글</a><br/>
                    <a className='section_menu' href="">메이트 후기</a><br/>
                </div>
                
        </div>
        </>
    )
}



export default YourProfile;