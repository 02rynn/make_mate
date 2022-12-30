import React ,{useState} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card  } from 'antd';
import loginBg from '../videos/loginBg.mp4';
import logo from '../images/logoSimple.jpg';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login () {
    const navigate = useNavigate();
    const { Meta } = Card;
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

     //세션
  let [loginId, setLoginId] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
 
  let sessionStorage = window.sessionStorage;
        /* { JSON.stringify(sessionStorage) } 이것의 역할은 무엇일까..? 일단 주석으로 남길게용
        글구 메인페이지 로그아웃 버튼에다가 로그아웃 추가해야함.  */
 
 const onFinish = (values) => {
    console.log("try login");
    console.log("Received values of form: ", values);
    /*여기서 이제 데이터로 넘어온 값으로 아이디 비번체크 */
    axios({
        method: "post",
        url: "http://localhost:8080/login", 
        data: values,
    }).catch((e) => {
        console.error(e.response.data);
        })
        .then((response) => {

        sessionStorage.setItem("loginId",response.data.loginId );

        console.log(response.date);

        navigate('/');
        });
  }

        return( 

        <div>
            <video className='videoTag' autoPlay loop muted style={{opacity:'0.7',width:'100%'}}>
                <source src={loginBg} type='video/mp4' />
            </video>
            <Card style={{width:'40%', margin:'0 auto',marginTop:'-48%', backgroundColor:'lightgray',opacity:'0.8',alignItems:'center'}}>  
                <Form
                    action="/login"
                    method="post"
                    // name="normal_login"
                    // className="login-form"
                //     initialValues={{
                //     remember: true,
                // }} 
                onFinish={onFinish}>
                    <div>
                    <img src={logo} alt="" /><br/><br/><br/>
                    </div>
                    <Form.Item
                        name="loginId"
                        rules={[
                            {   
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                           onChange={ (e)=>{setLoginId(e.target.value)}}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            
                                />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <a>회원이 아닌신가요?</a>
                        </Form.Item>
                            <a href="signup">
                                회원가입 하러가기
                            </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor: "#ff7f27"}}
                        onClick={ ()=>{
                            // sessionStorage.setItem("loginId", loginId);
                            // setSavedLoginId(sessionStorage.getItem("loginId"));
                        }}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>         
        </div>
    )
}
export default Login;