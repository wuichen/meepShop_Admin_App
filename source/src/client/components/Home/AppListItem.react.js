import React from 'react';

let styles={
  appImage: {
    width: '40px'
  }
}

let AppListItem = React.createClass({
  render: function () {
    return (
      <li className="table-view-cell media">
          <a className="navigate-right">
            <img style={styles.appImage} className="media-object pull-left" src={this.props.appImage} />
            <div className="media-body">
              {this.props.appName}
              <p>{this.props.appDescription}</p>
            </div>
          </a>
        </li>
    )
  }
})

export default AppListItem;
