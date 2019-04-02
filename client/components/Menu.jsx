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
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">Start Radio</li>
            <li className="menu-item">Save to Your Library</li>
            <li className="menu-item">Add to Playlist</li>
            <li className="menu-item">Copy Album Link</li>
          </ul>
        </div>
      )
    );
  }
}

export default Menu;
