import React from "react";
import faker from "faker";
import { Card, Image, List } from "semantic-ui-react";

import "../pages/styles/Home.css";

const show1 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
  color: faker.internet.color(),
  title: faker.company.companyName(),
};
const show2 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
  color: faker.internet.color(),
  title: faker.company.companyName(),
};
const show3 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
  color: faker.internet.color(),
  title: faker.company.companyName(),
};

const lista = [show1, show2, show3];

console.log("lista :", lista);

const Tareas = () => {
  const LIST_CARD = lista.map(({ ima, title, color, desc }, i) => (
    <Card
      key={i}
      className='HOME__Tareas_ListCardItem'
      style={{ background: color, padding: 10 }}>
      <Card.Description style={{ color: "white" }}>{title}.</Card.Description>
      <Card.Meta style={{ color: "white", fontSize: 10 }}>
        <Card.Description>{desc}</Card.Description>
      </Card.Meta>
    </Card>
  ));
  return (
    <div className='HOME__Tareas_ListCard'>
      <h4>Recursos</h4>
      {LIST_CARD}
    </div>
  );
};

export default Tareas;
