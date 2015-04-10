import React from 'react';
import LoginAction from '../../actions/LoginAction';
import loginStore from '../../stores/LoginStore';

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
	loginButtonInvalid: {
		width: '90%',
		color: 'white',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '20px',
		marginBottom: '10px',
		border: '2px solid white',
		padding: '10px',
		opacity: 0.3
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
	},
	errorMessage: {
		position: 'absolute',
		color: 'white',
		bottom: 0,
		width: '100%',
		backgroundColor: 'red'
	}


}

let LoginPage = React.createClass({
  getInitialState() {
  	return{
  		username: '',
  		password: '',
  		usernameTyped: false,
  		passwordTyped: false,
  		loginFailed: false
  	}
  },
  usernameChanged(event) {
  	this.setState({
  		username: event.target.value
  	});
  	if(this.state.loginFailed){
  		this.setState({
  			loginFailed: false
  		})
  	}
  },
  passwordChanged(event) {
  	this.setState({
  		password: event.target.value
  	})
  	if(this.state.loginFailed){
  		this.setState({
  			loginFailed: false
  		})
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
      loginFailed: loginStore.getloginFailed(),
    });  

  },
  login() {
  	LoginAction.start({
      username: this.state.username,
      password: this.state.password
    });
  }
  ,render () {
		var loginButton;
		if(!this.state.username || !this.state.password){
			loginButton = <div style={styles.loginButtonInvalid}>LOG IN</div>

		}else{
			loginButton = <div onClick={this.login} style={styles.loginButton}>LOG IN</div>	
		}

		var loginFailedMessage;
		if(this.state.loginFailed){
			loginFailedMessage = <div style={styles.errorMessage}>Invalid username or password</div>
		}else{
			loginFailedMessage = <span></span>
		}
		return (

	      <div style={styles.container}>
			<img src={require('../../image/logo.png')} style={styles.logo}/>
			<p style={styles.logoText}>meepShop</p>
			<input style={styles.usernameField} type="text" value={this.state.username} onChange={this.usernameChanged}/>
			<input style={styles.passwordField} type="password" value={this.state.password} onChange={this.passwordChanged}/>
			{loginButton}
			<div style={styles.forgetButton}>Forget password?</div>
	      	{loginFailedMessage}
	      </div>

	    );
  }
})

export default LoginPage;