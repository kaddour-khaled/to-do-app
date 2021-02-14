import React, { Component } from "react";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          <i className="fa fa-circle-o" aria-hidden="true"></i>
          <span>{item.textContent}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
