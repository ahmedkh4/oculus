import { Col, Row } from 'antd-v3';
import React from 'react'
import {  SearchBar } from '../../common/components/Search';
import { Banner } from './Banner';
import { Stacks } from './Stack';
import { Separator } from './Separator';
import logo from "../../assets/thor.jpg"
import "./Home.css";


const Home=() => {
  return (
   <>
   <Row >
   <Col span={14} offset={5}>
  
   <SearchBar/>
   <Banner />
   <Stacks title={"Latest Arrivals"}  />
   </Col>
   <Separator/>
   <Col span={14} offset={5}>
   <Stacks title={"Latest Arrivals"} logos={[{src:logo} , {src:logo}]} />
   </Col>
   </Row>
   </>
  )
}

export {Home} 