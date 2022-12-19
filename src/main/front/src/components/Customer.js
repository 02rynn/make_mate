import React  from 'react';




export class Customer extends React.Component {
  render() {
    return (
      <div>
        
      <CustomerProfile id={this.props.id} image ={this.props.image} name={this.props.name}/>
      <Customerinfo birthday={this.props.birthday} gender={this.props.gender}/>
      </div>

   

    )
  }
}

class CustomerProfile extends React.Component{

    render() {
        return (
            <div>

           <image src ={this.props.image}></image>
           <h2>{this.props.name}({this.props.id})</h2>


            </div>
        
        
        );}
        
}


class Customerinfo extends React.Component{

    render() {
        return (
            <div>
<p>{this.props.birthday}</p>
<p>{this.props.gender}</p>
  


            </div>
        
        
        );}
        
}


export default Customer;