import React, { Component } from "react";
import Item from "./item";

const ListItem = ({ items, onCompleteEvent, onDelete }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onCompleteEvent={onCompleteEvent}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ListItem;
