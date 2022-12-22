import { Button, Form, Input} from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import css from '../css/Section.css';

function Email(){

   // 서버에서 비밀번호가지고 와가지고 그거랑 같으면 -> 현재 사용중인 번호입니다.
   // 아니면 새로운 비번으로 저장되도록
   const navigate = useNavigate();
   const [password, setPassword] = useState("");
     return(
        <>
        <div className='section_container'>
            <p className='section_title'> 이메일 변경</p>
            <Form>
           
                  
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
                           <Input prefix={<MailOutlined />} placeholder='email'/>
                       </Form.Item>


                        {/* 비밀번호 확인 */}
                    <Form.Item
                        label="계정 비밀번호"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="passwordCheck"
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
                                />
                                < p style={{fontSize:'12px' ,color:'red'}}>현재 사용중인 비밀번호 입니다.</p>
                                
                    </Form.Item>    

                    <Form.Item>
                        <Button style={{backgroundColor:'#ff7f27' ,fontWeight:'bold'}} htmlType='submit'
                           onClick={()=>{
                              navigate('/mypage');
                           }}
                        > 이메일 변경</Button>
                    </Form.Item>

                    </Form>

            
        </div>
        </>
     )

}

export default Email;