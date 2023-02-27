import React from "react";
import { Button, Checkbox, Form, Input,Space,message } from "antd";
import { Divider } from 'antd';
import "../index.css";
import axios from "axios";
import {useHistory} from 'react-router-dom';


const Register = (props) => {
	let history = useHistory()
	


  const onFinish = (values) => {
    console.log("Success:", values);
		if(values != null){
			axios.post("http://localhost:8000/api/register/", values,{
				headers: {
					'Content-Type': 'application/json',
				}
			}).then(() => {
				console.log("Kayıt başarılı!");
				// alert
				message.success('Kayıt başarılı!');
				alert("Kayıt başarılı!");
				history.push("/login");
			});
		} else {
			message.error('Kayıt başarısız!');
			console.log("Kayıt başarısız!");
		}
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
		message.error('Kayıt başarısız!');
		alert("Kayıt başarısız!");
  };

  return (
    <>
    <Space direction="horizontal" size="large"/>
    <Space direction="vertical" size="large"/>
    <Divider orientation="center">Kayıt Ol</Divider>
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Lütfen kullanıcı adınızı giriniz!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
            {
                required: true,
                message: "Lütfen email adresinizi giriniz!",
            },
        ]}
        >
        <Input />
        </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Lütfen şifrenizi giriniz!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Beni Hatırla</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Kayıt Ol
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Register;
