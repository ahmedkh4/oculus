import { Card } from "antd-v3";
import Meta from "antd-v3/lib/card/Meta";
import React from "react";

import logo from "../../assets/iron-man.jpg";

const MainCard = (props) => {

  const HandleCardClick = () => {
    console.log(props.card.title);
  };
  return (
  <>
    <Card
       style={{
        borderRadius: "25px",
        overflow: "hidden"
      }}
      hoverable
      id="main_card"
      onClick={HandleCardClick}
      cover={<img alt="example" height={props.card.height} src={logo} />}
    >
      <Meta className="card_bottom mainCard center " title={"Visit Main Section"} />

    </Card>
    </>
  );
};

export { MainCard };
