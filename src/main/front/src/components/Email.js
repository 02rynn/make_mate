import { Button, Form, Input} from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import css from '../css/Section.css';
import axios from "axios";

function Email(){

   // 서버에서 비밀번호가지고 와가지고 그거랑 같으면 -> 현재 사용중인 번호입니다.
   // 아니면 새로운 비번으로 저장되도록
   const navigate = useNavigate();
   const [ispassword, setIsPassword] = useState("");
   const [isemail, setIsEmail] = useState("") ;

    const onChangePassword= (e) => {
        const changePassword = e.target.value;
        setIsPassword(changePassword);
    }

    const onChangeEmail = (e) => {
        const changeEmail = e.target.value;
        setIsEmail(changeEmail);
    }
   
   const onFinish = (values) => {
    console.log("onfinish");
    console.log("Received values of form: ", values);
   

    //비밀번호가 세션의 비밀번호와 일치
    if(sessionStorage.getItem("password")!=ispassword){
        console.log("???왜안됨")
        alert("비밀번호가 일치하지 않습니다");
        return;
    }

    //이메일이 기존 이메일과 동일
    if(sessionStorage.getItem("email")==isemail){
        console.log("???왜안됨이멜");
        alert("기존 이메일과 동일한 이메일 입니다.");
        return;
    }
  

    axios({
        method: "post",
        url: "http://localhost:8080/mypage/email?loginId=" +sessionStorage.getItem("loginId"), 
        data: values, 
    //  headers: {"Content-Type": "multipart/form-data"},
    })
    .catch((e) => {
        console.error(e.response.data);
        })
    .then((response) => {
        console.log(response);

        alert("이메일이 변경되었습니다");
        navigate("/mypage");

        });
    };


    return(
        <>
        <div className='section_container'>
            <p className='section_title'> 이메일 변경</p>
            <Form
                onFinish={onFinish}>

                    <Form.Item
                        label="새로운 이메일"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="newEmail"
                        rules={[
                            {
                                required: true,
                                message: 'Please check your Password!'
                            }, {
                                type:'eamil',
                                message: "이메일 형식이 아닙니다."
                            }, 
                        ]}>
                            <Input prefix={<MailOutlined />} placeholder='email'
                            onChange={(e)=>{
                            onChangeEmail(e);
                            }}
                            />
                    </Form.Item>


                        {/* 비밀번호 확인 */}
                    <Form.Item
                        label="계정 비밀번호"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '비밀번호는 필수입니다.'
                            }, {
                                pattern:/^([a-z0-9!#$%@\-_=+<>]+)$/,
                                message: "영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요"
                            }, {
                                min: 8,
                                message: "영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요"
                              },
                        ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                               onChange={(e)=>{
                                onChangePassword(e)
                               }} />
                                {/* < p style={{fontSize:'12px' ,color:'red'}}>현재 사용중인 비밀번호 입니다.</p> */}
                                
                    </Form.Item>    

                    <Form.Item>
                        <Button style={{backgroundColor:'#ff7f27' ,fontWeight:'bold'}} htmlType='submit'
                        > 이메일 변경</Button>
                    </Form.Item>

                    </Form>

            
        </div>
        </>
     )

}

export default Email;