import React from 'react';
import Customer from '../components/Customer';
import images from '../images/kong1.png';



const customer ={

'id' : 1,
'image' : {images},
'name' : '이민준',
'birthday' : '880920',
'gender' :  '남자',


}




class HobbyBoard extends React.Component {
  render() {
    return (
      <div className='Board'>
        
           <title> 게시판 </title>
           <Customer
           id = {customer.id}
           image={customer.image}
           name ={customer.name}
           birthday={customer.birthday}
           gender = {customer.gender} 
           
           
           
           />






      </div>
    );
  }}

export default HobbyBoard;