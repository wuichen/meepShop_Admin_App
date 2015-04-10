import React from 'react';
import Header from '../Header.react';
import Footer from '../Footer.react';
import LoginAction from '../../actions/LoginAction';
import loginStore from '../../stores/LoginStore';
import LoginPage from './LoginPage.react'
import Card from './Card.react';
import AppListItem from './AppListItem.react';

let styles = {
	statisticsSection: {
		backgroundColor: '#EEEEEE',
		padding: 0,
		
	},
	titleStats: {
		marginLeft: '10px',
		marginTop: '10px' 
	},
	titleFeature:{
		margin: '10px'
	},
	ul: {
		margin: 0
	}
}


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
	        <div className="content">
	        <ul style={styles.ul} className="table-view">
			  <li className="table-view-cell" style={styles.statisticsSection}>
			  		<p style={styles.titleStats}>Statistics</p>
				  	<Card content="$ 58k" description="Monthly Revenue" color="#86CF6E"/>
				  	<Card content="$ 3.2k" description="Daily Revenue" color="#95D680"/>
				  	<Card content="800" description="Monthly New Members" color="#E8694C"/>
				  	<Card content="25" description="Daily New Members" color="#F08A73"/>
				  	<p style={styles.titleFeature}>Feature Apps</p>
			  </li>
			  <AppListItem appImage={require('../../image/meepbee.png')} appDescription="The easiest way to sell stuff" appName="meepBee" />
			</ul>
			</div>
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
