import { Button, Col, Row } from "antd-v3";
import React from "react";

const Separator = () => {
  const buttonStyle = {
    width: "60%",
    margin: "0 auto",
    position: "relative",
    padding: "30px",
    display: "inline-block",
    verticalAlign: "middle",
  };
  return (
    <Col span={24} className="separator section container">
      <Row className="vertical-center">
        <Col span={12} className="center">
          <p className="title">
            Live the gaming <br /> Experience
          </p>
        </Col>
        <Col span={12} className="center container">
          <Button
            size="large"
            shape="round"
            style={buttonStyle}
            className="vertical-center"
          >
            choose your game now
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export { Separator };
