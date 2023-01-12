import styles from "./Total.module.scss";
import { useState, useEffect } from "react";

import { PRODUCTS_MAP, ShoppingCartItem } from "../types";

type TotalProps = {
  items: ShoppingCartItem[];
  setItems: any;
};

const Total: React.FC<TotalProps> = ({ items, setItems }) => {
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    if (!!items) {
      setSum(
        items.reduce((acc:any, el:any) => {
          const product = PRODUCTS_MAP[el.productId];
          const price = product?.price || 0;
          const quantity = el.quantity;
          const currentSum = price * quantity;
          return acc + price * quantity;
        }, 0)
      );
    }
  }, [items]);

  const onClickClear = () => {
    setItems([]);
  };

  return (
    <div className={styles.wrapper}>
      
        
          <div>{`Total: ${sum} $`}</div>
        
        <div>
          <button className={styles.button} onClick={onClickClear}>
            Clear
          </button>
        </div>
      
    </div>
  );
};

export default Total;
