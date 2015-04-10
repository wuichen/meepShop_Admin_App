import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';


let styles = {
	container: {
		height: '100%',
    	backgroundColor: '#27DCE0',
    	textAlign: 'center'
	},
	logo: {
		width: '100px',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: '20%'
	},
	logoText: {
		color: 'white',
  		fontSize: '33px',
  		marginTop: '20px',
  		marginBottom: '80px'
	},
	usernameField: {
		width: '90%',
		marginBottom: 0,
		height: '40px'
	},
	passwordField: {
		width: '90%',
		height: '40px'
	},
	loginButton: {
		width: '90%',
		color: 'white',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '20px',
		marginBottom: '10px',
		border: '2px solid white',
		padding: '10px'
	},
	forgetButton: {
		color: 'white'
	}


}

let HomePage = React.createClass({
  render () {

  	let loggedIn = false;
  	if(loggedIn){
	    return (
	      <div>
	        <Header text='meepShop' back="false" />
	        <Footer isHomeSelected="true"/>
	      </div>
	    );
	}else{
		return (
	      <div style={styles.container}>
			<img src={require('../../image/logo.png')} style={styles.logo}/>
			<p style={styles.logoText}>meepShop</p>
			<input style={styles.usernameField} type="text" />
			<input style={styles.passwordField} type="text" />
			<div style={styles.loginButton}>LOG IN</div>
			<div style={styles.forgetButton}>Forget password?</div>
	      </div>
	    );
	}
  }
})

export default HomePage;
