
import React from 'react'
import { Col} from 'antd-v3';
import logo from "../../assets/iron-man.jpg";



const Header=() => {

  const headerstyle = 
  {backgroundColor:"white"}

  return (

    <>
        <Col span={24} style={headerstyle}>

          <spa>
            <Col span={12} offset={6} style= {{textAlign:"start"}}>
            <img   src={logo} alt="" width={80}  style= {{padding:"10px"}} ></img>
            </Col>

          
          </spa>
        </Col>

    </>
  );
}

export  {Header}