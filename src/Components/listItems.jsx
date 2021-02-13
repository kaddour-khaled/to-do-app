import React, { Component } from "react";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.textContent}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
