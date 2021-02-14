import React, { Component } from "react";
import Item from "./item";

const ListItem = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};

export default ListItem;
