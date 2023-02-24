function Board({ id, title, writer, created, readCount }) {
  console.log(id);
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{writer}</td>
      <td>{created}</td>
      <td>{readCount}</td>
    </tr>
  );
}

export default Board;
