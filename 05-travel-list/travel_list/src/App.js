import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [item, setItems] = useState([]);

  //  const [pack, setPack] = useState(false);

  const handleDel = (item) => {
    setItems((items) => items.filter((delId) => delId.id !== item));
  };
  // const addItems = () => {
  //   setItems((items) => {
  //     console.log(items.length)
  //     return items.length + 1});

  // };
  const handleAddItems = (item) => {
    // console.log(`its id from del ${item.length}`);
    setItems((items) => {
      // console.log(`ftomr i ${items.length + 1}`)
      // const add = items.length + 1;
      return [...items, item];
    });
    console.log();

    // addItems()
    // console.log(setItems)
  };

  // console.log(`add edd ${addItems}`)
  // addItems()
  const handlePack = (ids) => {
    console.log(ids);
    setItems((items) =>
      items.map((item) =>
        item.id === ids ? { ...item, packed: !item.packed } : item
      )
    );

     
  };
   const clearAll = () => {
     setItems([]);
     // setSort('input')
     // const isClear = sortItem.splice(0, sortItem.length);
     // let sortItem = {};
     // console.log(sortItem.splice(0, sortItem.length));
   };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onAddItems={item}
        onDelItem={handleDel}
        onpack={handlePack}
        clearAll={clearAll}
      />
      <Stats item={item} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (!description) {
      setQuantity(1);
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    // DisplayTotal()
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value)
          setQuantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item ..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value)
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ onAddItems, onDelItem, onpack, clearAll }) {
  const [sort, setSort] = useState("input");
  let sortItem;
  if (sort === "input") sortItem = onAddItems;
  if (sort === "description")
    sortItem = [...onAddItems].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sort === "packed")
    sortItem = [...onAddItems].sort((a, b) => a.packed - b.packed);

  // const clear = sortItem.splice(0, sortItem.length)

  return (
    <div className="list">
      <ul>
        {/* {newItem.map} */}
        {sortItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelItem={onDelItem}
            onpack={onpack}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">sort by order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by pack status</option>
        </select>

        <button onClick={clearAll}> Clear all</button>
      </div>
    </div>
  );
}

function Item({ item, onDelItem, onpack }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onpack(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>{" "}
      <button onClick={() => onDelItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ item }) {
  const addItems = item.length;
  const packedItems = item.filter((items) => items.packed).length;
  const percentPacked = Math.round((packedItems / addItems) * 100);
  return (
    <footer className="stats">
      <em>
        🥥 you have {addItems} items on your list, and you already pack{" "}
        {packedItems} ({percentPacked}%)
      </em>
    </footer>
  );
}

export default App;
