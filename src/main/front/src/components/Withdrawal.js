import { Button, Form, Input} from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import css from '../css/Section.css';
import css1 from '../css/MyPage.css';

function Withdrawal(){
    
    //서버에서 가지고올 비밀번호와 아래 입력 비밀번호를 대조해야함 
    const [password, setPassword] = useState(""); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const navigate = useNavigate();

    return(
       <>
       <div className='section_container'>
            <p className='section_title'> 회원탈퇴</p>
            <Form>
           

                        {/* 비밀번호 확인 */}
                    <Form.Item
                        label="계정 비밀번호를 입력하세요"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="password">
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                                < p style={{fontSize:'12px' ,color:'red'}}>비밀번호가 일치하지않습니다</p>
                                <br/><br/>
                                
                                <div className='warning_box'>
                                   <p className='warning'>
                                    ※탈퇴 및 가입을 번복할 경우, 서비스 악용 방지를 위해 재가입이 제한됩니다.
                                    최초 탈퇴 시에는 가입 시점을 기준으로 1일간 제한되며,<br/> 2회 이상 탈퇴를 반복할 경우
                                    30일간 제한 됩니다
                                    </p>
                                   <p className='warning'>
                                    ※탈퇴 후 개인정보는 삭제되며, 복구 할 수 없습니다
                                    ※작성한 게시물은 삭제되지 않으며, (알수없음)으로 닉네임이 표시됩니다.
                                   </p>
                                </div>
                    </Form.Item>    

                    <Form.Item>
                        <Button style={{backgroundColor:'#ff7f27' ,fontWeight:'bold'}} htmlType='submit'
                           onClick={()=>{
                              setIsModalOpen(true);
                           }}
                        > 회원탈퇴</Button>
                    </Form.Item>
                      <Modal isOpen={isModalOpen}
                      onRequestClose={()=>{setIsModalOpen(false)}}
                      style={{ content:{width:"23%" , margin:'0 auto', height:'30%' ,marginTop:'20%', textAlign:'center'} ,
                       overlay:{borderRadius:'15%',margin:'0 auto'}}}>
                            <div className='withdrawal_modal_content'>
                            <p className='withdrawal_check_msg'>정말 탈퇴하시겠습니까?</p>
                            <div className='withdrawal_check_btn'>
                           <button className='btn' onClick={()=>{
                            navigate('/');
                           }} style={{marginRight:'8px'}}>탈퇴하기</button>
                           <button className='btn' onClick={()=>{
                            setIsModalOpen(false)
                           }}>취소하기</button>
                           </div>
                           </div>
                      </Modal>

                    </Form>
                    </div>
       


       </>
    )

}

export default Withdrawal;