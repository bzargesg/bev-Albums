import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      left: this.props.left + 'px',
      top: this.props.top + 'px',
    };
  }
  styleConstr() {
    this.style = {
      left: this.props.left + 'px',
      top: this.props.top + 'px',
    };
  }
  render() {
    this.styleConstr();
    return (
      (this.props.show || null) && (
        <div style={this.style} className="menu-list" data-test="menuContainer">
          <div className="menu-item" data-test="startRadio">
            Start Radio
          </div>
          <div className="menu-item" data-test="saveLib">
            Save to Your Library
          </div>
          <div className="menu-item" data-test="addPlayl">
            Add to Playlist
          </div>
          <div className="menu-item" data-test="copyLink">
            Copy Album Link
          </div>
        </div>
      )
    );
  }
}

export default Menu;
