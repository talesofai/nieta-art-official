import UploadFile from './components/UploadFile';
import UploadLink from './components/UploadLink';
import './styles/index.scss';
import React, { useState } from 'react';

const index: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="upload-box">
      <div className="tabbar">
        <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => changeTab(0)}>
          上传模型文件(Disabled)
        </button>
        <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => changeTab(1)}>
          粘贴模型链接(Beta)
        </button>
      </div>

      <div className="content">
        {activeTab === 0 && (
          <>
            <UploadFile />
          </>
        )}
        {activeTab === 1 && (
          <>
            <UploadLink />
          </>
        )}
      </div>
    </div>
  );
};

export default index;
