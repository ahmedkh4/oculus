import { Carousel, Col, Row } from "antd-v3";
import React from "react";
import { MainCard } from "../../common/components/MainCard";
import { BestSeller } from "./BestSeller";

const Banner = () => {
  return (
    <Row className='section'>
      <Col span={24}>
        <Col span={12}>
          <Row>
            <h3>Hot Stuff</h3>
          </Row>
          <Row>
          <Carousel id="carousel"  dotPosition={"top"} >
            <MainCard
              card={{
                title: "Iron Man",
                description: "best hero ever",
                image: "iron-man",
                width: 250,
              }}
            />
             <MainCard
              card={{
                title: "Iron Man",
                description: "best hero ever",
                image: "thor",
                width: 250,
              }}
            />
          </Carousel>
          </Row>
        
        </Col>
        <Col span={9} offset={2}>
          <BestSeller />
        </Col>
      </Col>
    </Row>
  );
};

export { Banner };
