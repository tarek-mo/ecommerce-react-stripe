import { commerce } from "../lib/commerce";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { LoadingContext } from "../contexts/LoadingContext";

const useUpdateCart = () => {
  const { load, stopLoad } = useContext(LoadingContext);
  const { setCart } = useContext(CartContext);

  const addToCart = async (productId, quantity) => {
    load();
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
    stopLoad();
  };

  const emptyCart = async () => {
    load();
    const { cart } = await commerce.cart.empty();
    setCart(cart);
    stopLoad();
  };
  const removeProductFromCart = async (productId) => {
    load();
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
    stopLoad();
  };

  const updateProductQtityInCart = async (productId, quantity) => {
    load();
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
    stopLoad();
  };

  return {
    addToCart,
    emptyCart,
    removeProductFromCart,
    updateProductQtityInCart,
  };
};

export default useUpdateCart;
