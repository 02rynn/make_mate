// import Post from '../components/Post.js';
// import { useState } from 'react';
// import DaumPostcode from "react-daum-postcode";
// import css from'../css/Post.css';

// function Address(){
//     const datailAddressInput = (e) => {
//         setDetailAddress(e.target.value)
//     }
    
//     const handleInput = (e) => {
//         setAddress({
//             ...address,
//             [e.target.name]:e.target.value,
//         })
//     }
    
//     const handleComplete = (data) => {
//         setPopup(!popup);
//     }
    
    
//     // const [enroll_company, setEnroll_company] = useState({
//     //     address:'',
//     // });

//     // const [popup, setPopup] = useState(false);
    
//     // const handleInput = (e) => {
//     //     setEnroll_company({
//     //         ...enroll_company,
//     //         [e.target.name]:e.target.value,
//     //     })
//     // }
    
//     // const handleComplete = (data) => {
//     //     setPopup(!popup);
//     // }
        
//     return(
//     // <div className="address_search" >address
//     //     <input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
//     //     <button onClick={handleComplete}>우편번호 찾기</button>
//     //     {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
//     // </div>

//     <div  className="form-el">
//     <label htmlFor="birth">Address</label> <br />
//     <input type="text" id="postcode" placeholder="우편번호" />
//     <input
//       type="button"
//       onClick={handleComplete}
//       onChange={handleInput}
//       value="우편번호 찾기"
//     />
//     <br />
//     <input type="text" id="address" placeholder="주소" />
//     <br />
//     <input type="text" id="detailAddress" onChange={datailAddressInput} placeholder="상세주소" />
//     <input type="text" id="extraAddress" placeholder="참고항목" />
//     </div> 
//     {popup && <Post company={address} setcompany={setAddress}></Post>}

//     );


// }

// export default Address;