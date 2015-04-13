import React from 'react';
import SearchModeStore from '../stores/SearchModeStore';
import SearchModeAction from '../actions/SearchModeAction';

let styles = {
	searchModeOnHeader: {
		backgroundColor: '#27DCE0',
    height: '90px'
	},
  searchModeOffHeader: {
    backgroundColor: '#27DCE0',
    height: '44px'
  },
	headerTitle: {
		color: 'white'
	},
  searchIcon: {
    float: 'right',
    color: 'white'
  },
  searchInput: {
    width: '75%',
    height: '27px',
    marginTop: '10px'
  },
  searchButton: {
    display: 'inline-block',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: '#15B1B4',
    height: '27px'
  },
  searchIconInside: {
    paddingTop: '0px',
    paddingBottom: '0px',
    color: 'white'
  },
  closeIconInside: {
    marginLeft: '15px'
  },
  searchFilter: {
    display: 'inline-block',
    border: '1px solid white',
    fontSize: '13px',
    color: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginRight: '10px'
  }

}

let SearchBarMode = React.createClass({
  closeSearchMode () {
    SearchModeAction.change({
      action: 'close'
    });
  },

  render () {
    return(
      <div>
        <input style={styles.searchInput} type="text"/>
        <div style={styles.searchButton}>
          <div style={styles.searchIconInside} className="icon icon-search"></div>
        </div>
        <div onClick={this.closeSearchMode} style={styles.closeIconInside} className="icon icon-close"></div>
        <div style={styles.searchFilter}>Last 3 months</div>
        <div style={styles.searchFilter}>Paid</div>
        <div style={styles.searchFilter}>Processing</div>
      </div>
    );
  }
})

let Header = React.createClass({
  getInitialState () {
    return({
      searchMode : SearchModeStore.getsearchMode()
    });
  },
  openSearchMode () {
    SearchModeAction.change({
      action: 'open'
    });
  },
  componentDidMount() {
    SearchModeStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    SearchModeStore.removeChangeListener(this._onChange);
  },
  _onChange() {
    this.setState({
      searchMode: SearchModeStore.getsearchMode()
    })
        console.log(this.state.searchMode);

  },
  render () {
    var title;
    var searchIcon; 
    var searchModeBar;
    var backButton;


    if(this.state.searchMode){
      searchModeBar = <SearchBarMode/>
    }else{
      if(this.props.text === 'Order'){
        searchIcon = <div onClick={this.openSearchMode} className="icon icon-search" style={styles.searchIcon}></div>
      }
      backButton = (<a href={this.props.prepage} className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>)
      title = (<h1 style={styles.headerTitle} className="title">{this.props.text}</h1>)
    }

    return (
      <header style={this.state.searchMode ? styles.searchModeOnHeader : styles.searchModeOffHeader} className="bar bar-nav">
        {title}
        {backButton}
        {searchIcon}
        {searchModeBar}
      </header>
    );
  }
})

export default Header;
