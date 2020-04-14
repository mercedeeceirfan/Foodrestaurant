import React, { Component } from "react";
import './Homepage.css';
import { connect } from 'react-redux';

class Homepage extends Component {
  redirectorderpage(e) {
    this.props.createorder(e)
  }

  render() {
    return (
      <div className="homecontentas">
        <h2>Welcome To Online Orders Now – Online Food Ordering System</h2>
        <p className="content">we are excited to bring you our first post at Online 
          Orders Now, the providers of the most profitable restaurant online ordering 
          software on the market since 2006. In today’s post, we are going to take the time to shine the 
          spotlight on our range of products, services, and features, in addition to telling
          our readers a little bit more about ourselves.</p>
 
        
            <a 
              className="homebutton" 
              onClick={event => this.redirectorderpage(event)} >
               <strong>Click To Order Salad</strong>
            </a>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  };
};
 
export default connect( mapStateToProps )( Homepage );
 