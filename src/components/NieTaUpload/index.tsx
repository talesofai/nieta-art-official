import './styles/index.scss';
import React, { useState } from 'react';

export default function index() {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tabbar">
        <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => changeTab(0)}>
          Tab 1
        </button>
        <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => changeTab(1)}>
          Tab 2
        </button>
      </div>

      {/* <div className="content">
        {activeTab === 0 && <div>Content 1</div>}
        {activeTab === 1 && <div>Content 2</div>}
      </div> */}
    </>
  );
}
