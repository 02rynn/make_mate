import MJBoard from "./MJBoard";
import {useState, useEffect} from "react";
import axios from "axios";


function BoardList() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
    
    
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])
    
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/category/ss")
            .then((response) => {
            setCategory(response.data);
            })
            .catch((error) => console.log(error));
        }, []);



    return(
        <div>
            {category.map((data, i) => {
                return (
                        <div>
                            <MJBoard
                                name={data.categoryName}
                                code={data.categoryCode}>
                            </MJBoard>
                        </div>
                        );
                    })}

                <div className="scroll__container">
                    <button id="top" 
                            onClick={scrollToTop} 
                            type="button" >
                                Top
                    </button>
                </div>
        </div>
    )
}
export default BoardList;