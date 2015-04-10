import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';
import LoginAction from '../../actions/LoginAction';
import loginStore from '../../stores/LoginStore';
import LoginPage from './LoginPage.react'

let HomePage = React.createClass({
  getInitialState() {
  	return{
  		loggedIn: loginStore.getloggedIn()
  	}
  },
  componentDidMount() {
    loginStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    loginStore.removeChangeListener(this._onChange);
  },
  _onChange() {
    this.setState({
      loggedIn: loginStore.getloggedIn(),
    });  
  }
  ,render () {
  	if(this.state.loggedIn){
	    return (
	      <div>
	        <Header text='meepShop' back="false" />
	        <Footer isHomeSelected="true"/>
	      </div>
	    );
	}else{
		return(
			<LoginPage />
		)
	}
  }
})

export default HomePage;
