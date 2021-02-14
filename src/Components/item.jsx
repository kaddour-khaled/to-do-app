const Item = ({ item }) => {
  return (
    <li className="list-group-item">
      <i className="fa fa-circle-o" aria-hidden="true"></i>
      <span>{item.textContent}</span>
      <button className="btn btn-danger m-2">X</button>
    </li>
  );
};

export default Item;
