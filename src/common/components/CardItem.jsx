import { Card, Col } from "antd-v3";
import Meta from "antd-v3/lib/card/Meta";
import React from "react";
import logo from "../../assets/iron-man.jpg";

const CardItem = (props) => {
  const HandleCardClick = () => {
    console.log(props.card.title);
  };
  return (
    <Col span={22}  >
      <Card
       style={{
        borderRadius: "25px",
        overflow: "hidden"
      }}
        id="card_item"
        hoverable
        onClick={HandleCardClick}
        cover={<img alt="" height={props.card.height} src={logo} />}
      >
        <Meta  title={props.card.title}  description={props.card.description} />

        <div className="card_bottom center">200 DT</div>
      </Card>
    </Col>
  );
};

export { CardItem };
