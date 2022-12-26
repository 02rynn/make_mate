/* eslint-disable */
import React, {useEffect} from "react";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  DatePicker,
  Radio,
  message,
  Upload

} from "antd";
import logo from "../images/logoSimple.jpg";
import Modal from "react-modal";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Profile from "../components/ProfileImgContainer";



function Signup() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalIsOpenSignUp, setModalIsOpenSignUp] = useState(false);
  const [modalmodal, setmodalmodal] = useState(false);
  const [antdmodal, setantdmodal] = useState(false);
  const showantdmodal=()=>{setantdmodal(true)}

  //회원가입 초기값
  const [loginId, setLoginId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  
  //유효성검사

  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // function sendForm() {
  //   console.log("버튼 눌림");
  //   axios
  //     .post("http://localhost:3000/signup", {content: message})
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // }

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

  useEffect(() => {
    if (passwordConfirm == "") {
      console.log("불일치");
      setPasswordConfirmMessage("");
    } else if (password == passwordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치합니다");

      console.log("일치");
    } else if (password !== passwordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
    }
    console.log(passwordConfirm);
  }, [onChangePasswordConfirm, onChangePassword]);



  const onFinish = (values) => {
    console.log('onfinish');
    console.log("Received values of form: ", values);
    console.log(fileImage);

    const formData = new FormData();
    formData.append("file", fileImage);
    formData.append('values', new Blob([JSON.stringify(values)], {
      type: "application/json"
  }));
    console.log(formData);

    

    // axios
    //   // .post("http://localhost:8080/signup", {values, fileImage} , {
    //   .post("http://localhost:8080/signup", formData , {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    axios({
      method:"post",
      url:"http://localhost:8080/signup",
      data: formData,
      headers:{'Content-Type': 'multipart/form-data'}
    })
      .catch((e) => {
        console.error(e.response.data);
      })
      .then((response) => {
        console.log(response);
          //setmodalmodal(true);
            alert("회원가입을 축하합니다");
          console.log(modalmodal);
         
     //       navigate('/login');
            
      });
 
  };


  //성별 라디오버튼
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  //프로필 사진 업로드
  const [fileImage, setFileImage] = useState(null);

    // 파일 저장
    const saveFileImage = (e) => {
        // setFileImage(URL.createObjectURL(e.target.files[0]));
        setFileImage(e.target.files[0]);
        console.log(e.target.files[0]);//파일 정보 
        console.log(URL.createObjectURL(e.target.files[0])); //경로(리액트 서버)
        const formData = new FormData()
        formData.append('files',fileImage)
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        
        setFileImage("");
    };
    
  
  return (

    <div>
      <Card
        style={{
          width: "40%",
          margin: "0 auto",
          marginTop: "5%",
          backgroundColor: "lightgray",
          opacity: "0.8",
          alignItems: "center",
        }}>
        <Form
          action="/login"
          method="post"
          id="normal_login"
          name="normal_login"
          className="login-form"
          encType="multipart/form-data"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}>
          <div>
            <img src={logo} alt="" />
            <br />
            <br />
            <br />
          </div>

          {/* 이메일 주소 */}
          <Form.Item
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}>
            <Input prefix={<MailOutlined />} placeholder="email" />
          </Form.Item>

          {/* 로그인 아이디 , 중복확인 */}
          <Form.Item
            label="아이디"
            labelCol={{span: 24}}
            wrapperCol={{span: 23}}
            name="loginId"
            rules={[
              {
                required: true,
                message: "Please input your ID!",
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
                message: "아이디는 영어 대문자, 숫자 조합으로 6글자 이상입니다",
              },
              {
                max: 12,
                message: "아이디는 최대 12글자 입니다",
              },
            ]}>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="UserId"
                style={{justifyContent: "space-between"}}
              />
              <Button
                type="primary"
                htmlType="button"
                className="ld-check-button"
                onClick={()=>{setModalIsOpen(true)}}
                style={{backgroundColor: "#ff7f27", marginLeft: "10px"}}>
                중복확인
              </Button>
            </div>
          </Form.Item>
          <Modal isOpen={modalIsOpen} onRequestClose={()=>{setModalIsOpen(false)}}
           style={{ content:{width:"23%" , margin:'0 auto', height:'30%' ,marginTop:'20%', textAlign:'center'} ,
           overlay:{borderRadius:'15%',margin:'0 auto'}}}>
            중복확인 들갑니다
            {/* <button onClick={setModalIsOpen(false)}>닫기</button> */}
          </Modal>

          {/* 비밀번호 , 재확인     */}
          <Form.Item
            label="비밀번호"
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요",
              },
              //  , {
              //     min:8,
              //     message: '영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요'
              // }
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
            label="비밀번호 재확인"
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
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                // min: 8,
                message:
                  "영문자, 특수문자, 숫자 조합으로 8자리 이상 입력해주세요",
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
          <p style={{fontSize: "12px", color: "red"}}>
            {passwordConfirmMessage}
          </p>

          {/* 사용자 이름 */}
          <Form.Item
            label="이름"
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
              {
                max: 5,
                message: "이름은  5글자 이하 입니다",
              },
              {
                min: 2,
                message: "이름은 2글자  입니다",
               }
               //,{
              //   pattern:/ ^[a-zA-Zㄱ-ㅎ가-힣]/,
              //   message: "이름은 문자만 가능합니다."
              // }
            ]}>
            <Input type="text" placeholder="이름" />
          </Form.Item>

          {/* 생년월일 */}
          <Form.Item
            label="생년월일"
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            name="birthDate"
            rules={[
              {
                required: true,
                message: "Please choose your birth!",
              },
            ]}>
            <DatePicker format="YYYY-MM-DD" style={{width: "100%"}} />
          </Form.Item>

          {/* 성별 */}
          <Form.Item
            label="성별"
            name="gender"
            labelCol={{span: 24}}
            wrapperCol={{span: 10}}
            rules={[
              {
                required: true,
                message: "Please choose your sex!",
              },
            ]}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>남</Radio>
              <Radio value={2}>여</Radio>
            </Radio.Group>
          </Form.Item>

          {/*핸드폰 번호 */}
          <Form.Item
            name="phoneNum"
            labelCol={{span: 24}}
            wrapperCol={{span:24}}
            label="휴대폰 번호"
            rules={[{ 
                required: true, 
                message: "'-' 없이 숫자만 입력해주세요",
                pattern: new RegExp(/^[0-9]+$/)
            }]}
        >
            <Input
                placeholder="01012345678"
                maxLength={11}
            />
        </Form.Item>


          {/*프로필사진  */}

         <Form.Item
          label="프로필 사진"
          name="profile_path"
          labelCol={{span: 24}}
          wrapperCol={{span: 24}}
         >
           <div>
                <p style={{margin: '20px 0px'}}>이미지 미리보기</p>
        <table>
            <tbody>
            <tr>
                <th></th>
                <td>
                <div>
                    {fileImage && ( //이미지 미리보기 
                    <img 
                        alt="sample"
                        src={fileImage}
                        style={{ margin: "auto" }}
                    />
                    )}
                    <div
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <input //input 버튼 
                        id="profile"
                        name="imgUpload"
                        type="file"
                        accept="image/*"
                        //ref={fileInputRef}
                        onChange={saveFileImage}
                    />

                    <button
                        style={{
                        backgroundColor: "gray",
                        color: "white",
                        width: "55px",
                        height: "30px",
                        cursor: "pointer",
                        borderRadius:'10px',
                        }}
                        onClick={() => deleteFileImage()}
                    >
                        삭제
                    </button>
                    </div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
            
        </div>     
 
        
        
         </Form.Item>
           

            {/*가입하기 버튼 */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{backgroundColor: "#ff7f27"}}
              onClick={(e) => {
              
               
                //validateFields();
                //value 값 렌더링 되도록 넣어줘야하는디
                //value 값이 변하면 ->
                // let asd = document.getElementById("postcode").value;
                // let asd2 = document.getElementById("detailAddress").value;
                // setZipcode(asd);
                // setAddress(asd2);
               // setAddress(document.getElementById("detailAddress").value);
                //setZipcode(document.getElementById("postcode").value);
                //console.log(zipcode);
                //console.log(address);
                // validateFields();
                // navigate("/login");
                // setmodalmodal(true);
                console.log('before submit');
                console.log(fileImage);

               
              }}>
              Sign up
            </Button>
            </Form.Item>
        

        </Form>
      </Card>
    </div>
  );
}

export default Signup;
