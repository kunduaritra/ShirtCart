import { Fragment, useState } from "react";
import ShirtList from "./ShirtList";

const Shirt = (props) => {
  const [myShirt, setMyShirt] = useState([]);
  const [newShirt, setNewShirt] = useState({
    name: "",
    description: "",
    price: "",
    lSize: "",
    mSize: "",
    sSize: "",
  });

  const addShirtHandler = (event) => {
    event.preventDefault();
    console.log("myShirt", myShirt);
    if (
      newShirt.name &&
      newShirt.description &&
      newShirt.price &&
      newShirt.lSize &&
      newShirt.mSize &&
      newShirt.sSize
    ) {
      const shirtId = Date.now().toString();
      setMyShirt((prevShirt) => [...prevShirt, { ...newShirt, id: shirtId }]);
      setNewShirt({
        name: "",
        description: "",
        price: "",
        lSize: "",
        mSize: "",
        sSize: "",
      });
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewShirt((prevShirt) => ({
      ...prevShirt,
      [name]:
        name === "price" ||
        name === "lSize" ||
        name === "mSize" ||
        name === "sSize"
          ? parseFloat(value)
          : value,
    }));
  };

  return (
    <Fragment>
      <form onSubmit={addShirtHandler}>
        <input
          placeholder="Shirt Name"
          className="text-1xl shadow border p-1 rounded"
          type="text"
          name="name"
          value={newShirt.name}
          onChange={inputChangeHandler}
        />
        <input
          placeholder="Description"
          className="text-1xl shadow border p-1 rounded"
          type="text"
          name="description"
          value={newShirt.description}
          onChange={inputChangeHandler}
        />
        <input
          placeholder="Price"
          className="text-1xl shadow border p-1 rounded"
          type="number"
          name="price"
          value={newShirt.price}
          onChange={inputChangeHandler}
        />
        <input
          placeholder="L Size"
          className="text-1xl shadow border p-1 rounded"
          type="number"
          name="lSize"
          value={newShirt.lSize}
          onChange={inputChangeHandler}
        />
        <input
          placeholder="M Size"
          className="text-1xl shadow border p-1 rounded"
          type="number"
          name="mSize"
          value={newShirt.mSize}
          onChange={inputChangeHandler}
        />
        <input
          placeholder="S Size"
          className="text-1xl shadow border p-1 rounded"
          type="number"
          name="sSize"
          value={newShirt.sSize}
          onChange={inputChangeHandler}
        />
        <button className="btn bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
          Add Shirt
        </button>
      </form>
      <>
        <h2 className="text-2xl font-bold mt-4 ml-4">Available Shirt</h2>
        <ShirtList shirtList={myShirt} />
      </>
    </Fragment>
  );
};

export default Shirt;
