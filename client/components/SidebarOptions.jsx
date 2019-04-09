import React from 'react';

const SidebarOptions = () => {
  return (
    <div className="SidebarOptionsContainer">
      <div className="SidebarOptions" data-test="Home">
        <img className="Home" alt="Home" src="images/home.png" />
        <span className="optionText">Home</span>
      </div>
      <div className="SidebarOptions" data-test="Search">
        <img className="Search" alt="Search" src="images/search.png" />
        <span className="optionText">Search</span>
      </div>
      <div className="SidebarOptions" data-test="Your Library">
        <img className="Library" alt="Library" src="images/library.png" />
        <span className="optionText">Your Library</span>
      </div>
    </div>
  );
};
export default SidebarOptions;
