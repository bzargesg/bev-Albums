import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      (this.props.show || null) && (
        <div className="menu-list" data-test="menuContainer">
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
