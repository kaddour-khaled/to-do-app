import React, { Component } from "react";
import Item from "./item";

const ListItem = ({ items, onCompleteEvent }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item.id} item={item} onCompleteEvent={onCompleteEvent} />
      ))}
    </ul>
  );
};

export default ListItem;
