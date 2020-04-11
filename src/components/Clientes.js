import React from "react";
import faker from "faker";
import { Card, Image, List, Tab, Label, Menu } from "semantic-ui-react";

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

const countNewClients = listaNueva.length;
const countClients = lista.length;

var label1 = (
  <Label circular color='green' style={{ height: 20 }}>
    {" "}
    {countClients}
  </Label>
);
var label2 = (
  <Label circular color='green' style={{ height: 20 }}>
    {" "}
    {countNewClients}
  </Label>
);

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
      menuItem: (
        <Menu.Item key='Clientes'>
          Clientes
          <Label circular color='green'>
            {countClients}
          </Label>
        </Menu.Item>
      ),
      render: () => (
        <List Horizontal className='HOME__Clientes_ListCardAnnou'>
          {LIST_CARD}
        </List>
      ),
    },
    {
      menuItem: (
        <Menu.Item key='Nuevos Clientes'>
          Nuevos Clientes
          <Label circular color='green'>
            {countNewClients}
          </Label>
        </Menu.Item>
      ),
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
