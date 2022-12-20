import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card  } from 'antd';
import loginBg from '../videos/loginBg.mp4';
import logo from '../images/logoSimple.jpg';

function Login () {
    const { Meta } = Card;
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
        
    return( 

        <div>
            <video className='videoTag' autoPlay loop muted style={{opacity:'0.7',width:'100%'}}>
                <source src={loginBg} type='video/mp4' />
            </video>
            <Card style={{width:'40%', margin:'0 auto',marginTop:'-48%', backgroundColor:'lightgray',opacity:'0.8',alignItems:'center'}}>  
                <Form
                    action='/login'
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                    remember: true,
                }} onFinish={onFinish}>
                    <div>
                    <img src={logo} alt="" /><br/><br/><br/>
                    </div>
                    <Form.Item
                        name="username"
                        rules={[
                            {   
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                                placeholder="Password"/>
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
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor: "#ff7f27"}}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>         
        </div>
    )
}
export default Login;