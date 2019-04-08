import React from 'react';
import SidebarOptions from './SidebarOptions.jsx';
import SidebarRecents from './SidebarRecents.jsx';
import './Album.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SidebarOptions />
        <span className="RecentlyPlayed">Recently Played</span>
        <SidebarRecents />
        <span className="Install">Install App</span>
        <span className="User">User</span>
      </div>
    );
  }
}
