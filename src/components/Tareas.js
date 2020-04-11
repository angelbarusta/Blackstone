import React from "react";
import faker from "faker";
import { Card, Image, List } from "semantic-ui-react";

import "../pages/styles/Home.css";

const show1 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
};
const show2 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
};
const show3 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
};

const lista = [show1, show2, show3];

console.log("lista :", lista);

const Tareas = () => {
  const LIST_CARD = lista.map(({ ima, desc }, i) => (
    <Card key={i} className='HOME__Tareas_ListCardItem'>
      <Card.Content>
        <Card.Description>{desc}.</Card.Description>
      </Card.Content>
    </Card>
  ));
  return <div className='HOME__Tareas_ListCard'>{LIST_CARD}</div>;
};

export default Tareas;
