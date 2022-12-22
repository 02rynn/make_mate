import { Button, Form, Input} from 'antd';
import { LockOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import Modal from 'react-modal';
import css from '../css/Section.css';

function Password(){
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

const onChangePassword = (e) => {
            const currentPW = e.target.value;
            setPassword(currentPW);
         
        };

        const onChangePasswordConfirm = (e) => { //재확인에 입력되는 value
        const onCheckPW = e.target.value;
         setPasswordConfirm(onCheckPW);
       
        };

        useEffect(()=>{
            if(passwordConfirm == ""){ 
                console.log('불일치')
                setPasswordConfirmMessage("");
            }else if(password== passwordConfirm){
                setPasswordConfirmMessage("비밀번호가 일치합니다");
                console.log('일치')
            }else if( password !== passwordConfirm){
                setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
            }
        },[onChangePasswordConfirm])

    return(
        <>
        <div className='section_container'>
            <p className='section_title'> 비밀번호변경</p>
            <Form>
            <Form.Item
                        label="비밀번호" 
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            {
                                pattern:/^([a-zA-Z0-9!#$%@\-_=+<>]+)$/,
                                message: '영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요'
                            }, {
                                min: 8,
                                message: "영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요",
                              },
                        ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                onChange={(e)=>{onChangePassword(e);}} />
                    </Form.Item>

                    <Form.Item
                        label="비밀번호 재확인"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="passwordCheck"
                        rules={[
                            {
                                required: true,
                                message: 'Please check your Password!'
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
                                onChange={(e)=>{onChangePasswordConfirm(e);}}
                                />
                                < p style={{fontSize:'12px' ,color:'red'}}>{passwordConfirmMessage}</p>
                                
                    </Form.Item>

                    <Form.Item>
                        <Button style={{backgroundColor:'#ff7f27' ,fontWeight:'bold'}} htmlType='submit'> 비밀번호 변경</Button>
                    </Form.Item>
                    </Form>

            
        </div>

        </>
    )

}

export default Password;