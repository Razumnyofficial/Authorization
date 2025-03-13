import React from "react";

import { Button, Checkbox, Form, Input, Flex } from "antd";

import styles from "./LoginComponent.module.css";
import "../../../src/global.css";
const LoginComponent: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      layout="vertical"
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 420, marginTop: 50 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        // name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Password"
        // name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox
              style={{
                color: "#A1A1A1",
                fontSize: "12px",
              }}
            >
              Remember me
            </Checkbox>
          </Form.Item>
          <a className={styles.forgot} href="">
            Forgot password
          </a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button
          style={{
            color: "white",
            backgroundColor: "#7f265b",
            width: "420px",
            height: "50px",
          }}
          block
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
