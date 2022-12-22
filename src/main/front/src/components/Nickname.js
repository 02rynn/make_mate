import { Button, Form, Input} from 'antd';
import { LockOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import css from '../css/Section.css';



function Nickname(){

    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");
    
    return(
       <>
         <div className='section_container'>
            <p className='section_title'> 닉네임 변경</p>
            <Form>
            <Form.Item
                        label="새로운 닉네임"
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
                           <Input  type="text" placeholder='새로운 닉네임을 입력하세요{예전 닉네임 띄워주기'/>
                       </Form.Item>


                    <Form.Item>
                        <Button style={{backgroundColor:'#ff7f27' ,fontWeight:'bold'}} htmlType='submit'
                         onClick={()=>{
                            navigate('/mypage');
                         }}> 닉네임 변경</Button>
                    </Form.Item>
                    </Form>

            </div>
       </>
    );

}

export default Nickname;