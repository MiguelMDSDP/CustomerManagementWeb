import React, { useEffect } from "react";
import { Button, notification } from "antd";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const InsideSystemPage: React.FC = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleLogout = async () => {
    logout();
    notification.success({
      message: "Logout Successful",
    });
  };

  return (
    <div className="inside-page-container">
      <h1 className="inside-page-header">You are inside the system!</h1>
      <Button className="logout-button" type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default InsideSystemPage;
