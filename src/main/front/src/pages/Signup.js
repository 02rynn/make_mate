 /* eslint-disable */
import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card , DatePicker , Radio ,} from 'antd';
import logo from '../images/logoSimple.jpg';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { genPlaceholderStyle } from 'antd/es/input/style';
function Signup () {
    
    const navigate = useNavigate();
     const [modalIsOpen, setModalIsOpen] = useState(false);

    //회원가입 초기값
const [loginId, setLoginId] = useState("");
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirm, setPasswordConfirm] = useState("");
const [email, setEmail] = useState("");
const [nickName, setNickName] = useState("");
const [birth, setBirth] = useState("");
const [gender , setGender] = useState("");
const [profile , setProfile] = useState("");
//유효성검사

const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

const onChangePassword = (e) => {
            const currentPW = e.target.value;
            setPassword(currentPW);
           console.log(password);
           console.log('비밀번호');
           
        };

        const onChangePasswordConfirm = (e) => { //재확인에 입력되는 value
        const onCheckPW = e.target.value;
         setPasswordConfirm(onCheckPW);
         console.log('확인 비번');
         console.log(passwordConfirm);
        };

        useEffect(()=>{
            if(password !== passwordConfirm){ 
                console.log('불일치')
                setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
            }else{
                setPasswordConfirmMessage("비밀번호가 일치합니다");
                console.log('일치')
            };
          console.log(passwordConfirm);
            
        },[onChangePasswordConfirm])

        // const check = ()=>{
        //     console.log("check method");
        //     console.log(password);
        //     console.log(passwordConfirm);
        //     if(password !== passwordConfirm){
        //         console.log('불일치')
        //         setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
        //     };
        // }
    
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    //카카오주소
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        setAddress(fullAddress);
        setZipcode(data.zonecode);
        setModalIsOpen(false)
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

  

   
    //성별 라디오버튼
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    return(
        <div>
             <Card style={{width:'40%', margin:'0 auto',marginTop:'5%', backgroundColor:'lightgray',opacity:'0.8',alignItems:'center'}}>  
                <Form
                    action='/login'
                    method='post'
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
                            },{
                                max: 5,
                                message: "이름은  5글자 이하 입니다",
                              },
                              {
                                min: 2,
                                message: "이름은 2글자  입니다",
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
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={1}>남</Radio>
                                <Radio value={2}>여</Radio>
                            </Radio.Group>
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
                        <Input type = "text" id="postcode" style={{justifyContent:'space-between', marginRight:'10px'}} placeholder='우편번호를 입력하세요' value={zipcode}>
                           
                        </Input>
                        <Button type="primary" htmlType="button" className="login-form-button" style={{backgroundColor: "#ff7f27"}} onClick={()=>{
                        setModalIsOpen(true)}}>
                            주소찾기
                        </Button>
                        <Modal isOpen={modalIsOpen}  style={{ content:{width:"50%" , marginLeft:'20%', height:'70%'}}} >
                            <DaumPostcode onComplete={handlePostCode}>         
                          
                            </DaumPostcode>
                        </Modal>
                           

                        {/* 주소는 일단 스페이스 가능한데 데이터에 집어넣을 때 trim해서 넣기 */}
                        </div>
                        <Input type = "text"  id="detailAddress" style={{justifyContent:'space-between', marginTop:'10px'}} placeholder='상세 주소를 입력하세요' value= {address}>
                           
                        </Input>
                    </Form.Item>

                    

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor: "#ff7f27"}}
                        onClick={()=>{check()}}
                        >
                            Sing up
                        </Button>
                    </Form.Item>

                </Form>
            </Card>         
        </div>
    )
  
}
export default Signup;