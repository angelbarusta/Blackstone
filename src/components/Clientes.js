import React from "react";
import faker from "faker";
import { Card, Image, List, Tab } from "semantic-ui-react";

import "../pages/styles/Home.css";

const show1 = {
  ima: faker.internet.avatar(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};
const show2 = {
  ima: faker.internet.avatar(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};
const show3 = {
  ima: faker.internet.avatar(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};

const show4 = {
  ima: faker.internet.avatar(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};
const show5 = {
  ima: faker.internet.avatar(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};
const show6 = {
  ima: faker.internet.avatar(),
  desc: faker.name.jobArea(),
  name: faker.internet.userName(),
};

const lista = [show1, show2, show3];
const listaNueva = [show4, show5, show6];

console.log("lista :", lista);

const Clientes = () => {
  const LIST_CARD = lista.map(({ ima, desc, name }, i) => (
    <List.Item key={i} className='HOME__Clientes_ListCardItem'>
      <Image
        circular
        className='HOME__Clientes_ListCardItem_Image'
        src={ima}
        //src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
      />
      <div className='HOME__Clientes_ListCardItem_Image_desc'>
        <List.Header>{name}</List.Header>
        {desc}
      </div>
    </List.Item>
  ));
  const LIST_CARD_NUEVA = listaNueva.map(({ ima, desc, name }, i) => (
    <List.Item key={i} className='HOME__Clientes_ListCardItem'>
      <Image
        circular
        className='HOME__Clientes_ListCardItem_Image'
        src={ima}
        // src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
      />
      <div className='HOME__Clientes_ListCardItem_Image_desc'>
        <List.Header>{name}</List.Header>
        {desc}
      </div>
    </List.Item>
  ));
  const panes = [
    {
      menuItem: "NEW CLIENTS",
      render: () => (
        <List Horizontal className='HOME__Clientes_ListCardAnnou'>
          {LIST_CARD}
        </List>
      ),
    },
    {
      menuItem: "NEW STAFF",
      render: () => (
        <List Horizontal className='HOME__Clientes_ListCardAnnou'>
          {LIST_CARD_NUEVA}
        </List>
      ),
    },
  ];
  return (
    <>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </>
  );
};

export default Clientes;
