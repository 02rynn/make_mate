import "../App.css";
import axios from "axios";
import {useState, useEffect} from "react";
import SockJS from "sockjs-client";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function MsgModal(props) {
  const user = sessionStorage.getItem("loginId");
  let [message, setMsgStr] = useState("");
  let [socket, setSocket] = useState(null);
  // var socket = null;
  console.log(props.tab);

  return (
    <div className="msgModal" style={{backgroundColor: "rgba(1,1,1,0.5)"}}>
      <div>
        <form
          className="msgModalBox"
          action="/msg"
          method="post"
          name="msgModalBox"
          style={{border:'1px solid #001529',borderRadius:'5%'}}
          >
            <Card style={{border:'1px solid #001529'}}>
              <Card.Title style={{fontWeight:'700', marginTop:'4%'}}> 
                쪽지 보내기
              </Card.Title>
              <Card.Body>
                <input type="text" 
                        id="reciver_id" 
                        value={props.tab}
                        style={{textAlign:'center'}}
                />
                <textarea
                    style={{width:'100%', 
                            marginLeft:"0",
                            border:'1px solid #001529',
                            minHeight:'130px'
                          }}    
                    name="message"
                    className="message"
                    placeholder="내용을 입력해주세요."
                    id="msgbox"
                    value={props.userData.message}
                    onChange={props.handleMessage}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        // axios
                        //   .post("/msg", {
                        //     message,
                        //   })
                        //   .then(() => {
                        //     console.log("success");
                        //   })
                        //   .catch(() => {
                        //     console.log("fail");
                        props.sendPrivateValue();

                        props.setModal(false);
                      }

                      console.log(e.target.value);
                      // console.log(e);
                    }}>
                  </textarea>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-primary"
                  style={{backgroundColor:' #FF7F27',
                          color:'white', 
                          border:'1px solid  #FF7F27',
                          marginLeft:'53%'
                        }}
                  value="전송"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    //전송
                    // axios
                    //   .post("/msg", {
                    //     message,
                    //   })
                    //   .then(() => {
                    //     console.log("success");
                    //   })
                    //   .catch(() => {
                    //     console.log("fail");
                    //   });
                    props.sendPrivateValue();

                    props.setModal(false);

                    // document.form.msgModalBox.submit();
                }}>
                  전송
                </Button>
                <Button variant="outline-primary"
                  style={{
                    float: "right",
                    cursor: "pointer",
                    backgroundColor:'#001529',
                    color:'white', 
                    border:'1px solid #001529'
                  }}
                    onClick={() => {
                    props.setModal(false);
                  }}
                >
                  닫기
                </Button>                
              </Card.Footer>
            </Card>
        </form>{" "}
      </div>
    </div>
  );
}
export default MsgModal;
