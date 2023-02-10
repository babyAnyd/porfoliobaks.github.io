export const AddedTask = (props) => {
  return (
    <ul>
      <li>{props.taskName}</li>
      <button onClick={() => props.handleDelete(props.id)}>X</button>
    </ul>
  );
};
