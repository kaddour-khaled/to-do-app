const Item = ({ item, onCompleteEvent }) => {
  const itemClass = item.isComplete ? "completed" : "";
  const iClasses = item.isComplete
    ? "completed fa fa-check-circle-o"
    : "fa fa-circle-o";
  return (
    <li className="list-group-item" onDoubleClick={() => onCompleteEvent(item)}>
      <i className={iClasses} aria-hidden="true"></i>
      <span className={itemClass}>{item.textContent}</span>
      <button className={"btn btn-danger m-2"}>X</button>
    </li>
  );
};

export default Item;
