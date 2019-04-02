import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      (this.props.show || null) && (
        <div className="menu-list">
          <div className="menu-item">Start Radio</div>
          <div className="menu-item">Save to Your Library</div>
          <div className="menu-item">Add to Playlist</div>
          <div className="menu-item">Copy Album Link</div>
        </div>
      )
    );
  }
}

export default Menu;
