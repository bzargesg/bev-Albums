import React from 'react';

const SidebarOptions = () => {
  return (
    <div className="SidebarOptionsContainer">
      <div className="SidebarOptions" data-test="Home">
        <img className="Home iconImg" alt="Home" src="images/home.png" />
        <span className="optionText imgText">Home</span>
      </div>
      <div className="SidebarOptions" data-test="Search">
        <img className="Search iconImg" alt="Search" src="images/search.png" />
        <span className="optionText imgText">Search</span>
      </div>
      <div className="SidebarOptions" data-test="Your Library">
        <img className="Library iconImg" alt="Library" src="images/library.png" />
        <span className="optionText imgText">Your Library</span>
      </div>
    </div>
  );
};
export default SidebarOptions;
