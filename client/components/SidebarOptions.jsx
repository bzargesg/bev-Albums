import React from 'react';

const SidebarOptions = () => {
  return (
    <div className="SidebarOptionsContainer">
      <div className="Home SidebarOptions" data-test="Home">
        <img className="Home" alt="Home" src="images/home.png" /> Home
      </div>
      <div className="Search SidebarOptions" data-test="Search">
        <img className="Search" alt="Search" src="images/search.png" /> Search
      </div>
      <div className="Your Library SidebarOptions" data-test="Your Library">
        <img className="Library" alt="Library" src="images/library.png" />
        Your Library
      </div>
    </div>
  );
};
export default SidebarOptions;
