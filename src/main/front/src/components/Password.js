import { Button, Form, Input} from 'antd';
import { LockOutlined} from '@ant-design/icons';
import { useState ,useEffect} from 'react';
import Modal from 'react-modal';
import css from '../css/Section.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Password(){

  const navigate = useNavigate();

    //비밀번호 확인
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isColor, setIsColor] = useState(false);
    const [isPasswordInDB, setIsPasswordInDB] = useState("");
    
    //유효성검사
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");


    
      const onChangePassword = (e) => {
        const currentPW = e.target.value;
        setPassword(currentPW);
        console.log(password);
        console.log("비밀번호");
      };
    
      const onChangePasswordConfirm = (e) => {
        //재확인에 입력되는 value
        const onCheckPW = e.target.value;
        setPasswordConfirm(onCheckPW);
        console.log("확인 비번");
        console.log(passwordConfirm);
      };
    
      const onChangeNowPassword = (e) =>{
        const checkPwInDb = e.target.value;
        setIsPasswordInDB(checkPwInDb);

      } 



      useEffect(() => {
        if (passwordConfirm == "") {
        //  console.log("불일치");
          setIsColor(true);
          setPasswordConfirmMessage("");
        } else if (password == passwordConfirm) {
          setPasswordConfirmMessage("비밀번호가 일치합니다");
    
          console.log("일치");
        } else if (password !== passwordConfirm) {
          setIsColor(false);
          setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
         
        }
        console.log(passwordConfirm);
      }, [onChangePasswordConfirm, onChangePassword]);
    
    

        const onFinish = (values) => {
            console.log("onfinish");
            console.log("Received values of form: ", values);
          //현재 비밀번호랑 세션 비밀번호가 같은지 확인 
          
          
          if(isPasswordInDB != sessionStorage.getItem("password")){
              alert("현재 비밀번호가 다릅니다");
              return
            }
          
            if(isPasswordInDB == passwordConfirm){
              alert("현재 비밀번호가 새 비밀번호와 일치합니다");
              return
            }

            if(password !== passwordConfirm){
              console.log('비밀번호 일치하지 않는답')
              alert("비밀번호가 일치하지 않습니다.");
             // e.preventdefault();
              return
            }
            
            axios({
              method: "post",
              url: "http://localhost:8080/mypage/password?loginId=" +sessionStorage.getItem("loginId"), 
              data: values, 
            //  headers: {"Content-Type": "multipart/form-data"},
            })
              .catch((e) => {
                console.error(e.response.data);
              })
              .then((response) => {
                console.log(response);
               alert("비밀번호가 변경되었습니다");
               navigate("/mypage");
        
                      
              });
          };

    return(
        <>
        <div className='section_container'>
            <p className='section_title'> 비밀번호변경</p>
            <Form
            onFinish={onFinish} >

                    <Form.Item
                        label="현재 비밀번호"
                        labelCol={{span:24}}
                        wrapperCol={{span: 24}}
                        name="oldPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please check your Password!'
                            }, {
                              pattern:
                                /^[a-zA-Z\\d`~.!@#$%^&*()-_=+]{8,24}$/,
                              message:
                                "영문자, 특수문자, 숫자 조합으로 8~26자리  입력해주세요",
                            },
                        ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                onChange={(e)=>{
                                   onChangeNowPassword(e);
                                }}
                               
                                />
                              
                    </Form.Item>

             {/* 비밀번호 , 재확인     */}
             <Form.Item
            label=" 새 비밀번호"
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                pattern:
                  /^[a-zA-Z\\d`~.!@#$%^&*()-_=+]{8,24}$/,
                message:
                  "영문자, 특수문자, 숫자 조합으로 8~26자리  입력해주세요",
              },
             
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                onChangePassword(e);
                
              }}
            />
          </Form.Item>

          <Form.Item
            label="새 비밀번호 재확인"
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            name="passwordCheck"
            rules={[
              {
                required: true,
                message: "Please check your Password2!",
              },
              {
                pattern:
                  /^[a-zA-Z\\d`~.!@#$%^&*()-_=+]{8,24}$/,
                message:
                  "영문자, 특수문자, 숫자 조합으로 8~26자리  입력해주세요",
              },
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                onChangePasswordConfirm(e);
              }}
            />
          </Form.Item>
          <p style={{color: isColor? 'red' : 'blue'}}>
            {passwordConfirmMessage}
          </p>

                    <Form.Item>
                        <Button style={{backgroundColor:'#ff7f27' ,fontWeight:'bold'}} htmlType='submit'
                        onClick={()=>{
                            console.log(isPasswordInDB);
                            console.log(sessionStorage.getItem("password"));
                            if(isPasswordInDB.equals(passwordConfirm)){
                                alert("새 비밀번호가 기존 비밀번호와 일치합니다.")
                            }

                            if(!isPasswordInDB.equals(sessionStorage.getItem("password"))){
                                alert("현재 비밀번호가 일치하지 않습니다.");
                            }
                        }}
                        > 비밀번호 변경</Button>
                    </Form.Item>
                    </Form>

            
        </div>

        </>
    )

}

export default Password;