import { Col, Row } from "antd-v3";
import React from "react";

const Footer = () => {
  return (
    <Col span={24} className="separator section container footer">
      <Row>
        <Col span={8} offset={4}>
          <div>email : ayoub agda3 nes @rojla.tn</div>
          <div>tel:30070</div>
        </Col>
        <Col span={8} offset={4}>
          <div>website : toplojla.net</div>
          <div>contact ass</div>
        </Col>
      </Row>
    </Col>
  );
};

export { Footer };
