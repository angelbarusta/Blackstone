import React from "react";
import faker from "faker";
import { Card, Image, List, Button } from "semantic-ui-react";

import "../pages/styles/Home.css";

const show1 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
};
const show2 = {
  ima: faker.image.image(),
  desc: faker.name.jobArea(),
};

const lista = [show1, show2];

console.log("lista :", lista);

const CartasAnnou = () => {
  const LIST_CARD = lista.map(({ ima, desc }, i) => (
    <Card key={i} className='HOME__ListCardItem'>
      <Image
        className='HOME__ListCardItem_Image'
        src={ima}
        //src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
      />
      <Card.Content>
        <Card.Description>{desc}.</Card.Description>
      </Card.Content>
    </Card>
  ));
  return (
    <>
      <h4 style={{ padding: "10px 0px 0px 20px" }}>Anuncios</h4>
      <div className='HOME__ListCardAnnou'>
        {LIST_CARD}{" "}
        <Button
          circular
          color='green'
          icon='angle right'
          style={{ height: 36, margin: "auto" }}
        />
      </div>
    </>
  );
};

export default CartasAnnou;
