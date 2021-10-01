import { useState, useEffect, useContext } from "react";
import { commerce } from "../lib/commerce";
import { LoadingContext } from "../contexts/LoadingContext";
const useProducts = () => {
  const [products, setProducts] = useState(null);
  const { loading, load, stopLoad } = useContext(LoadingContext);

  const fetchProducts = async () => {
    load();
    const { data } = await commerce.products.list();
    setProducts(data);
    stopLoad();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;
