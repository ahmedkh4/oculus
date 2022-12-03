import { Col, Row } from "antd-v3";
import React from "react";
import { CardItem } from "../../common/components/CardItem";

const Stacks = (props) => {
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

  const imgStyle = {
    borderRadius : "15px"
  }
  return (
    <>
    <Col span={24} className='section'>
    <Row>
      <Col span={3}>
    <h3>{props.title}</h3>
    </Col>
    <Col span={21} style={{paddingBottom:"15px"}}>
    {props.logos && (props.logos.map((elem) => {
    return <Col span={2} ><img  alt=""  style={imgStyle} width={45} src={elem.src} /></Col> 
    }))}
    </Col>
    </Row>
      <Row>
        <Col span={24}  >
        {bestSeller.map((item) => {
          return <Col span={4} > <CardItem card={item}  /> </Col>;
        })}
        </Col>
    
      </Row>
      </Col>
    </>
  );
};

export { Stacks };
