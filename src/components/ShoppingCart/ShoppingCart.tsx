import styles from "./ShoppingCart.module.scss";
import { useState } from "react";

import { ShoppingCartItem } from "../types";
import AddItemForm from './../AddItemForm/AddItemForm';
import ItemsList from './../ItemsList/ItemsList';
import Total from './../Total/Total';

const ShoppingCart = () => {
  const [items, setItems] = useState<ShoppingCartItem[]>([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Shopping Cart</div>
      <AddItemForm items={items} setItems={setItems} />
      {!!items.length && (
        <>
          <ItemsList items={items} setItems={setItems} />
          <Total items={items} setItems={setItems} />
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
