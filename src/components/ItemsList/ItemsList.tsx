import styles from "./ItemsList.module.scss";

import { PRODUCTS_MAP, ShoppingCartItem } from "../types";

type ItemsListProps = {
  items: ShoppingCartItem[];
  setItems: any;
};

const ItemsList: React.FC<ItemsListProps> = ({ items, setItems }) => {
  const removeItem = (id: string) => {
    setItems([...items.filter((el:any) => el.productId !== id)]);
  };

  const onClickPlus = (id: string) => {
    setItems([
      ...items.map((el:any) =>
        el.productId === id
          ? { ...el, quantity: Number(el.quantity) + 1 }
          : { ...el }
      )
    ]);
  };

  const onClickMinus = (id: string) => {
    items.forEach((el) => {
      if (el.productId === id && el.quantity > 1) {
        el.quantity -= 1;
        setItems([...items]);
      } else if (el.productId === id && el.quantity == 1) {
        removeItem(id);
      }
    });
  }

  return (
    <div className={styles.wrapper}>
      {items.map((item) => {
        const product = PRODUCTS_MAP[item?.productId];
        const price = product?.price || 0;

        return (
          <div className={styles.item} key={item?.productId}>
            <div>
            <div>{product?.label}</div>
              <div>{`${item?.quantity} x $${price} = $${
                item?.quantity * price
              }`}
              </div>
            </div>
              
            
              <div className={styles.buttons}>
              <button className={styles.button} onClick={() => onClickPlus(item.productId)}>+</button>
              <button className={styles.button} onClick={() => onClickMinus(item.productId)}>-</button>
              <button className={styles.button} onClick={() => removeItem(item.productId)}>x</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
