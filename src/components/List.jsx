import Item from "./Item";
function List() {
  return (
    <div className="container my-2">
      <ul>
        <Item name="Ballygowan Still Water 500ml" qty={5} />
        <Item name="Ballygowan Still Water 500ml" qty={5} />
        <Item name="Ballygowan Still Water 500ml" qty={5} />
      </ul>
    </div>
  );
}

export default List;
