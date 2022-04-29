import { Card, Col } from "antd";
import React from "react";

function ProgramsCards() {
  return (
    <Col  xs={24} sm={24} lg={4}>
      <Card className="h-100 text-center" title="Card title" bordered={false}>
        <ul className="card_list text-center">
          <ul>lorem</ul>
          <ul>lorem</ul>
          <ul>lorem</ul>
          <ul>lorem</ul>
        </ul>
      </Card>
    </Col>
  );
}

export default ProgramsCards;
