import { message } from 'antd';
import UploadFile from './components/UploadFile';
import UploadLink from './components/UploadLink';
import './styles/index.scss';
import React, { useState } from 'react';

const index: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    if (index === 1) {
      setActiveTab(index);
    } else if (index === 0) {
      message.warning('暂不支持上传模型文件');
    }
  };

  return (
    <div className="upload-box">
      <div className="tabbar">
        <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => changeTab(0)}>
          上传模型文件
        </button>
        <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => changeTab(1)}>
          粘贴模型链接
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
