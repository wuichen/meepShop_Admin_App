import React from 'react';

let styles = {
	cardContainer: {
		display: 'inline-block',
		width: '50%',
		textAlign: 'center',
	},
	card: {
		backgroundColor: 'white',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '10px',
		marginBottom: '10px'
	},
	content: {
		
		fontSize: '50px',
		height: '100px',
		lineHeight: '100px'
	}

}

let Card = React.createClass({
  render: function () {
    return (
    	<div style={styles.cardContainer}>
    		<div style={styles.card}>
	    		<div style={styles.content}>
	    			{this.props.content}
	    		</div>
	    		<div style={{
	    			fontSize: '12px',
					color: 'white',
					height: '40px',
					lineHeight: '40px',
					backgroundColor: this.props.color
				}}>
	    			{this.props.description}
	    		</div>
	    	</div>
    	</div>
    )
  }
})

export default Card;
