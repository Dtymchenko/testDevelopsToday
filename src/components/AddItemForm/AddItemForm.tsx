import styles from "./AddItemForm.module.scss";
import { useState, useEffect } from "react";

import { ALL_PRODUCTS, ShoppingCartItem } from "../types";

type AddItemFormProps = {
  items: ShoppingCartItem[];
  setItems: any;
};

const AddItemForm: React.FC<AddItemFormProps> = ({ items, setItems }) => {
  const [productId, setProductId] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        setProductId(productId)
    },[productId])

  const handleChangeId = (e: any) => {
    setProductId(e.target.value);
  };

  const handleChangeQuantity = (e: any) => {
    if (e.target.value >= 0) {
      setQuantity(e.target.value);
    }
  };

  const addItem = () => {
    if (!items.some((el:any) => el.productId === productId)) {
      setItems([
        ...items,
        {
          productId,
          quantity
        }
      ]);
    } else {
      const toggledItem:any = items.find((item:any) => item.productId === productId);
      toggledItem.quantity = Number(toggledItem.quantity) + Number(quantity);
      setItems([...items]);
    }
    setProductId("");
    setQuantity(0);
  };

  console.log(items)

  return (
    <div className={styles.wrapper}>
      <div className={styles.select_wrapper}>
        <label className={styles.label} htmlFor="product_select">Product</label>
        <select 
            id="product_select"
            value={productId}
            onChange={handleChangeId}
        >
            <option
            disabled
            ></option>
          {ALL_PRODUCTS.map((product) => (
            <option key={product.id} value={product.id}>
              {product.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="quantity_input">Quantity</label>
            <input id="quantity_input"
          type="number"
          onChange={handleChangeQuantity}
          value={quantity}>
          </input>
          
        
      </div>
      <button
        className={styles.button}
        onClick={addItem}
        disabled={!quantity || !productId}
      >
        Add
      </button>
    </div>
  );
};

export default AddItemForm;
