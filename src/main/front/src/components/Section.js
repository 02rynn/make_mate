import { useState } from 'react';
import css from '../css/Section.css';

function Section(){

        return(
            <>
                <div className='section_container'>
                    <p className='section_title'> 계정</p>
                    <a className='section_menu' href="">비밀번호 변경</a><br/>
                    <a className='section_menu' href="">이메일 변경</a><br/>
                    <a className='section_menu' href="">닉네임 변경</a><br/>
                </div>

                <div className='section_container'>
                    <p className='section_title'> 커뮤니티</p>
                    <a className='section_menu' href="">내가 쓴 글</a><br/>
                    <a className='section_menu' href="">내가 댓글 단 글</a><br/>
                    <a className='section_menu' href="">메이트 후기</a><br/>
                </div>

                <div className='section_container'>
                    <p className='section_title'> 기타</p>
                    <a className='section_menu' href="">회원탈퇴</a>
                </div>


            </>
        )
     

}

export default Section;