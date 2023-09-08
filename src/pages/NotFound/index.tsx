import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = async () => {
    navigate(-1);
  };

  return (
    <div className="not-found-page-container">
      <h1 className="not-found-page-header">Oops! Page not found!</h1>
      <Button className="go-back-button" type="primary" onClick={handleGoBack}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFoundPage;
