import css from '../css/MyPage.css';
import css2 from '../css/Section.css';



function ReviewBullet(){

    return(
        <>
        <div className='review_container'>
        <div className="section_container_small">
            <p className='section_title'> 전체후기</p> 
            {/* 이 아래 article box를 반복문 돌리면 될듯  */}
            <div className="article_box"> 
                <p> 작성자 : 시간 약속을 잘지켜요</p>
            </div>
        </div>

        <div className="section_container_small">
            <p className='section_title'> 작성한 후기</p>
            <div className="article_box"></div>
        </div>
        
        <div className="section_container_small">
            <p className='section_title'> 받은 메이트 후기</p>
            <div className="article_box"></div>
        </div>
        </div>
        
        </>
    )
}

export default ReviewBullet;