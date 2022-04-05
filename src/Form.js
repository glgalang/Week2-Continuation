const Form = (props) => {
  return (
    <div>
      <label htmlFor="user-input">Type something: </label>
      <input
        type="text"
        id="user-input"
        value={props.value}
        onChange={props.onChange}
      />
      <button onClick={props.submit}>Submit</button>
    </div>
  );
};

export default Form;
