import { Button, Checkbox, Form, Input, Radio, message, type RadioChangeEvent } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const UploadLink = () => {
  const [value, setValue] = useState(1);
  const [isButtonActive, setButtonActive] = useState(false);
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
  const [form] = Form.useForm();

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFieldsChange = (_, allFields) => {
    const allFieldsFilled = allFields.every((field) => !!field.value);
    setButtonActive(allFieldsFilled);
  };

  const onFinish = async (values: any) => {
    values.model_type = values.model_type === 1 ? 'Checkpoint' : values.model_type === 2 ? 'Lora' : 'Other';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    const payload = JSON.stringify({ ...values });

    const loadingMessage = message.loading('Uploading model...', 0);
    // 发请求
    try {
      const response = await fetch('/api/v1/util/upload-model', {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: payload,
      });

      const data = await response.json();
      console.log(data);
      setTimeout(loadingMessage, 0);
      message.success('Upload successful');
    } catch (error) {
      console.error(error);
      setTimeout(loadingMessage, 0);
      message.error('Upload failed');
    }
  };
  return (
    <>
      <Form
        name="control-ref"
        className="absolute"
        id="form-ref2"
        layout={formLayout}
        form={form}
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
      >
        <Form.Item name="model_url">
          <Input placeholder="请粘贴模型链接" />
        </Form.Item>
        <Form.Item name="model_name" label="模型名称" rules={[{ required: true, message: '请输入模型名称' }]}>
          <Input placeholder="请输入模型名称" />
        </Form.Item>
        <Form.Item name="model_type" label="模型类型" rules={[{ required: true, message: '请选择模型类型' }]}>
          <Radio.Group onChange={onChangeRadio} value={value}>
            <Radio value={1}>Checkpoint</Radio>
            <Radio value={2}>Lora</Radio>
            <Radio value={3}>其他</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="trigger_word"
          label="激发词(Trigger Word)"
          rules={[{ required: true, message: '请输入激发词' }]}
        >
          <Input placeholder="请输入激发词" />
        </Form.Item>
        <Form.Item name="model_description" label="模型介绍" rules={[{ required: true, message: '请输入模型介绍' }]}>
          <TextArea rows={4} placeholder="请介绍你的模型" />
        </Form.Item>
        <Form.Item
          name="contact"
          label="联系方式（微信或电话）"
          rules={[{ required: true, message: '请输入联系方式(微信或电话)' }]}
        >
          <Input placeholder="请输入联系方式" />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChangeCheckBox} defaultChecked={true}>
            我同意其他用户在本小程序内使用我的模型生成图片
          </Checkbox>
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            id="upload-btn"
            htmlType="submit"
            style={{
              backgroundColor: isButtonActive ? '#274AFE' : '#262d30',
              color: '#fff',
            }}
            disabled={!isButtonActive}
          >
            提交模型
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UploadLink;
