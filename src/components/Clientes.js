import React from "react";
import faker from "faker";
import { Card, Image, List } from "semantic-ui-react";

import "../pages/styles/Home.css";

const show1 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};
const show2 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};
const show3 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};

const lista = [show1, show2, show3];

console.log("lista :", lista);

const Clientes = () => {
  const LIST_CARD = lista.map(({ ima, desc, name }, i) => (
    <List.Item key={i} className='HOME__Clientes_ListCardItem'>
      <Image
        circular
        className='HOME__Clientes_ListCardItem_Image'
        src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
      />
      <List.Content>
        <List.Header>{name}</List.Header>
        {desc}
      </List.Content>
    </List.Item>
  ));
  return (
    <List Horizontal className='HOME__Clientes_ListCardAnnou'>
      {LIST_CARD}
    </List>
  );
};

export default Clientes;
