import './styles/index.scss';
import UploadIcon from '@assets/icon/upload.svg';
import React, { useEffect, useRef, useState } from 'react';
import type { UploadProps } from 'antd';
import { Form, Input, message, Radio, Upload, Button, Space } from 'antd';
import { Checkbox } from 'antd';
const { Dragger } = Upload;

type LayoutType = Parameters<typeof Form>[0]['layout'];
const { TextArea } = Input;
const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const index: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [form] = Form.useForm();

  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
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
            <Form name="control-ref" className="absolute" id="form-ref" layout={formLayout}>
              <Form.Item name="modelName" label="模型名称" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="modelType" label="模型类型" rules={[{ required: true }]}>
                <Radio.Group>
                  <Radio value={1}>Checkpoint</Radio>
                  <Radio value={2}>Lora</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="triggerWord" label="激发词(Trigger Word)" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="modelIntroduction" label="模型介绍" rules={[{ required: true }]}>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item name="contact" label="联系方式（微信或电话）" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="agree">
                <Checkbox>我同意其他用户在本小程序内使用我的模型生成图片</Checkbox>
              </Form.Item>
              <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary">提交模型</Button>
              </Form.Item>
            </Form>
          </>
        )}
        {activeTab === 1 && (
          <div>
            <Form name="control-ref" className="absolute" id="form-ref2" layout={formLayout}>
              <Form.Item name="link">
                <Input />
              </Form.Item>
              <Form.Item name="modelName" label="模型名称" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="modelType" label="模型类型" rules={[{ required: true }]}>
                <Radio.Group>
                  <Radio value={1}>Checkpoint</Radio>
                  <Radio value={2}>Lora</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="triggerWord" label="激发词(Trigger Word)" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="modelIntroduction" label="模型介绍" rules={[{ required: true }]}>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item name="contact" label="联系方式（微信或电话）" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="agree">
                <Checkbox>我同意其他用户在本小程序内使用我的模型生成图片</Checkbox>
              </Form.Item>
              <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary">提交模型</Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

const UploadFile = () => {
  return (
    <div className="absolute" id="upload-file">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon flex justify-center">
          <img src={UploadIcon.src} id="upload-icon" />
        </p>
        <p className="ant-upload-text" id="upload-text">
          请上传ZIP模型文件
        </p>
      </Dragger>
    </div>
  );
};

export default index;
