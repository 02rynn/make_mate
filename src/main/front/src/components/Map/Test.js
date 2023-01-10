// import MapShow from "./MapShow";
// import MapSearch from "./MapSearch";
// import TestComponent from "./TestComponent";

// function test () {
//     return(
//         <div>
//             <MapSearch/>
//             <br/>
//             <MapShow/>
//             <br/>
//             <TestComponent/>
//         </div>
//     )
// }
// export default test;

import React from 'react';
import SingleTweet from './SingleTweet';
import css from "../../css/Section.css";
import css12 from "../../css/comment.css";
import {useSelector, useDispatch} from "react-redux";
const loginId_session = sessionStorage.getItem("loginId");

class Test extends React.Component{
 constructor(props){
    super(props);
    this.state = {
        tweets: [
            {
                id:1,
                writer: "정코딩",
                date: "2020-10-21",
                content: "안녕 리액트"
            },{
                id:2,
                writer: "김코딩",
                date: "2020-10-24",
                content: "안녕 리액트222"
            }
        ]
    }
    this.addTweet = this.addTweet.bind(this);
 }

 addTweet(){
    let value = document.querySelector('#new-tweet-content').value;
    this.setState({tweets: [...this.state.tweets,{
        id:this.state.tweets.length +1,
        writer:'정코딩',
        date: new Date().toISOString().slice(0,10),
        content: value
    }]})
 }

 render(){
    return (
        <div id="root">
            <div>
                
                <div id='writing-area' style={{marginLeft:'40px',display:'flex' ,alignItems:'center' ,justifyContent:'center'}}>
                    <textarea className='text_comment' id="new-tweet-content"></textarea>
                    <button id='submit' className='logout' onClick={this.addTweet} style={{width:'100px'}}> 댓글입력</button>
                </div>
                <ul id='tweets'>
                    {
                        this.state.tweets.map(tweet => {
                            return <SingleTweet tweet={tweet}/>
                        })
                    }

                </ul>

            </div>

        </div>
    )
 }
}



export default Test;