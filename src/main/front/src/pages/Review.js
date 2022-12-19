import ReactStars from "react-rating-stars-component";
import React from 'react';
import {Fastar} from "react-icons/fa";


function Review() {
    
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    // };
    
    const colors= {
        orange: "#FFBA5A",
        grey:"#a9a9a9"
    }


    return(
        <div> 
            {/* <div>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    emptyIcon activeColor="#1E90FF" />
            </div>   */}
            <div style={styles.container}>
                <h2>리뷰 페이지</h2>
            </div>

        
        </div>
    )
}

const styles = {
    container: {
        display:"flex",
        flexDirection:"column",
        aliItems:"center",
    }
}

export default Review;