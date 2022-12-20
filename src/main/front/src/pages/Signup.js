import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card , DatePicker , Radio ,} from 'antd';
import logo from '../images/logoSimple.jpg';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import {useState} from 'react';

function Signup () {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return(
        <div>
             <Card style={{width:'40%', margin:'0 auto',marginTop:'5%', backgroundColor:'lightgray',opacity:'0.8',alignItems:'center'}}>  
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

                {/* 이메일 주소 */}
                    <Form.Item
                    labelCol={{span:24}}
                    wrapperCol={{span: 24}}
                    name="email"
                    label="E-mail"
                   
                    rules={[
                        {
                            type: 'email', 
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                            {
                            pattern: /^[\s]/,
                            message: 'Please do not use space',
                        },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder='email'/>
                    </Form.Item>

                    {/* 로그인 아이디 , 중복확인 */}
                     <Form.Item
                        label="아이디"
                        labelCol={{span:24}}
                        wrapperCol={{span: 23}}
                        name="loginId"
                        rules={[
                            {   
                                required: true,
                                message: 'Please input your ID!',
                            }
                        ]}>

                        <div style={{display:"flex" ,flexDirection:"row"}}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="UserId"
                         style={{justifyContent:"space-between"}}/>
                         <Button type="primary" htmlType="button" className="ld-check-button" style={{backgroundColor: "#ff7f27",marginLeft:"10px"}}>
                            중복확인
                        </Button>
                        </div>
                        </Form.Item>

                    {/* 비밀번호 , 재확인     */}
                    <Form.Item
                        label="비밀번호" 
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            }
                        ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"/>
                    </Form.Item>

                    <Form.Item
                        label="비밀번호 재확인"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="passwordCheck"
                        rules={[
                            {
                                required: true,
                                message: 'Please check your Password!',
                            }
                        ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"/>
                    </Form.Item>

                    {/* 사용자 이름 */}
                      <Form.Item
                        label="이름"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}>
                        <Input  type="text"
                                placeholder="이름"/>
                    </Form.Item>
   
                    

                    {/* 생년월일 */}
                    <Form.Item
                      label="생년월일"
                      labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name='birthDate'
                        rules={[
                            {
                                required: true,
                                message: 'Please choose your birth!',
                            }, 
                        ]}>
                        
                    <DatePicker format='YYYY-MM-DD' style={{ width: '100%' }} />
                    </Form.Item>

                {/* 성별 */}
                <Form.Item
                      label="성별"
                      name='gender'
                      labelCol={{span:24}}
                        wrapperCol={{span: 10}} 
                        rules={[
                            {
                                required: true,
                                message: 'Please choose your sex!',
                            },
                        ]}>
                            <Radio>남</Radio>
                            <Radio>여</Radio>
                    </Form.Item>


                    {/* 닉네임 */}
                    <Form.Item
                        label="닉네임"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="nickName"
                        rules={[
                            {   
                                required: true,
                                message: 'Please input your nickName!',
                            }, {
                                pattern: /^[\s]/,
                                message: 'Please do not use space',
                            }
                        ]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="nickName" />
                    </Form.Item>

                

                    <Form.Item label="주소"
                      labelCol={{span:24}}
                      wrapperCol={{span: 22}}
                      name="address"
                      rules={[
                        {   
                            required: true,
                            message: 'Please input your nickName!',
                        },
                    ]}>
                        <div style={{display:'flex' , flexDirection:'row'}}>
                        <Input type = "text" style={{justifyContent:'space-between', marginRight:'10px'}} placeholder='우편주소를 입력하세요'></Input>
                        <Button type="primary" htmlType="button" className="login-form-button" style={{backgroundColor: "#ff7f27"}} onClick={()=>{
                            setModalIsOpen=(true)}}>
                            주소찾기
                        </Button>
                          

                        {/* 주소는 일단 스페이스 가능한데 데이터에 집어넣을 때 trim해서 넣기 */}
                        </div>
                        <Input type = "text" style={{justifyContent:'space-between', marginTop:'10px'}} placeholder='상세 주소를 입력하세요'></Input>
                    </Form.Item>

                    <Modal isOpen={false}>
                   This is Modal content
                   </Modal>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor: "#ff7f27"}}>
                            Sing up
                        </Button>
                    </Form.Item>

                </Form>
            </Card>         



        </div>
    )
}
export default Signup