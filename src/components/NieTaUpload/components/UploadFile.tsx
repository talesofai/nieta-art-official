import { Button, Checkbox, Form, Input, message, Radio, Upload, type UploadProps } from 'antd';
import React, { useState } from 'react';
import UploadIcon from '@assets/icon/upload.svg';
const { Dragger } = Upload;

const { TextArea } = Input;

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const UploadFile = () => {
  const [value, setValue] = useState(1);
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const [form] = Form.useForm();

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: '',
    maxCount: 1,
    async onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        // try {
        //   const response = await fetch(`/v1/oss/sts-upload-token?suffix=${encodeURIComponent('.zip')}`, {
        //     method: 'GET',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
        //   if (!response.ok) {
        //     throw new Error('Failed to fetch upload token');
        //   }
        //   const data = await response.json();
        //   message.success('文件上传成功');
        // } catch (error) {
        //   console.error('上传文件出错:', error);
        //   message.error('文件上传失败');
        // }
      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
      <Form name="control-ref" className="absolute" id="form-ref" layout={formLayout}>
        <Form.Item>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon flex justify-center">
              <img src={UploadIcon.src} id="upload-icon" />
            </p>
            <p className="ant-upload-text" id="upload-text">
              请上传ZIP模型文件
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item name="model_name" label="模型名称" rules={[{ required: true }]}>
          <Input placeholder="请输入模型名称" />
        </Form.Item>
        <Form.Item name="model_type" label="模型类型" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value={1}>Checkpoint</Radio>
            <Radio value={2}>Lora</Radio>
            <Radio value={3}>其他</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="trigger_word" label="激发词(Trigger Word)" rules={[{ required: true }]}>
          <Input placeholder="请输入激发词" />
        </Form.Item>
        <Form.Item name="model_description" label="模型介绍" rules={[{ required: true }]}>
          <TextArea rows={4} placeholder="请介绍你的模型" />
        </Form.Item>
        <Form.Item name="contact" label="联系方式（微信或电话）" rules={[{ required: true }]}>
          <Input placeholder="请输入联系方式" />
        </Form.Item>
        <Form.Item valuePropName="checked">
          <Checkbox>我同意其他用户在本小程序内使用我的模型生成图片</Checkbox>
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" id="upload-btn" htmlType="submit">
            提交模型
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadFile;
