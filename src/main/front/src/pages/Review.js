import React from 'react';
import { FaStar } from "react-icons/fa";

const colors= {
    orange: "#FFBA5A",
    grey:"#a9a9a9"
}

function Review() {
    const selectComponent = {
        list: [
          {name1: "second", time: "22/12/18 23:12"},
          {name1: "third", time: "22/12/18 18:12"},
          {name1: "fourth", time: "22/12/18 34:12"},
          {name1: "fifasdth1", time: "22/12/18 03:12"},
          {name1: "fifasdasth2", time: "22/12/18 04:12"},
          {name1: "fifthasd3", time: "22/12/18 05:12"},
          {name1: "fiftdh4", time: "22/12/18 14:12"},
          {name1: "fiftash5", time: "22/12/18 09:12"},
          {name1: "fiftdasdh6", time: "22/12/18 11:12"},
          {name1: "fifasdth7", time: "22/12/18 23:32"},
          {name1: "fiftasdh8", time: "22/12/18 22:12"},
        ],
      };
    

    
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver =() => {
        setHoverValue(undefined)
    }

    return(

        <div> 
            <div className='reviewContainer' style={styles.container}>
                <h2>리뷰 페이지</h2>
                <div style={styles.stars}>
                    {stars.map((_,index)=>{
                        return(
                            <FaStar
                                key={index}
                                size={24}
                                style={{
                                    marginRight:10,
                                    cursor:"pointer"
                                }}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                onClick={() => handleClick(index + 1)}
                                
                            />
                        )
                    })}
                </div>
                <textarea
                    placeholder='리뷰를 남겨주세요.'
                    style={styles.textarea}
                />
                <button style={styles.button}>Submit</button>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display:"flex",
        flexDirection:"column",
        aliItems:"center"
        
    },
    textarea: {
        border:'1px solid #a9a9a9',
        borderRadius: 5,
        width: 300,
        margin: "20px 0",
        minHeight: 100,
        padding: 10
    },
    button: {
        border:'1px solid #a9a9a9',
        borderRadius: 5,
        width: 300,
        padding: 10
    }
}

export default Review;