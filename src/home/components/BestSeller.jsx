import { Col, Row } from "antd-v3";
import React from "react";
import { CardItem } from "../../common/components/CardItem";

const bestSeller = [
  {
    title: "Iron Man",
    description: "best hero ever",
    image: "iron-man",
    width: 120,
  },
  {
    title: "Iron Man",
    description: "best hero ever",
    image: "iron-man",
    width: 120,
  },
  {
    title: "Iron Man",
    description: "best hero ever",
    image: "iron-man",
    width: 120,
  },
  {
    title: "Iron Man",
    description: "best hero ever",
    image: "iron-man",
    width: 120,
  },
];
const BestSeller = () => {
  return (
    <>
      <Row>
        <h3>Best Sellers</h3>
      </Row>

      <Row gutter={6}>
        {bestSeller.map((item) => {
          return (
            <Col span={12}>
              <CardItem card={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export { BestSeller };
