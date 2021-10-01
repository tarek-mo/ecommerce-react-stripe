import { useEffect, useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import { CartContext } from "../contexts/CartContext";
import { commerce } from "../lib/commerce";
const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const { load, stopLoad } = useContext(LoadingContext);
  const fetchCart = async () => {
    load();
    setCart(await commerce.cart.retrieve());
    stopLoad();
  };
  useEffect(() => {
    fetchCart();
  }, []);

  return cart;
};

export default useCart;
