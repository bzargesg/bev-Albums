import React from 'react';

const SidebarRecents = props => {
  return (
    <div className="SidebarRecents" data-test="SidebarRecents">
      {props.recents.map(element => {
        return (
          <div className="recentElement">
            <div className={element.name} data-test={'recent ' + element.type}>
              {element.name}
            </div>
            <div className="type">{element.type}</div>
          </div>
        );
      })}
    </div>
  );
};
export default SidebarRecents;
