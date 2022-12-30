import { Button, Form, Input} from 'antd';
import { LockOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import css from '../css/Section.css';
import ImgTest from '../pages/imgTest';


function Profile(){

    return(
        <>
        <div className='section_container'>
            <p className='section_title'> 프로필 사진 변경</p>

          
            <ImgTest></ImgTest>
            

        </div>


        </>
    )
}

export default Profile;