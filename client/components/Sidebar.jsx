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
      <div className="Sidebar" data-test="Sidebar">
        <h3 className="SidebarHeader" data-test="SidebarHeader">
          <img className="Logo" alt="Spoopify Logo" src="images/spotifly.png" />{' '}
          <span className="logoTitle imgText">Spot-a-fly</span>
        </h3>
        <SidebarOptions />
        <div className="RecentlyPlayed">Recently Played</div>
        <SidebarRecents />
        <div className="Install">
          <span className="InstallText">Install App</span>
        </div>
        <div className="User">User</div>
      </div>
    );
  }
}
export default Sidebar;
