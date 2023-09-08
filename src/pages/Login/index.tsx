import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { useForm, Controller } from "react-hook-form";

import { useAuth } from "../../context/AuthContext";

import "./styles.css";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { login, checkAuthentication, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginForm>();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const onSubmit = (data: LoginForm) => {
    login(data.username, data.password, rememberMe)
      .then((response) => {
        if (response.success) {
          notification.success({
            message: "Login Successful",
            description: "You have successfully logged in.",
          });
        } else {
          notification.error({
            message: "Login Failed",
            description: response.errorMessage,
          });
        }
      })
      .catch((error) => {
        notification.error({
          message: "Login Failed",
          description: error.response?.data || "Something went wrong.",
        });
        console.error("Login error: ", error);
      });
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Username" name="username">
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <Input {...field} placeholder="Username" />
              )}
            />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input.Password {...field} placeholder="Password" />
              )}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox onChange={toggleRememberMe}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
