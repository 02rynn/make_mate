import css from '../css/MyPage.css';
import logo from '../images/logoSimple.jpg';

function MyPage () {
    return(
      
        <div>
            <div className="myPage_container" style={{width:'60%', marginLeft:'33%', marginTop:'50px'}}>
            <section >
                <div className='myInfo section' style={{display:"flex",flexDirection:'row' ,width:'100%'}}>
                <h3 style={{width:'80%' ,textAlign:'left' ,marginLeft:'10px', fontWeight:'bold'}}>내 정보</h3>
                <button className="logout">로그아웃</button>
                </div>
                <div className='profile' >
                    <div className='profileImg'>
                        <img src={logo} style={{marginLeft:'10px'}}/>
                    </div>
                    <div className='userInfo'>
                    <h6 style={{fontWeight:'bold'}}>flsgp123</h6>
                    <p style={{marginLeft:'5px'}}>정혜린/닉네임</p>
                    </div>
                </div>
            </section>

            </div>
        </div>
    )
}


export default MyPage;