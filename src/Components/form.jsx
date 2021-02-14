const Form = ({ onAdd }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const value = e.target.content.value;
    if (!value) return;
    onAdd(value);
    e.target.content.value = "";
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="form-group">
        <input
          name="content"
          type="text"
          className="form-control form-control-lg"
          placeholder=" Put the texte content of new task and press Enter"
        />
      </div>
    </form>
  );
};

export default Form;
