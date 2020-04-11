import React from "react";
import faker from "faker";
import { Card, Image, List, Tab } from "semantic-ui-react";

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
      <div className='HOME__Clientes_ListCardItem_Image_desc'>
        <List.Header>{name}</List.Header>
        {desc}
      </div>
    </List.Item>
  ));
  const panes = [
    {
      menuItem: "Tab 1",
      render: () => (
        <List Horizontal className='HOME__Clientes_ListCardAnnou'>
          {LIST_CARD}
        </List>
      ),
    },
    {
      menuItem: "Tab 2",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
  ];
  return (
    <>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </>
  );
};

export default Clientes;
